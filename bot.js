const TelegramBot = require('node-telegram-bot-api');

// Подставьте ваш реальный токен
const token = '7508040516:AAEgmElMH5gCOrpeB1SWwy3Qn5QahjjO3-E';

// Создаём бота в режиме Long Polling:
const bot = new TelegramBot(token, { polling: true });

// При старте или при вводе /start...
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "Привет! Нажми кнопку, чтобы открыть Валентинку :)", {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Открыть Валентинку',
            web_app: {
              // Укажите ссылку на мини-приложение (valentine.html).
              // Если будете хостить локально, придётся пробросить туннель (ngrok) или выложить на хостинг.
              url: 'https://ВАШ_ДОМЕН_ИЛИ_ХОСТИНГ/valentine.html'
            }
          }
        ]
      ],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  });
});

// Когда из Web App придут данные (например, при нажатии "Да!")
bot.on('web_app_data', (msg) => {
  const data = msg.web_app_data.data; // строка из tg.sendData(...)
  if (data === 'love_confirmed') {
    bot.sendMessage(msg.chat.id, "Ура! Она согласилась быть Валентинкой! \u{1F970}");
  } else {
    bot.sendMessage(msg.chat.id, "Данные из Web App: " + data);
  }
});

console.log("Бот запущен...");
