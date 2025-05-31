# Правила и стили разработки Telegram бота SH Studio

## 1. Общие принципы разработки

### 1.1 Архитектурные принципы
- Следование принципам SOLID
- Модульная архитектура
- Чистая архитектура (Clean Architecture)
- Dependency Injection

### 1.2 Структура проекта
```
sh_studio_bot/
├── src/
│   ├── api/            # FastAPI endpoints
│   ├── bot/            # Telegram bot логика
│   ├── config/         # Конфигурации
│   ├── database/       # Работа с БД
│   ├── models/         # Модели данных
│   ├── services/       # Бизнес-логика
│   └── utils/          # Вспомогательные функции
├── tests/              # Тесты
├── docs/               # Документация
└── scripts/            # Скрипты развертывания
```

## 2. Стиль кода Python

### 2.1 Форматирование
- Следование PEP 8
- Использование black для форматирования
- Максимальная длина строки: 88 символов
- Отступы: 4 пробела

### 2.2 Именование
```python
# Классы: PascalCase
class OrderProcessor:
    pass

# Функции и переменные: snake_case
def process_order(order_data):
    user_name = order_data['name']

# Константы: UPPER_CASE
MAX_FILE_SIZE = 5 * 1024 * 1024
```

### 2.3 Документация кода
```python
def process_order(order_data: dict) -> OrderResult:
    """Обработка заказа и отправка в Telegram.

    Args:
        order_data (dict): Данные заказа с формы

    Returns:
        OrderResult: Результат обработки заказа

    Raises:
        ValidationError: При некорректных данных
        TelegramError: При ошибке отправки
    """
```

## 3. Работа с Git

### 3.1 Ветвление
- main: основная ветка
- develop: ветка разработки
- feature/*: новый функционал
- bugfix/*: исправление ошибок
- release/*: подготовка релиза

### 3.2 Коммиты
```
type(scope): description

- feat: новый функционал
- fix: исправление ошибок
- docs: документация
- style: форматирование
- refactor: рефакторинг
- test: тестирование
- chore: обслуживание
```

## 4. Тестирование

### 4.1 Виды тестов
- Модульные тесты (unittest/pytest)
- Интеграционные тесты
- E2E тесты

### 4.2 Правила тестирования
```python
def test_order_processing():
    # Arrange
    order_data = create_test_order()
    processor = OrderProcessor()

    # Act
    result = processor.process(order_data)

    # Assert
    assert result.status == 'success'
    assert result.order_id is not None
```

## 5. Безопасность

### 5.1 Работа с конфигурацией
```python
# Использование переменных окружения
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    BOT_TOKEN: str
    DATABASE_URL: str
    TELEGRAM_GROUP_ID: str
```

### 5.2 Валидация данных
```python
from pydantic import BaseModel, EmailStr

class OrderData(BaseModel):
    name: str
    email: EmailStr
    project_description: str
    message: str | None
```

## 6. Логирование

### 6.1 Уровни логирования
```python
import logging

logger = logging.getLogger(__name__)

logger.debug('Детальная информация для отладки')
logger.info('Информационное сообщение')
logger.warning('Предупреждение')
logger.error('Ошибка')
logger.critical('Критическая ошибка')
```

### 6.2 Структура логов
```python
LOG_FORMAT = '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
```

## 7. Обработка ошибок

### 7.1 Кастомные исключения
```python
class BotError(Exception):
    """Базовый класс для ошибок бота."""
    pass

class OrderProcessingError(BotError):
    """Ошибка при обработке заказа."""
    pass
```

### 7.2 Обработка исключений
```python
try:
    result = process_order(order_data)
except ValidationError as e:
    logger.error(f'Ошибка валидации: {e}')
    raise OrderProcessingError(str(e))
except TelegramError as e:
    logger.error(f'Ошибка Telegram: {e}')
    # Повторная попытка или альтернативная обработка
```

## 8. Оптимизация

### 8.1 Работа с памятью
- Использование генераторов для больших наборов данных
- Освобождение ресурсов через контекстные менеджеры
- Периодическая очистка временных файлов

### 8.2 Асинхронное программирование
```python
async def process_order(order_data: OrderData) -> OrderResult:
    async with AsyncSession() as session:
        # Сохранение в БД
        db_order = await save_order(session, order_data)
        
        # Отправка в Telegram
        message = await send_to_telegram(db_order)
        
        return OrderResult(order_id=db_order.id, message_id=message.id)
```