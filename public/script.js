// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем webview на весь экран

$(function() {
  // Инициализируем turn.js на контейнере #book
  $('#book').turn({
    width: 700,       // ширина книги (соответствует CSS)
    height: 450,      // высота книги
    autoCenter: true, // книга будет центрироваться
    display: 'double' // двойной разворот (как настоящая книга)
  });

  // Кнопка "ДА!"
  $('#yesBtn').on('click', function() {
    startFireworks();
    // Отправляем данные боту
    tg.sendData('love_confirmed');
  });

  // Кнопка "НЕТ..."
  $('#noBtn').on('click', function() {
    alert('Я подожду, пока ты изменишь решение! \u{1F60A}');
  });
});

/***********************
 * Функции для фейерверка
 ***********************/

const fireworksContainer = document.getElementById('fireworks');

function startFireworks() {
  fireworksContainer.style.display = 'block';

  for (let i = 0; i < 30; i++) {
    const spark = document.createElement('div');
    spark.style.position = 'absolute';
    spark.style.width = '10px';
    spark.style.height = '10px';
    spark.style.borderRadius = '50%';
    spark.style.background = getRandomColor();
    spark.style.left = (50 + Math.random() * 20 - 10) + '%';
    spark.style.bottom = '0px';
    spark.style.opacity = 1;
    spark.style.transition = 'all 2s ease';

    fireworksContainer.appendChild(spark);

    setTimeout(() => {
      spark.style.transform = `translateY(-${200 + Math.random() * 200}px)`;
      spark.style.opacity = 0;
    }, 50);

    setTimeout(() => {
      fireworksContainer.removeChild(spark);
    }, 2500);
  }
}

function getRandomColor() {
  const colors = ['red', 'yellow', 'orange', 'pink', 'violet', 'blue', 'lime', 'gold'];
  return colors[Math.floor(Math.random() * colors.length)];
}
