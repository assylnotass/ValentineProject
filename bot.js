const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

// Токен бота (не храним в репозитории открыто, но для примера вставим)
const BOT_TOKEN = '7508040516:AAEgmElMH5gCOrpeB1SWwy3Qn5QahjjO3-E';

// Создаем бота, режим polling
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Создаем Express (для webhook или просто чтобы процесс жил)
const app = express();

app.get('/', (req, res) => {
  res.send('Telegram bot is running. Your site is on GitHub Pages.');
});

// Запускаем сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bot server is running on port ${PORT}`);
});

// Обрабатываем /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // URL GitHub Pages, где лежит сайт
  const webAppUrl = 'https://assylnotass.github.io/ValentineProject/public/index.html';

  // Inline-кнопка с web_app
  const inlineKeyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'ВАЛЕНТИНКААА ЮХУУУУУ',
            web_app: { url: webAppUrl }
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, 'Нажми на кнопку', inlineKeyboard);
});
