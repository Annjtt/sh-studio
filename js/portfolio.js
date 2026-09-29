// Данные проектов портфолио
const portfolioProjects = [
    {
        id: 5,
        title: 'Game',
        shortDescription: 'Разработка игр с использованием таких технологий как HTML5, CSS3 и JavaScript',
        fullDescription: `
            <p>Инновационная шахматная игра со следующими особенностями:</p>
            <ul>
                <li>Классические правила шахмат с дополнительными механиками</li>
                <li>Механика размещения стен</li>
                <li>Интерактивный игровой процесс</li>
                <li>Поддержка многопользовательской игры</li>
            </ul>
        `,
        thumbnail: 'asset/img/portfolio/wallchess/game.avif',
        images: [
            'asset/img/portfolio/wallchess/wallchess1.jpg',
            'asset/img/portfolio/wallchess/wallchess2.jpg',
            'asset/img/portfolio/wallchess/wallchess3.jpg'
        ],
        tags: ['JavaScript', 'HTML5 Canvas', 'Разработка игр'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/Annjtt/wall-chess'
            }
        ]
    },
    {
        id: 2,
        title: 'Веб-сайт',
        shortDescription: 'Дизайн и разработка сайта для гостевого дома Asteria',
        fullDescription: `
            <h5>Дизайн и разработка сайта для гостевого дома:</h5>
            <h6>Asteria – это решение для тех, кто ищет удобный и современный способ найти уютное место для отдыха.</h6>
            <p>Наша команда разработала сайт с акцентом на удобство, дизайн, атмосферу и комфорт. А также на важность возможности заказать все услуги одним кликом. А также простая и ясная воронка покупки.</p>
            <ul>
                <li>⬦ Адаптивный дизайн</li>
                <li>⬦ Анимации при скролле</li>
                <li>⬦ Оптимизация производительности</li>
                <li>⬦ Сайт создан с акцентом на эмоциональный отклик, простоту выбора и ясную воронку заказа</li>
            </ul>
        `,
        thumbnail: 'asset/img/portfolio/website/web.jpg',
        images: [
            'asset/img/portfolio/asteria/asteria1.webp',
            'asset/img/portfolio/asteria/asteria2.webp',
            'asset/img/portfolio/asteria/asteria3.webp',
            'asset/img/portfolio/asteria/asteria4.webp',
            'asset/img/portfolio/asteria/asteria5.webp',
            'asset/img/portfolio/asteria/asteria6.webp',
            'asset/img/portfolio/asteria/asteria7.webp',
            'asset/img/portfolio/asteria/asteria8.webp'
        ],
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        links: [
            {
                title: 'Сайт',
                url: 'https://asteriahome.ru/'
            }
        ]
    },
    {
        id: 6,
        title: 'Desktop app',
        shortDescription: 'Разработка приложений под Windows и macOS',
        fullDescription: `
            <h5>Re:frame - File Converter</h5>
            <h6>Мощное приложение для конвертации и обработки изображений, разработанное с использованием Electron.</h6>
            <ul>
                <li> ⬦ Оно позволяет пользователям легко и быстро конвертировать изображения в различные форматы</li>
                <li> ⬦ Удалять фон с изображений с помощью современных нейросетевых технологий</li>
                <li> ⬦ Удобный интерфейс для загрузки, предпросмотра и скачивания файлов</li>
                <li> ⬦ Поддержка пакетной обработки файлов</li>
            </ul>
        `,
        thumbnail: 'asset/img/portfolio/re-frame/laptop-pro.avif',
        images: [
            'asset/img/portfolio/re-frame/re-frame-start.webp',
            'asset/img/portfolio/re-frame/re-frame-main.webp',
            'asset/img/portfolio/re-frame/re-frame-set-format.webp',
            'asset/img/portfolio/re-frame/re-frame-set.webp'
        ],
        tags: ['Electron.js', 'HTML5+CSS', 'Desktop app', 'Python'],
        links: [
            {
                title: 'GitHub',
                url: 'https://github.com/SH-Studio-official/re-frame'
            }
        ]
    },
    {
        id: 3,
        title: 'Фирменный стиль',
        shortDescription: 'Разработка логотипа и фирменного стиля для репетиторского центра ПОРЕШАЕМ',
        fullDescription: `
            <h5>Создание фирменного стиля для компании:</h5>
            <h6>В разработке фирменного стиля мы объединили:</h6>
            <ul>
                <li> ⬦ Разработку логотипа</li>
                <li> ⬦ Создание информационных буклетов и баннеров</li>
                <li> ⬦ Дизайн фирменных материалов</li>
                <li> ⬦ Подбор цветов и шрифтов</li>
                <li> ⬦ Подготовка материалов для печати</li>
            </ul>
        `,
        thumbnail: 'asset/img/portfolio/brand/brand.avif',
        images: [
            'asset/img/portfolio/brand/poreshaem8.jpeg',
            'asset/img/portfolio/brand/poreshaem1.webp',
            'asset/img/portfolio/brand/poreshaem2.webp',
            'asset/img/portfolio/brand/poreshaem3.webp',
            'asset/img/portfolio/brand/poreshaem4.webp',
            'asset/img/portfolio/brand/poreshaem6.webp',
            'asset/img/portfolio/brand/poreshaem7.webp',
            'asset/img/portfolio/brand/poreshaem9.jpeg',
            'asset/img/portfolio/brand/poreshaem10.jpeg',
            'asset/img/portfolio/brand/poreshaem.webp',
            'asset/img/portfolio/brand/poreshaem11.png',
            'asset/img/portfolio/brand/poreshaem12.jpeg',
            'asset/img/portfolio/brand/poreshaem13.png'
        ],
        tags: ['Брендинг', 'Дизайн'],
        links: [
            {
                title: 'Сайт',
                url: 'https://порешаем.рус/'
            },
            {
                title: 'Группа в Вконтакте',
                url: 'https://vk.com/poreshaem_vl'
            }
        ]
    },
    {
        id: 2,
        title: 'Веб-сайт',
        shortDescription: 'Дизайн и разработка сайта для сервиса персонализированных подарков Ferret',
        fullDescription: `
            <h5>Сервис персонализированных подарков с современным дизайном и интерактивными элементами:</h5>
            <h6>Ferret — как будто вы выбрали сами, но без хлопот</h6>
            <p>Идея проста: вы рассказываете, для кого и зачем нужен подарок — а эксперты сервиса подбирают лучший вариант, упаковывают со вкусом и доставляют точно в срок.</p>
            <ul>
                <li>⬦ Адаптивный дизайн</li>
                <li>⬦ Анимации при скролле</li>
                <li>⬦ Оптимизация производительности</li>
                <li>⬦ Сайт создан с акцентом на эмоциональный отклик, простоту выбора и ясную воронку заказа</li>
            </ul>
        `,
        thumbnail: 'asset/img/portfolio/website/web.jpg',
        images: [
            'asset/img/portfolio/website/website1.png',
            'asset/img/portfolio/website/website2.png',
            'asset/img/portfolio/website/website3.png',
            'asset/img/portfolio/website/website4.png',
            'asset/img/portfolio/website/website5.png'
        ],
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        links: [
            {
                title: 'Сайт',
                url: 'https://annjtt.github.io/Ferret'
            }
        ]
    },
    {
        id: 4,
        title: 'Telegram Бот',
        shortDescription: 'Разработка автоматизированного Telegram бота для обслуживания клиентов',
        fullDescription: `
            <p>Создан многофункциональный Telegram бот со следующими возможностями:</p>
            <ul>
                <li>Круглосуточная автоматизированная поддержка клиентов</li>
                <li>Обработка естественного языка</li>
                <li>Интеграция с CRM-системой</li>
                <li>Панель аналитики и отчетности</li>
            </ul>
        `,
        thumbnail: 'asset/img/portfolio/telegram/tg.jpg',
        images: [
            'asset/img/portfolio/telegram/telegram1.jpg',
            'asset/img/portfolio/telegram/telegram2.jpg',
            'asset/img/portfolio/telegram/telegram3.jpg'
        ],
        tags: ['Node.js', 'Telegram API', 'NLP'],
        links: [
            {
                title: 'Demo Bot',
                url: 'https://t.me/example_bot'
            },
            {
                title: 'GitHub',
                url: 'https://github.com/example/telegram-bot'
            }
        ]
    },
    {
        id: 1,
        title: 'Мобильное приложение',
        shortDescription: 'Разработка кроссплатформенного приложения для управления задачами',
        fullDescription: `
            <p>Полное описание проекта мобильного приложения. Здесь может быть подробная информация о:</p>
            <ul>
                <li>Целях проекта</li>
                <li>Использованных технологиях</li>
                <li>Решенных задачах</li>
                <li>Результатах работы</li>
            </ul>
        `,
        thumbnail: 'asset/img/portfolio/mobile/mobile.avif', // Используем SVG заглушку
        images: [
            'asset/img/portfolio/mobile/mobile1.jpg',
            'asset/img/portfolio/mobile/mobile2.jpg',
            'asset/img/portfolio/mobile/mobile3.jpg'
        ],
        tags: ['React Native', 'Firebase'],
        links: [
            {
                title: 'Демо',
                url: 'https://example.com/demo'
            },
            {
                title: 'GitHub',
                url: 'https://github.com/example/project'
            }
        ]
    }
];

