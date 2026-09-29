document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Обработчик для поля загрузки файлов
    const fileInput = document.getElementById('file-input');
    const fileName = document.getElementById('file-name');
    const fileInfo = document.getElementById('file-info');
    const fileLabel = document.querySelector('.file-label');
    const contactForm = document.getElementById('contact-form');
    
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                // Проверка размера файла (максимум 5MB)
                const maxSize = 5 * 1024 * 1024; // 5MB в байтах
                if (file.size > maxSize) {
                    alert('Размер файла превышает 5MB. Пожалуйста, выберите файл меньшего размера.');
                    resetFileInput();
                    return;
                }
                
                // Отображение информации о файле
                const fileSize = (file.size / 1024).toFixed(2) + ' KB';
                fileName.textContent = file.name + ' (' + fileSize + ')';
                fileInfo.style.display = 'flex';
                
                // Создание кнопки для очистки
                if (!document.getElementById('file-clear')) {
                    const clearButton = document.createElement('button');
                    clearButton.id = 'file-clear';
                    clearButton.textContent = 'Очистить';
                    clearButton.className = 'clear-btn';
                    clearButton.onclick = function(e) {
                        e.preventDefault();
                        resetFileInput();
                    };
                    fileInfo.appendChild(clearButton);
                }
                
                // Изменение текста кнопки
                const buttonText = fileLabel.querySelector('span');
                if (buttonText) {
                    buttonText.textContent = 'Изменить файл';
                }
            }
        });
    }
    
    // Функция сброса поля выбора файла
    window.resetFileInput = function() {
        if (fileInput) {
            fileInput.value = '';
            fileInfo.style.display = 'none';
            
            // Возвращаем оригинальный текст
            const buttonText = fileLabel.querySelector('span');
            if (buttonText) {
                buttonText.textContent = 'Выбрать файл';
            }
            
            // Удаляем кнопку очистки
            const clearButton = document.getElementById('file-clear');
            if (clearButton) {
                clearButton.remove();
            }
        }
    };
    
    // Плавный скролл к секциям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
            
            // Закрыть мобильное меню при клике
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // Анимация появления элементов
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const fadeCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const fadeObserver = new IntersectionObserver(fadeCallback, {
        threshold: 0.1
    });
    
    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });

    // Особая анимация для карточек услуг с последовательным появлением
    const serviceCards = document.querySelectorAll('.services-grid .service-card');
    
    // Сначала удалим все классы задержки, если они уже были
    serviceCards.forEach((card) => {
        card.classList.remove('delay-1', 'delay-2', 'delay-3', 'delay-4', 'delay-5', 'delay-6');
    });
    
    // Добавляем последовательные задержки
    serviceCards.forEach((card, index) => {
        // Добавляем класс задержки в зависимости от индекса (1-6)
        const delayClass = `delay-${index + 1}`;
        if (index < 6) { // Ограничиваем до 6 задержек максимум
            card.classList.add(delayClass);
        } else {
            card.classList.add('delay-6'); // Для всех остальных используем максимальную задержку
        }
        
        // Добавляем класс для анимации появления
        card.classList.add('service-card-animate');
        
        // Добавляем обработчики для анимации при наведении
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover-effect');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover-effect');
        });

        // Добавляем 3D-эффект при движении мыши
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const xPercent = x / rect.width;
            const yPercent = y / rect.height;

            // Наклон только от позиции курсора, без изначального наклона
            const rotateY = (xPercent - 0.5) * 16; // -8 до 8
            const rotateX = -((yPercent - 0.5) * 16); // -8 до 8

            // Параллакс-эффект для самой карточки
            this.style.transform = `perspective(1200px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
            this.style.transition = 'transform 0.08s cubic-bezier(0.23, 1, 0.32, 1)';

            // Параллакс для внутренних элементов (иконка, заголовок, текст)
            const svg = this.querySelector('svg');
            const title = this.querySelector('h3');
            const text = this.querySelector('p');
            const elements = [svg, title, text].filter(el => el);
            elements.forEach((el, index) => {
                const depth = 15 - (index * 3);
                const translateX = (0.5 - xPercent) * depth;
                const translateY = (0.5 - yPercent) * depth;
                el.style.transform = `translate3d(${translateX}px, ${translateY}px, ${20 + index * 5}px)`;
                el.style.transition = 'transform 0.08s cubic-bezier(0.23, 1, 0.32, 1)';
            });
        });

        // При наведении — плавно сбрасываем наклон
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.18s cubic-bezier(0.23, 1, 0.32, 1)';
        });

        // При уходе мыши — возвращаем в исходное положение с большей плавностью
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.75s cubic-bezier(0.23, 1, 0.32, 1)';
            this.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
            const elements = this.querySelectorAll('svg, h3, p');
            elements.forEach(el => {
                el.style.transform = 'translate3d(0, 0, 0)';
                el.style.transition = 'transform 0.75s cubic-bezier(0.23, 1, 0.32, 1)';
            });
        });
    });

    // Добавляем наблюдатель для анимации появления карточек услуг
    const serviceCardsObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    
    // Регистрируем каждую карточку услуг в наблюдателе
    serviceCards.forEach(card => {
        serviceCardsObserver.observe(card);
    });

    // Фон сайта теперь 3D (Three.js) — см. js/space-bg.js
});

// Конфигурация API
// ВАЖНО: на GitHub Pages (https) адрес http://localhost:8000 работать не будет —
// форма не отправится. Перед публикацией укажите тут реальный HTTPS-адрес API,
// иначе форма продолжит слать запрос на локальную машину.
const API_CONFIG = {
    BASE_URL: 'http://localhost:8000',  // Базовый URL API бота
    ENDPOINTS: {
        SUBMIT_FORM: '/api/submit',    // Эндпоинт отправки формы
        CHECK_STATUS: '/order-status'   // Эндпоинт проверки статуса
    }
};

// Обработка формы и загрузки файла (на страницах без формы элементов нет)
const form = document.getElementById('contact-form');
const fileInput = document.getElementById('file-input');
const fileInfo = document.querySelector('.file-info');
const fileName = document.getElementById('file-name');

// Обработка загрузки файла
if (fileInput) fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const fileSize = file.size / (1024 * 1024); // Размер в МБ
        if (fileSize > 5) {
            alert('Файл слишком большой. Максимальный размер: 5MB');
            fileInput.value = '';
            fileInfo.style.display = 'none';
            return;
        }
        fileName.textContent = file.name;
        fileInfo.style.display = 'block';
    } else {
        fileInfo.style.display = 'none';
    }
});

// Отправка формы
if (form) form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Отправка...';

    try {
        const formData = new FormData(form);
        
        const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SUBMIT_FORM}`, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error('Ошибка при отправке формы');
        }

        const result = await response.json();
        
        // Очистка формы после успешной отправки
        form.reset();
        fileInfo.style.display = 'none';
        
        // Показываем сообщение об успехе с ID заказа
        alert('Заявка успешно отправлена!');
        
    } catch (error) {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.');
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});
