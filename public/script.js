// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем на весь экран

// Когда всё загрузится...
$(function() {
  // Инициализируем turn.js на контейнере #book
  $("#book").turn({
    // размеры "книги" можно прописать прямо тут или через CSS
    // width: 600,
    // height: 400,
    autoCenter: true, // центрируем книгу
    display: 'double' // по умолчанию двойной разворот (можете 'single' – по одной странице)
  });

  // Кнопки «Предыдущая» / «Следующая» страница
  document.getElementById('prevPageBtn').addEventListener('click', () => {
    $("#book").turn("previous");
  });
  document.getElementById('nextPageBtn').addEventListener('click', () => {
    $("#book").turn("next");
  });

  // Кнопка "ДА!" на финальной странице
  document.getElementById('yesBtn').addEventListener('click', () => {
    startFireworks();
    // отправляем данные боту:
    tg.sendData('love_confirmed');
  });

  // Кнопка "НЕТ..." 
  document.getElementById('noBtn').addEventListener('click', () => {
    alert("Я подожду, пока ты изменишь решение! \u{1F60A}");
  });
});

// Фейерверки
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