// Функция для получения категорий проекта
function getProjectCategories(project) {
    const categoryMap = {
        'Game': ['#GAME'],
        'Веб-сайт': ['#WEBSITE'],
        'Desktop app': ['#DESKTOP', '#APP'],
        'Фирменный стиль': ['#BRANDING', '#DESIGN'],
        'Telegram Бот': ['#BOT', '#TELEGRAM'],
        'Мобильное приложение': ['#MOBILE', '#APP']
    };

    return categoryMap[project.title] || ['#PROJECT'];
}

// Функция для создания карточки проекта
function createProjectCard(project, index) {
    const categories = getProjectCategories(project);
    const projectNumber = (index + 1).toString().padStart(2, '0');

    const card = document.createElement('div');
    card.className = 'portfolio-card fade-up';
    card.innerHTML = `
        ${project.thumbnail ? `<div class="portfolio-image"><img src="${project.thumbnail}" alt="${project.title}"></div>` : ''}
        <div class="portfolio-categories">
            ${categories.map(cat => `<span class="portfolio-category">${cat}</span>`).join('')}
        </div>
        <div class="portfolio-number">№${projectNumber}</div>
        <div class="portfolio-content">
            <h3 class="portfolio-title">${project.title}</h3>
            <p class="portfolio-description">${project.shortDescription}</p>
            <div class="portfolio-tags">
                ${project.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    card.addEventListener('click', () => openProjectModal(project));
    return card;
}

// Функция для открытия модального окна проекта
function openProjectModal(project) {
    const modal = document.getElementById('portfolio-modal');
    const modalContent = modal.querySelector('.portfolio-modal-content');

    // Заполняем контент модального окна
    modalContent.innerHTML = `
        <button class="portfolio-modal-close">&times;</button>
        <div class="portfolio-modal-body">
            <div class="portfolio-modal-info">
                <h2>${project.title}</h2>
                <div class="portfolio-modal-description">${project.fullDescription}</div>
                <div class="portfolio-tags">
                    ${project.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
                <div class="portfolio-modal-links">
                    ${project.links.map(link =>
                        `<a href="${link.url}" class="portfolio-modal-link" target="_blank">${link.title}</a>`
                    ).join('')}
                </div>
            </div>
            <div class="portfolio-modal-gallery">
                ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
            </div>
        </div>
    `;

    // Показываем модальное окно
    modal.classList.add('active');
    document.body.classList.add('modal-open');

    // Обработчик клика по изображениям для открытия лайтбокса
    const gallery = modal.querySelector('.portfolio-modal-gallery');
    if (gallery) {
        gallery.querySelectorAll('img').forEach((img, idx) => {
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                openImageLightbox(project.images, idx, project.title);
            });
        });
    }

    // Обработчик закрытия
    const closeBtn = modal.querySelector('.portfolio-modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => closeProjectModal());
    }

    // Закрытие по клику вне контента
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProjectModal();
        }
    });
}

// Функция закрытия модального окна
function closeProjectModal() {
    const modal = document.getElementById('portfolio-modal');
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    closeImageLightbox(); // На всякий случай закрываем лайтбокс, если он открыт
}

// Лайтбокс для просмотра изображения
function openImageLightbox(images, startIndex, alt) {
    if (document.getElementById('image-lightbox')) return;
    let currentIndex = startIndex;

    const overlay = document.createElement('div');
    overlay.id = 'image-lightbox';
    overlay.className = 'image-lightbox-overlay';

    function renderLightbox() {
        overlay.innerHTML = `
            <button class="image-lightbox-nav image-lightbox-prev" ${currentIndex === 0 ? 'style=\"display:none\"' : ''}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 8L11 14L16.5 20" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="image-lightbox-content">
                <span class="image-lightbox-close">&times;</span>
                <img src="${images[currentIndex]}" alt="${alt || ''}" />
            </div>
            <button class="image-lightbox-nav image-lightbox-next" ${currentIndex === images.length - 1 ? 'style=\"display:none\"' : ''}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 8L17 14L11.5 20" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        `;
        // Клик вне картинки — закрыть
        overlay.querySelector('.image-lightbox-content').parentElement.addEventListener('click', function(e) {
            if (e.target === overlay) closeImageLightbox();
        });
        // Клик по крестику
        overlay.querySelector('.image-lightbox-close').addEventListener('click', closeImageLightbox);
        // Клик по стрелкам
        const prevBtn = overlay.querySelector('.image-lightbox-prev');
        const nextBtn = overlay.querySelector('.image-lightbox-next');
        if (prevBtn) prevBtn.addEventListener('click', function(e) { e.stopPropagation(); showPrev(); });
        if (nextBtn) nextBtn.addEventListener('click', function(e) { e.stopPropagation(); showNext(); });
    }

    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            renderLightbox();
        }
    }
    function showNext() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            renderLightbox();
        }
    }

    function lightboxEscHandler(e) {
        if (e.key === 'Escape') closeImageLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    }

    function closeImageLightbox() {
        overlay.remove();
        document.removeEventListener('keydown', lightboxEscHandler);
    }

    renderLightbox();
    document.body.appendChild(overlay);
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', lightboxEscHandler);
}

