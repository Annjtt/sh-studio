# ARCHITECTURE_DIAGRAMS.md

## 1. Общая архитектура модулей

```mermaid
graph TD
    A[main.py] --> B[api/ (FastAPI)]
    B --> C[bot/ (Telegram Bot)]
    B --> D[services/]
    D --> D1[OrderService]
    D --> D2[GoogleSheetService]
    D --> D3[TelegramSender]
    D --> D4[FileHandler]
    D --> D5[Logger]
    B --> E[config/ (get_settings)]
    B --> F[utils/]
    B --> G[files/ (uploads)]
    B --> H[tests/ (unit, integration, e2e)]
    D2 --> I[Google Sheets]
    D3 --> J[Telegram API]
    B --> K[admin-интерфейс в Telegram]
    B --> L[uploads/]
    B --> M[.env, .gitignore]
    B --> N[CI/CD, GitHub Actions]
```

---

## 2. User Flow (Заявка с сайта)

```mermaid
graph TD
    SiteForm[Форма на сайте] --> API[API (FastAPI)]
    API --> OrderService
    OrderService --> GoogleSheetService
    OrderService --> TelegramSender
    GoogleSheetService --> GoogleSheets[(Google Sheets)]
    TelegramSender --> TelegramGroup[(Telegram-группа)]
    OrderService --> FileHandler
    FileHandler --> Uploads[uploads/]
```

---

## 3. Admin Flow (Работа с заявками)

```mermaid
graph TD
    Admin[Админ в Telegram] --> Bot[Telegram Bot]
    Bot --> GoogleSheetService
    Bot --> OrderService
    GoogleSheetService --> GoogleSheets[(Google Sheets)]
    Bot --> InlineKeyboard[Inline-кнопки, Reply-клавиатура]
    Bot --> StatusChange[Изменение статуса]
    Bot --> Search[Поиск по ID]
    Bot --> AdminComment[Комментарий администратора]
```

---

## 4. State Machine (Статусы заявки)

```mermaid
stateDiagram-v2
    [*] --> NEW
    NEW --> IN_PROGRESS
    IN_PROGRESS --> DONE
    IN_PROGRESS --> REJECTED
    NEW --> REJECTED
    DONE --> [*]
    REJECTED --> [*]
```

---

## 5. Взаимодействие сервисов

```mermaid
graph LR
    API -- process order --> OrderService
    OrderService -- save to sheet --> GoogleSheetService
    OrderService -- send to telegram --> TelegramSender
    OrderService -- save file --> FileHandler
    GoogleSheetService -- append/get/update --> GoogleSheets[(Google Sheets)]
    TelegramSender -- send message --> TelegramAPI[(Telegram API)]
    AdminBot -- get/update order --> GoogleSheetService
    AdminBot -- change status --> OrderService
    FileHandler -- store --> Uploads[uploads/]
    Logger -- log --> LogFile[(log)]
```

---

## 6. Взаимодействие с внешними сервисами

```mermaid
graph TD
    Bot -->|Запрос| GoogleSheets[(Google Sheets)]
    Bot -->|Уведомления| TelegramAPI[(Telegram API)]
    Admin -->|Управление| Bot
    User -->|Заявка| Bot
```

---

## 7. Взаимодействие сервисов и тестов

```mermaid
graph LR
    OrderService & GoogleSheetService & TelegramSender & FileHandler --> Tests[tests/ (unit, integration, e2e)]
    Tests --> DI[DI/mocks/singleton reset]
    Tests --> CI[CI/CD]
```

---

**Диаграммы отражают реальную архитектуру SH Studio Bot: заявки, Google Sheets, Telegram, админ-интерфейс, DI, тесты, CI/CD.** 