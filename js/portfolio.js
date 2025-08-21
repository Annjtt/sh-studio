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

// Функция для создания карточки проекта
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'portfolio-card glass-effect fade-up';
    card.innerHTML = `
        <div class="portfolio-image">
            ${project.thumbnail ? 
                `<img src="${project.thumbnail}" alt="${project.title}">` :
                `<svg width="100%" height="200" viewBox="0 0 400 200">
                    <rect width="100%" height="100%" fill="rgba(255, 255, 255, 0.1)"/>
                    <text x="50%" y="50%" fill="white" text-anchor="middle" dominant-baseline="middle">${project.title}</text>
                </svg>`
            }
        </div>
        <div class="portfolio-content">
            <h3>${project.title}</h3>
            <p style="color: var(--text-color); opacity: 0.8;">${project.shortDescription}</p>
            <div class="portfolio-tags">
                ${project.tags.map(tag => `<span class="tag glass-effect" style="background: var(--glass-bg); border: 1px solid var(--glass-border);">${tag}</span>`).join('')}
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
        <span class="portfolio-modal-close">&times;</span>
        <div class="portfolio-modal-body">
            <div class="portfolio-modal-info">
                <h2 class="portfolio-modal-title">${project.title}</h2>
                <div class="portfolio-modal-description">${project.fullDescription}</div>
                <div class="portfolio-tags">
                    ${project.tags.map(tag => `<span class="tag glass-effect">${tag}</span>`).join('')}
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
    closeBtn.addEventListener('click', () => closeProjectModal());

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
    const portfolioGrid = document.getElementById('portfolio-grid');
    if (!portfolioGrid) return;

    // Очищаем grid перед добавлением проектов
    portfolioGrid.innerHTML = '';

    // Добавляем карточки проектов
    portfolioProjects.forEach((project, index) => {
        const card = createProjectCard(project);
        card.classList.add(`delay-${index + 1}`);
        portfolioGrid.appendChild(card);
    });
}

// Запускаем инициализацию после загрузки DOM
document.addEventListener('DOMContentLoaded', initPortfolio);