function closeImageLightbox() {
    const overlay = document.getElementById('image-lightbox');
    if (overlay) {
        overlay.remove();
        document.removeEventListener('keydown', lightboxEscHandler);
    }
}

// Инициализация портфолио
function initPortfolio() {
    const portfolioCarouselInner = document.getElementById('portfolio-carousel-inner');
    if (!portfolioCarouselInner) return;

    // Очищаем carousel перед добавлением проектов
    portfolioCarouselInner.innerHTML = '';

    const totalProjects = portfolioProjects.length;

    // Определяем количество буферных карточек в зависимости от размера экрана
    const isMobile = window.innerWidth <= 480;
    const bufferCards = isMobile ? 2 : 3; // Меньше буферных карточек на мобильных

    // Создаем копию карточек для плавной бесконечной прокрутки
    // Карусель будет состоять из: оригинал + копия в начале + копия в конце

    // Добавляем копию в начало (последние bufferCards карточки)
    for (let i = totalProjects - bufferCards; i < totalProjects; i++) {
        const project = portfolioProjects[i];
        const card = createProjectCard(project, i);
        portfolioCarouselInner.appendChild(card);
    }

    // Добавляем оригинальные карточки
    portfolioProjects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        card.classList.add(`delay-${index + 1}`);
        portfolioCarouselInner.appendChild(card);
    });

    // Добавляем копию в конец (первые bufferCards карточки)
    for (let i = 0; i < bufferCards; i++) {
        const project = portfolioProjects[i];
        const card = createProjectCard(project, i);
        portfolioCarouselInner.appendChild(card);
    }

    // Инициализируем плавную бесконечную карусель
    initSmoothInfiniteCarousel(bufferCards);
}

