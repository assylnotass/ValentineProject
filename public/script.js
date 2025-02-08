// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем на весь экран

// Находим элементы обложки
const cover = document.getElementById('cover');
const openBookBtn = document.getElementById('openBookBtn');

// Находим страницы
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const finalPage = document.getElementById('finalPage');

// Находим кнопки навигации
const toPage2Btn = document.getElementById('toPage2');
const toPage3Btn = document.getElementById('toPage3');
const toFinalPageBtn = document.getElementById('toFinalPage');

const backToPage1Btn = document.getElementById('backToPage1');
const backToPage2Btn = document.getElementById('backToPage2');

// Финальные кнопки
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Контейнер для фейерверков
const fireworksContainer = document.getElementById('fireworks');

/**
 * Функция для показа нужной страницы
 * Сначала скрывает обложку,
 * потом все .pages,
 * затем показывает выбранную.
 */
function showPage(pageElement) {
  // Скрываем обложку (чтобы она не маячила)
  cover.style.display = 'none';

  // Прячем все страницы
  const allPages = document.querySelectorAll('.pages');
  allPages.forEach((p) => {
    p.classList.remove('visible');
  });

  // Показываем нужную
  pageElement.classList.add('visible');
}

// =================== Навешиваем обработчики ===================

// Клик "Открыть книгу"
openBookBtn.addEventListener('click', () => {
  showPage(page1);
});

// Кнопки "Далее"/"Назад" для страниц
if (toPage2Btn) {
  toPage2Btn.addEventListener('click', () => showPage(page2));
}
if (toPage3Btn) {
  toPage3Btn.addEventListener('click', () => showPage(page3));
}
if (toFinalPageBtn) {
  toFinalPageBtn.addEventListener('click', () => showPage(finalPage));
}
if (backToPage1Btn) {
  backToPage1Btn.addEventListener('click', () => showPage(page1));
}
if (backToPage2Btn) {
  backToPage2Btn.addEventListener('click', () => showPage(page2));
}

// Кнопки "Да!" / "Нет..."
yesBtn.addEventListener('click', () => {
  // Запускаем анимацию фейерверка
  startFireworks();
  // Отправляем данные боту (если хотите, чтобы бот увидел "да")
  tg.sendData('love_confirmed');
});

noBtn.addEventListener('click', () => {
  alert('Я подожду, пока ты изменишь решение! \u{1F60A}');
});

// =================== Функции для фейерверков ===================

/** 
 * Запуск простейшей анимации «салют» 
 * (цветные кружочки взлетают вверх и исчезают)
 */
function startFireworks() {
  fireworksContainer.style.display = 'block';

  for (let i = 0; i < 30; i++) {
    const spark = document.createElement('div');
    spark.style.position = 'absolute';
    spark.style.width = '10px';
    spark.style.height = '10px';
    spark.style.borderRadius = '50%';
    spark.style.background = getRandomColor();

    // Случайное отклонение по горизонтали вокруг центра (50%)
    spark.style.left = (50 + Math.random() * 20 - 10) + '%';
    spark.style.bottom = '0px';
    spark.style.opacity = 1;
    spark.style.transition = 'all 2s ease';

    fireworksContainer.appendChild(spark);

    // Задержка, чтобы анимация сработала после вставки в DOM
    setTimeout(() => {
      // Взлетаем вверх на 200-400 px
      spark.style.transform = `translateY(-${200 + Math.random() * 200}px)`;
      spark.style.opacity = 0;
    }, 50);

    // Удаляем элемент через 2.5с
    setTimeout(() => {
      fireworksContainer.removeChild(spark);
    }, 2500);
  }
}

/** Возвращает случайный цвет из набора */
function getRandomColor() {
  const colors = ['red', 'yellow', 'orange', 'pink', 'violet', 'blue', 'lime', 'gold'];
  return colors[Math.floor(Math.random() * colors.length)];
}
