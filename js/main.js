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


    // Сначала очистим все существующие анимированные фигуры
    clearAllShapes();

    // Создание и анимация геометрических фигур
    // Как для главного экрана, так и для всего сайта
    initGeometricBackground('geometric-bg', 10);
    initGeometricBackground('site-bg', 15);
    
    // Адаптация количества фигур для мобильных устройств
    function handleResize() {
        const width = window.innerWidth;
        adjustShapesForMobile(width);
    }
    
    // Запускаем адаптацию при загрузке и изменении размера окна
    handleResize();
    window.addEventListener('resize', handleResize);

    // Запускаем проверку пересечений
    startIntersectionCheck();
});

// Запускаем периодическую проверку пересечений - УБРАНА
function startIntersectionCheck() {
    // Функция больше не запускает проверку пересечений
    // Просто инициализируем ID фигур для совместимости
    initShapeIds();
}

// Инициализация уникальных ID для всех фигур
function initShapeIds() {
    const shapes = document.querySelectorAll('.shape, .geometric-shape');
    shapes.forEach((shape, index) => {
        if (!shape.dataset.shapeId) {
            shape.dataset.shapeId = `shape_${Date.now()}_${index}`;
        }
    });
}

// Анимация движения и вращения фигуры - оптимизированная для производительности
function animateShape(shape, speedX, speedY, rotationSpeed, isFullPage) {
    // Начальные позиции сохраняем из dataset
    let posX = parseFloat(shape.dataset.startPosX || 0);
    let posY = parseFloat(shape.dataset.startPosY || 0);
    let rotation = parseFloat(shape.dataset.startRotation || 0);
    
    // Для динамической прозрачности
    let opacity = parseFloat(shape.dataset.baseOpacity || 0.7);
    let opacityDirection = Math.random() > 0.5 ? 1 : -1; // Случайное направление изменения прозрачности
    let opacitySpeed = 0.0005 + (Math.random() * 0.001); // Случайная скорость изменения прозрачности
    
    // Даем фигуре уникальный ID для отслеживания
    shape.dataset.shapeId = `shape_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    
    // Добавляем класс shape для всех движущихся фигур
    shape.classList.add('shape');
    
    // Случайная начальная прозрачность при загрузке страницы (для разнообразия)
    const initialOpacity = Math.random() * 0.8 + 0.05; // от 0.05 до 0.85
    if (shape.tagName.toLowerCase() === 'svg') {
        // Для SVG треугольников
        const polygon = shape.querySelector('polygon');
        if (polygon) {
            polygon.setAttribute('stroke', `rgba(255, 255, 255, ${initialOpacity})`);
        }
    } else {
        // Для других фигур
        shape.style.borderColor = `rgba(255, 255, 255, ${initialOpacity})`;
    }
    opacity = initialOpacity;
    
    // Сразу устанавливаем начальную позицию 
    shape.style.left = `${posX}%`;
    shape.style.top = `${posY}%`;
    shape.style.transform = `rotate(${rotation}deg)`;
    
    // Добавляем плавное изменение прозрачности, но не позиции
    shape.style.transition = 'border-color 1s, stroke 1s';
    
    // Используем timestamp для расчета движения
    let lastUpdate = 0;
    
    // Сразу начинаем дрейф с небольшим смещением, чтобы не было заметно замирания
    posX += (Math.random() - 0.5) * 0.1;
    posY += (Math.random() - 0.5) * 0.1;
    
    // Функция для анимации
    function update(timestamp) {
        // Рассчитываем delta time для плавного движения независимо от частоты кадров
        if (!lastUpdate) lastUpdate = timestamp;
        const delta = (timestamp - lastUpdate) / 16.67; // нормализуем к ~60fps
        lastUpdate = timestamp;
        
        // Обновление позиции с учетом delta time
        posX += speedX * delta;
        posY += speedY * delta;
        rotation += rotationSpeed * delta;
        
        // Обновление прозрачности
        opacity += opacityDirection * opacitySpeed * delta;
        
        // Если достигли предельных значений прозрачности, меняем направление
        if (opacity <= 0.05) {
            opacity = 0.05;
            opacityDirection = 1; // Начинаем увеличивать прозрачность
        } else if (opacity >= 0.85) {
            opacity = 0.85;
            opacityDirection = -1; // Начинаем уменьшать прозрачность
        }
        
        // Применяем новую прозрачность
        if (shape.tagName.toLowerCase() === 'svg') {
            // Для SVG треугольников
            const polygon = shape.querySelector('polygon');
            if (polygon) {
                polygon.setAttribute('stroke', `rgba(255, 255, 255, ${opacity})`);
            }
        } else {
            // Для других фигур
            shape.style.borderColor = `rgba(255, 255, 255, ${opacity})`;
        }
        
        // Проверка границ контейнера
        if (posX > 110) posX = -10;
        if (posX < -10) posX = 110;
        if (posY > 110) posY = -10;
        if (posY < -10) posY = 110;
        
        // Применение новых значений с использованием transform для лучшей производительности
        shape.style.left = `${posX}%`;
        shape.style.top = `${posY}%`;
        shape.style.transform = `rotate(${rotation}deg)`;
        
        // Убираем transition после первого обновления
        if (shape.style.transition) {
            shape.style.transition = 'none';
        }
        
        // Проверяем, существует ли элемент перед продолжением анимации
        if (shape.isConnected) {
            requestAnimationFrame(update);
        }
    }
    
    // Случайная небольшая задержка старта (не более 500 мс) для разнообразия
    const startDelay = Math.random() * 500;
    setTimeout(() => {
        requestAnimationFrame(update);
    }, startDelay);
}

// Создание случайной фигуры с оптимизацией для производительности
function createRandomShape(container, shapeTypes) {
    const shape = document.createElement('div');
    shape.classList.add('geometric-shape');
    
    // Даем фигуре уникальный ID для отслеживания
    shape.dataset.shapeId = `shape_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    
    // Выбор случайного типа фигуры
    const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
    
    // Добавляем класс типа фигуры
    shape.classList.add(shapeType);
    
    // Размер от 60 до 120px
    const size = Math.floor(Math.random() * 60) + 60;
    
    // Для всех фигур используем одинаковый размер
    const adjustedSize = size;
    
    // Случайная начальная позиция
    const startPosX = Math.random() * 100; // в процентах
    const startPosY = Math.random() * 100; // в процентах
    
    // Сохраняем начальную позицию в dataset
    shape.dataset.startPosX = startPosX;
    shape.dataset.startPosY = startPosY;
    
    // Случайная скорость движения (медленно)
    // Уменьшаем скорость для более плавного движения
    const speedX = (Math.random() - 0.5) * 0.06; // Уменьшена скорость для более плавного движения
    const speedY = (Math.random() - 0.5) * 0.06; // Уменьшена скорость для более плавного движения
    
    // Начальное направление вращения
    const rotation = Math.random() * 360;
    // Сохраняем начальное вращение в dataset
    shape.dataset.startRotation = rotation;
    
    // Уменьшаем скорость вращения для более плавного эффекта
    const rotationSpeed = (Math.random() - 0.5) * 0.08;
    
    // Увеличиваем яркость и непрозрачность
    const opacity = 0.5 + (Math.random() * 0.5); // 0.5-1.0 для всех фигур
    // Сохраняем базовую прозрачность для дальнейшей анимации
    shape.dataset.baseOpacity = opacity;
    
    // Установка CSS-свойств в зависимости от типа фигуры
    switch (shapeType) {
        case 'rectangle':
            shape.style.width = `${adjustedSize}px`;
            shape.style.height = `${adjustedSize * 0.6}px`;
            shape.style.backgroundColor = 'transparent';
            shape.style.border = `1.5px solid rgba(255, 255, 255, ${opacity})`;
            break;
        case 'square':
            shape.style.width = `${adjustedSize}px`;
            shape.style.height = `${adjustedSize}px`;
            shape.style.backgroundColor = 'transparent';
            shape.style.border = `1.5px solid rgba(255, 255, 255, ${opacity})`;
            break;
        case 'circle':
            shape.style.width = `${adjustedSize}px`;
            shape.style.height = `${adjustedSize}px`;
            shape.style.borderRadius = '50%';
            shape.style.backgroundColor = 'transparent';
            shape.style.border = `1.5px solid rgba(255, 255, 255, ${opacity})`;
            break;
        default:
            shape.style.width = `${adjustedSize}px`;
            shape.style.height = `${adjustedSize}px`;
            shape.style.backgroundColor = 'transparent';
            shape.style.border = `1.5px solid rgba(255, 255, 255, ${opacity})`;
    }
    
    // Добавляем оптимизацию производительности
    shape.style.willChange = 'transform, left, top, border-color'; // Добавлены свойства для анимации
    
    // Положение и вращение
    shape.style.position = 'absolute';
    shape.style.left = `${startPosX}%`;
    shape.style.top = `${startPosY}%`;
    shape.style.transform = `rotate(${rotation}deg)`;
    
    // Добавить в контейнер
    container.appendChild(shape);
    
    // Анимация фигуры
    animateShape(shape, speedX, speedY, rotationSpeed, container.id === 'site-bg');
    
    return shape;
}