// Функция для плавной бесконечной карусели
function initSmoothInfiniteCarousel(bufferCardsCount = 3) {
    const carousel = document.getElementById('portfolio-carousel');
    const carouselInner = document.getElementById('portfolio-carousel-inner');
    const prevBtn = document.getElementById('portfolio-prev');
    const nextBtn = document.getElementById('portfolio-next');

    if (!carousel || !carouselInner) return;

    const cards = Array.from(carouselInner.children);
    const totalOriginal = portfolioProjects.length; // 6 оригинальных карточек

    // Динамический расчет ширины карточки
    const firstCard = cards[bufferCardsCount]; // Берем первую оригинальную карточку
    const isMobile = window.innerWidth <= 480;

    // Ждем полной загрузки DOM и стилей
    setTimeout(() => {
        const calculatedCardWidth = firstCard ? firstCard.offsetWidth : 400;
        cardWidth = isMobile ? calculatedCardWidth : (calculatedCardWidth + 32); // На десктопе добавляем gap
        console.log('Card width calculated:', cardWidth, 'isMobile:', isMobile);
    }, 100);

    let cardWidth = isMobile
        ? window.innerWidth // Начальное значение для мобильных
        : (firstCard ? firstCard.offsetWidth + 32 : 432); // На десктопе - с gap
    const bufferCards = bufferCardsCount;

    let currentPosition = -bufferCards * cardWidth; // начинаем с оригинальных карточек
    let isTransitioning = false;
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    let dragStartTime = 0;
    let autoScrollInterval;

    // Устанавливаем начальную позицию
    carouselInner.style.transform = `translateX(${currentPosition}px)`;

    function moveToPosition(position, smooth = true) {
        if (isTransitioning && smooth) return;

        console.log('Moving to position:', position, 'smooth:', smooth, 'cardWidth:', cardWidth);
        currentPosition = position;
        carouselInner.style.transition = smooth ? 'transform 0.5s ease' : 'none';
        carouselInner.style.transform = `translateX(${currentPosition}px)`;

        if (smooth) {
            isTransitioning = true;
            setTimeout(() => {
                isTransitioning = false;

                // Проверяем, нужно ли перепрыгнуть для бесконечного эффекта
                const originalStart = -bufferCards * cardWidth;
                const originalEnd = -(bufferCards + totalOriginal - 1) * cardWidth;

                // Вычисляем текущий индекс карточки
                const currentCardIndex = Math.round(-currentPosition / cardWidth);
                console.log('Current card index:', currentCardIndex, 'bufferCards:', bufferCards, 'totalOriginal:', totalOriginal);

                if (currentCardIndex < bufferCards) {
                    // Мы в начале буферных карточек - перепрыгиваем к концу оригинальных
                    const targetIndex = bufferCards + totalOriginal - (bufferCards - currentCardIndex);
                    currentPosition = -targetIndex * cardWidth;
                    console.log('Jumping to end, targetIndex:', targetIndex, 'new position:', currentPosition);
                    carouselInner.style.transition = 'none';
                    carouselInner.style.transform = `translateX(${currentPosition}px)`;
                } else if (currentCardIndex >= bufferCards + totalOriginal) {
                    // Мы в конце буферных карточек - перепрыгиваем к началу оригинальных
                    const offset = currentCardIndex - (bufferCards + totalOriginal);
                    const targetIndex = bufferCards + offset;
                    currentPosition = -targetIndex * cardWidth;
                    console.log('Jumping to start, targetIndex:', targetIndex, 'new position:', currentPosition);
                    carouselInner.style.transition = 'none';
                    carouselInner.style.transform = `translateX(${currentPosition}px)`;
                }
            }, 500);
        }
    }

    function moveNext() {
        console.log('Move next called, current position:', currentPosition);
        const isMobile = window.innerWidth <= 480;
        if (isMobile) {
            // На мобильных - страничное перелистывание
            moveToPosition(currentPosition - cardWidth, true);
        } else {
            // На десктопе - плавное движение
            moveToPosition(currentPosition - cardWidth, true);
        }
    }

    function movePrev() {
        console.log('Move prev called, current position:', currentPosition);
        const isMobile = window.innerWidth <= 480;
        if (isMobile) {
            // На мобильных - страничное перелистывание
            moveToPosition(currentPosition + cardWidth, true);
        } else {
            // На десктопе - плавное движение
            moveToPosition(currentPosition + cardWidth, true);
        }
    }

    // Функции для drag/touch взаимодействия
    function getClientX(event) {
        return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
    }

    function startDrag(event) {
        if (isTransitioning) return;

        console.log('Start drag event:', event.type);
        isDragging = true;
        startX = getClientX(event);
        currentX = startX;
        dragStartTime = Date.now();

        // Останавливаем автопрокрутку
        stopAutoScroll();

        // Отключаем transition для плавного следования за курсором
        carouselInner.style.transition = 'none';

        // Добавляем класс для стилей
        carousel.classList.add('dragging');

        event.preventDefault();
    }

    function drag(event) {
        if (!isDragging) return;

        currentX = getClientX(event);
        const deltaX = currentX - startX;
        const newPosition = currentPosition + deltaX;

        carouselInner.style.transform = `translateX(${newPosition}px)`;

        event.preventDefault();
    }

    function endDrag(event) {
        if (!isDragging) return;

        isDragging = false;
        const deltaX = currentX - startX;
        const deltaTime = Date.now() - dragStartTime;
        const velocity = deltaX / deltaTime; // пиксели в миллисекунду (с направлением)

        // Убираем класс dragging
        carousel.classList.remove('dragging');

        // Вычисляем финальную позицию
        let finalPosition = currentPosition;

        // Адаптация логики для разных экранов
        const isMobile = window.innerWidth <= 480;

        if (isMobile) {
            // На мобильных: страничное перелистывание
            const minSwipeDistance = 50; // Минимальное расстояние для свайпа
            const minSwipeVelocity = 0.3; // Минимальная скорость

            if (Math.abs(deltaX) > minSwipeDistance || Math.abs(velocity) > minSwipeVelocity) {
                // Определяем направление
                const direction = deltaX > 0 ? 1 : -1;
                finalPosition = currentPosition + (direction * cardWidth);
            } else {
                // Недостаточно для свайпа - возвращаемся на текущую позицию
                finalPosition = currentPosition;
            }
        } else {
            // На десктопе: старая логика с инерцией
            const minDragDistance = 30;
            const minVelocity = 0.3;

            if (Math.abs(deltaX) > minDragDistance || Math.abs(velocity) > minVelocity) {
                const direction = deltaX > 0 ? 1 : -1;
                const speed = Math.abs(velocity);

                let cardsToMove = Math.max(1, Math.round(Math.abs(deltaX) / (cardWidth * 0.3)));

                if (speed > 0.8) cardsToMove += 1;
                if (speed > 1.5) cardsToMove += 1;

                const moveDistance = direction * cardsToMove * cardWidth;
                finalPosition = currentPosition + moveDistance;
            } else {
                const cardIndex = Math.round(-finalPosition / cardWidth);
                finalPosition = -cardIndex * cardWidth;
            }
        }

        currentPosition = finalPosition;

        // Возвращаем transition
        carouselInner.style.transition = 'transform 0.3s ease';

        // Финализируем позицию
        moveToPosition(currentPosition, true);

        // Возобновляем автопрокрутку через некоторое время
        setTimeout(() => {
            if (!isDragging) startAutoScroll();
        }, 1000);

        event.preventDefault();
    }

    // Навигационные кнопки
    if (prevBtn) {
        prevBtn.addEventListener('click', movePrev);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', moveNext);
    }

    // Обработчики drag/touch событий
    carousel.addEventListener('mousedown', startDrag);
    carousel.addEventListener('mousemove', drag);
    carousel.addEventListener('mouseup', endDrag);
    carousel.addEventListener('mouseleave', endDrag);

    // Touch события для мобильных устройств
    carousel.addEventListener('touchstart', startDrag, { passive: false });
    carousel.addEventListener('touchmove', drag, { passive: false });
    carousel.addEventListener('touchend', endDrag, { passive: false });

    // Предотвращаем выделение текста при drag
    carousel.addEventListener('selectstart', (e) => {
        if (isDragging) e.preventDefault();
    });

    // Функции автопрокрутки
    function startAutoScroll() {
        if (autoScrollInterval) return; // Уже запущена

        autoScrollInterval = setInterval(() => {
            if (!isTransitioning && !isDragging) {
                moveNext();
            }
        }, 4000); // каждые 4 секунды
    }

    function stopAutoScroll() {
        if (autoScrollInterval) {
            clearInterval(autoScrollInterval);
            autoScrollInterval = null;
        }
    }

    // Останавливаем автопрокрутку при взаимодействии
    carousel.addEventListener('mouseenter', stopAutoScroll);
    carousel.addEventListener('mouseleave', () => {
        if (!isDragging) startAutoScroll();
    });

    // Обработка изменения размера окна
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Пересчитываем ширину карточек при изменении размера окна
            const wasMobile = window.innerWidth <= 480;
            const nowMobile = window.innerWidth <= 480;

            if (wasMobile !== nowMobile) {
                // Если изменился тип устройства (мобильный/десктоп), переинициализируем
                initPortfolio();
            } else {
                // Для мобильных - пересчитываем ширину карточек при повороте
                const currentFirstCard = carouselInner.children[bufferCards];
                const newCardWidth = nowMobile
                    ? window.innerWidth
                    : (currentFirstCard ? currentFirstCard.offsetWidth + 32 : 432);

                if (Math.abs(newCardWidth - cardWidth) > 10) {
                    initPortfolio(); // Переинициализация для корректного пересчета
                }
            }
        }, 250);
    });

    // Запускаем автопрокрутку
    startAutoScroll();

    // Останавливаем автопрокрутку при клике на кнопки и начале drag
    if (prevBtn) prevBtn.addEventListener('click', stopAutoScroll);
    if (nextBtn) nextBtn.addEventListener('click', stopAutoScroll);
}

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', initPortfolio);