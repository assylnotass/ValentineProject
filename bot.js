const TelegramBot = require('node-telegram-bot-api');

// Ваш токен бота
const token = '7508040516:AAEgmElMH5gCOrpeB1SWwy3Qn5QahjjO3-E';
const bot = new TelegramBot(token, { polling: true });

// /start
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Привет! Нажми кнопку, чтобы открыть Валентинку", {
    reply_markup: {
      keyboard: [
        [
          {
            text: 'Открыть Валентинку',
            web_app: {
              // Вставьте сюда HTTPS-ссылку, по которой доступен index.html
              url: 'https://assylnotass.github.io/ValentineProject/public/index.html'
            }
          }
        ]
      ],
      resize_keyboard: true
    }
  });
});

// Когда кликают "Да" в мини-приложении
bot.on('web_app_data', (msg) => {
  const data = msg.web_app_data?.data; 
  if (data === 'love_confirmed') {
    bot.sendMessage(msg.chat.id, "Ура! Она согласилась быть Валентинкой! \u{1F970}");
  } else {
    bot.sendMessage(msg.chat.id, "Пришли данные: " + data);
  }
});

console.log("Бот запущен...");
