// Данные проектов портфолио
const portfolioProjects = [
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
    },
    {
        id: 2,
        title: 'Веб-сайт',
        shortDescription: 'Дизайн и разработка корпоративного сайта с анимациями',
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
        id: 3,
        title: 'Фирменный стиль',
        shortDescription: 'Разработка логотипа и брендбука для компании',
        fullDescription: `
            <p>Создание уникального фирменного стиля включало:</p>
            <ul>
                <li>Разработку логотипа</li>
                <li>Создание брендбука</li>
                <li>Дизайн фирменных материалов</li>
                <li>Гайдлайны по использованию</li>
            </ul>
        `,
        thumbnail: 'asset/img/portfolio/brand/brand.avif',
        images: [
            'asset/img/portfolio/brand/brand1.jpg',
            'asset/img/portfolio/brand/brand2.jpg',
            'asset/img/portfolio/brand/brand3.jpg'
        ],
        tags: ['Брендинг', 'Дизайн'],
        links: [
            {
                title: 'Презентация',
                url: 'https://example.com/presentation'
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
                title: 'Играть',
                url: 'https://example.com/wallchess'
            },
            {
                title: 'GitHub',
                url: 'https://github.com/example/wall-chess'
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
            <div class="portfolio-modal-gallery">
                ${project.images.map(img => `<img src="${img}" alt="${project.title}">`).join('')}
            </div>
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
        </div>
    `;

    // Показываем модальное окно
    modal.classList.add('active');

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