# API Документация для интеграции формы с Telegram ботом

## Базовый URL
```
https://api.shstudio.com/v1
```

## Endpoints

### Отправка заявки

```http
POST /submit-form
Content-Type: multipart/form-data
```

#### Параметры запроса

| Параметр | Тип | Обязательный | Описание |
|----------|-----|--------------|----------|
| name | string | Да | Имя клиента |
| email | string | Да | Email клиента |
| project_description | string | Да | Описание проекта |
| message | string | Нет | Дополнительное сообщение |
| attachment | file | Нет | Прикрепленный файл (макс. 5MB) |

#### Пример запроса

```javascript
const formData = new FormData();
formData.append('name', 'Иван Иванов');
formData.append('email', 'ivan@example.com');
formData.append('project_description', 'Разработка мобильного приложения');
formData.append('message', 'Нужна консультация по срокам');
formData.append('attachment', fileInput.files[0]);

const response = await fetch('https://api.shstudio.com/v1/submit-form', {
    method: 'POST',
    body: formData
});

const result = await response.json();
```

#### Успешный ответ

```json
{
    "status": "success",
    "order_id": "SH-2024-001",
    "message": "Заявка успешно отправлена"
}
```

#### Ответ с ошибкой

```json
{
    "status": "error",
    "code": "validation_error",
    "message": "Неверный формат email"
}
```

### Проверка статуса заявки

```http
GET /order-status/{order_id}
```

#### Параметры URL

| Параметр | Тип | Описание |
|----------|-----|----------|
| order_id | string | Идентификатор заявки |

#### Пример запроса

```javascript
const response = await fetch('https://api.shstudio.com/v1/order-status/SH-2024-001');
const status = await response.json();
```

#### Успешный ответ

```json
{
    "status": "success",
    "order_status": "processed",
    "created_at": "2024-01-20T15:30:00Z",
    "processed_at": "2024-01-20T15:31:00Z"
}
```

## Коды ошибок

| Код | Описание |
|-----|----------|
| validation_error | Ошибка валидации данных |
| file_too_large | Превышен размер файла |
| invalid_file_type | Неподдерживаемый тип файла |
| server_error | Внутренняя ошибка сервера |

## Ограничения

- Максимальный размер файла: 5MB
- Поддерживаемые форматы файлов: .jpg, .jpeg, .png, .pdf, .doc, .docx
- Максимальная длина описания проекта: 1000 символов
- Максимальная длина сообщения: 500 символов

## Безопасность

### CORS
API поддерживает CORS для домена shstudio.com и его поддоменов.

### Rate Limiting
- 100 запросов в час с одного IP
- 5 запросов в минуту для отправки форм

### Валидация файлов
- Проверка MIME-типов
- Сканирование на вредоносный код
- Проверка размера файла

## Примеры интеграции

### HTML Форма
```html
<form id="contact-form" enctype="multipart/form-data">
    <input type="text" name="name" required>
    <input type="email" name="email" required>
    <textarea name="project_description" required></textarea>
    <textarea name="message"></textarea>
    <input type="file" name="attachment">
    <button type="submit">Отправить</button>
</form>
```

### JavaScript обработчик
```javascript
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch('https://api.shstudio.com/v1/submit-form', {
            method: 'POST',
            body: formData
        });
        
        const result = await response.json();
        
        if (result.status === 'success') {
            alert(`Заявка ${result.order_id} успешно отправлена`);
        } else {
            alert(`Ошибка: ${result.message}`);
        }
    } catch (error) {
        console.error('Ошибка отправки формы:', error);
        alert('Произошла ошибка при отправке формы');
    }
});
```