// Создание треугольника с использованием SVG - оптимизированная версия
function createSvgTriangle(container) {
    // Создаем SVG элемент
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    
    // Даем треугольнику уникальный ID для отслеживания
    svg.dataset.shapeId = `triangle_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    
    // Размер от 60 до 120px для треугольника
    const size = Math.floor(Math.random() * 60) + 60;
    
    // Установка атрибутов SVG
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.style.overflow = "visible"; // Убедимся, что треугольник не обрезается рамкой
    svg.classList.add("geometric-shape", "svg-triangle");
    
    // Создаем треугольник (полигон с тремя точками)
    const triangle = document.createElementNS(svgNS, "polygon");
    
    // Определяем три точки треугольника (в формате "x1,y1 x2,y2 x3,y3")
    triangle.setAttribute("points", "50,15 85,85 15,85");
    
    // Устанавливаем стили
    const opacity = 0.5 + (Math.random() * 0.5); // от 0.5 до 1.0
    triangle.setAttribute("fill", "transparent");
    triangle.setAttribute("stroke", `rgba(255, 255, 255, ${opacity})`);
    triangle.setAttribute("stroke-width", "1.2");
    triangle.setAttribute("vector-effect", "non-scaling-stroke"); // Обеспечит одинаковую толщину линии
    
    // Сохраняем базовую прозрачность для дальнейшей анимации
    svg.dataset.baseOpacity = opacity;
    
    // Добавляем треугольник в SVG
    svg.appendChild(triangle);
    
    // Случайная начальная позиция
    const startPosX = Math.random() * 100; // в процентах
    const startPosY = Math.random() * 100; // в процентах
    
    // Сохраняем начальную позицию в dataset
    svg.dataset.startPosX = startPosX;
    svg.dataset.startPosY = startPosY;
    
    // Случайная скорость движения - уменьшена для плавности
    const speedX = (Math.random() - 0.5) * 0.06;
    const speedY = (Math.random() - 0.5) * 0.06;
    
    // Начальное направление вращения
    const rotation = Math.random() * 360;
    // Сохраняем начальное вращение в dataset
    svg.dataset.startRotation = rotation;
    
    const rotationSpeed = (Math.random() - 0.5) * 0.08;
    
    // Оптимизация производительности
    svg.style.willChange = 'transform, left, top';
    
    // Положение и вращение
    svg.style.position = "absolute";
    svg.style.left = `${startPosX}%`;
    svg.style.top = `${startPosY}%`;
    svg.style.transform = `rotate(${rotation}deg)`;
    
    // Добавить в контейнер
    container.appendChild(svg);
    
    // Анимация треугольника
    animateShape(svg, speedX, speedY, rotationSpeed, container.id === 'site-bg');
    
    return svg;
}

// Функция для адаптации количества фигур на мобильных устройствах
function adjustShapesForMobile(screenWidth) {
    const siteBg = document.getElementById('site-bg');
    if (!siteBg) return;
    
    // Обновленные значения для количества фигур
    const desktopTotal = 30; // 20 основных фигур + 10 треугольников
    const tabletTotal = 20;  // ~67% от полного количества
    const mobileTotal = 12;  // ~40% от полного количества
    
    // Если экран узкий, уменьшаем количество фигур
    if (screenWidth <= 576) {
        // Если фигур уже мало, ничего не делаем
        if (siteBg.childElementCount <= mobileTotal) return;
        
        // Удаляем лишние фигуры
        while (siteBg.childElementCount > mobileTotal) {
            siteBg.removeChild(siteBg.lastChild);
        }
    } else if (screenWidth <= 768) {
        // Для средних экранов
        if (siteBg.childElementCount <= tabletTotal) return;
        
        while (siteBg.childElementCount > tabletTotal) {
            siteBg.removeChild(siteBg.lastChild);
        }
    } else {
        // Для больших экранов восстанавливаем количество если нужно
        if (siteBg.childElementCount >= desktopTotal) return;
        
        const shapeTypes = ['rectangle', 'circle', 'square'];
        const needToAdd = desktopTotal - siteBg.childElementCount;
        
        // Добавляем недостающие фигуры, 2/3 обычных фигур и 1/3 треугольников
        for (let i = 0; i < Math.ceil(needToAdd * 0.67); i++) {
            createRandomShape(siteBg, shapeTypes);
        }
        
        for (let i = 0; i < Math.floor(needToAdd * 0.33); i++) {
            createSvgTriangle(siteBg);
        }
    }
}

// Функция для создания и анимации геометрических фигур
function initGeometricBackground(containerId, numberOfShapes) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Очищаем контейнер, если в нем уже есть фигуры
    container.innerHTML = '';
    
    // Массив типов фигур (убираем линии)
    const shapeTypes = ['rectangle', 'circle', 'square'];
    
    // Увеличение количества фигур - основные фигуры
    const mainShapesCount = containerId === 'geometric-bg' ? 15 : 20;
    
    // Создание фигур
    for (let i = 0; i < mainShapesCount; i++) {
        createRandomShape(container, shapeTypes);
    }
    
    // Создаём дополнительно SVG треугольники - увеличиваем количество
    const trianglesCount = containerId === 'geometric-bg' ? 8 : 10;
    for (let i = 0; i < trianglesCount; i++) {
        createSvgTriangle(container);
    }
}

// Конфигурация API
const API_CONFIG = {
    BASE_URL: 'http://localhost:8000',  // Базовый URL API бота
    ENDPOINTS: {
        SUBMIT_FORM: '/api/submit',    // Эндпоинт отправки формы
        CHECK_STATUS: '/order-status'   // Эндпоинт проверки статуса
    }
};

// Обработка отправки формы
const form = document.getElementById('contact-form');
const fileInput = document.getElementById('file-input');
const fileInfo = document.querySelector('.file-info');
const fileName = document.getElementById('file-name');

// Обработка загрузки файла
fileInput.addEventListener('change', (e) => {
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
form.addEventListener('submit', async (e) => {
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

// Функция для адаптации количества фигур на мобильных устройствах
function adjustShapesForMobile(screenWidth) {
    const siteBg = document.getElementById('site-bg');
    if (!siteBg) return;
    
    // Обновленные значения для количества фигур
    const desktopTotal = 30; // 20 основных фигур + 10 треугольников
    const tabletTotal = 20;  // ~67% от полного количества
    const mobileTotal = 12;  // ~40% от полного количества
    
    // Если экран узкий, уменьшаем количество фигур
    if (screenWidth <= 576) {
        // Если фигур уже мало, ничего не делаем
        if (siteBg.childElementCount <= mobileTotal) return;
        
        // Удаляем лишние фигуры
        while (siteBg.childElementCount > mobileTotal) {
            siteBg.removeChild(siteBg.lastChild);
        }
    } else if (screenWidth <= 768) {
        // Для средних экранов
        if (siteBg.childElementCount <= tabletTotal) return;
        
        while (siteBg.childElementCount > tabletTotal) {
            siteBg.removeChild(siteBg.lastChild);
        }
    } else {
        // Для больших экранов восстанавливаем количество если нужно
        if (siteBg.childElementCount >= desktopTotal) return;
        
        const shapeTypes = ['rectangle', 'circle', 'square'];
        const needToAdd = desktopTotal - siteBg.childElementCount;
        
        // Добавляем недостающие фигуры, 2/3 обычных фигур и 1/3 треугольников
        for (let i = 0; i < Math.ceil(needToAdd * 0.67); i++) {
            createRandomShape(siteBg, shapeTypes);
        }
        
        for (let i = 0; i < Math.floor(needToAdd * 0.33); i++) {
            createSvgTriangle(siteBg);
        }
    }
}

// Функция для создания и анимации геометрических фигур
function initGeometricBackground(containerId, numberOfShapes) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Очищаем контейнер, если в нем уже есть фигуры
    container.innerHTML = '';
    
    // Массив типов фигур (убираем линии)
    const shapeTypes = ['rectangle', 'circle', 'square'];
    
    // Увеличение количества фигур - основные фигуры
    const mainShapesCount = containerId === 'geometric-bg' ? 15 : 20;
    
    // Создание фигур
    for (let i = 0; i < mainShapesCount; i++) {
        createRandomShape(container, shapeTypes);
    }
    
    // Создаём дополнительно SVG треугольники - увеличиваем количество
    const trianglesCount = containerId === 'geometric-bg' ? 8 : 10;
    for (let i = 0; i < trianglesCount; i++) {
        createSvgTriangle(container);
    }
}

// Функция очистки всех форм
function clearAllShapes() {
    // Удаляем существующие анимированные фигуры
    const animatedShapes = document.querySelectorAll('.shape, .geometric-shape');
    animatedShapes.forEach(shape => {
        shape.remove();
    });
    
    // Сбрасываем счетчик фигур
    shapeCounter = 0;
}