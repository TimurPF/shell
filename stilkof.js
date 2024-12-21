// Добавляем класс .visible, когда элемент появляется в окне
window.addEventListener('scroll', () => {
    const fadeInSection = document.querySelector('.fade-in');
    const rect = fadeInSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        fadeInSection.classList.add('visible');
    }
});
// Функция для открытия текста на весь экран
function openFullScreenText() {
    const fullScreenText = document.querySelector('.full-screen-text');
    fullScreenText.classList.add('visible');
}

// Функция для закрытия текста
function closeFullScreenText() {
    const fullScreenText = document.querySelector('.full-screen-text');
    fullScreenText.classList.remove('visible');
}

// Пример использования: откроем текст по событию (например, клик по кнопке)
document.querySelector('.product-button').addEventListener('click', openFullScreenText);

// Функция для открытия текста на весь экран
function openFullScreenText() {
    const fullScreenText = document.querySelector('.full-screen-text');
    fullScreenText.classList.add('visible');
}

// Функция для закрытия текста
function closeFullScreenText() {
    const fullScreenText = document.querySelector('.full-screen-text');
    fullScreenText.classList.remove('visible');
}

// Пример использования: откроем текст по событию (например, клик по кнопке)
document.querySelector('.product-button').addEventListener('click', openFullScreenText);


// Функция для открытия текста на весь экран
function openFullScreenText() {
    const fullScreenText = document.querySelector('.full-screen-text');
    fullScreenText.classList.add('visible');
}

// Функция для закрытия текста
function closeFullScreenText() {
    const fullScreenText = document.querySelector('.full-screen-text');
    fullScreenText.classList.remove('visible');
}

// Пример использования: откроем текст по событию (например, клик по кнопке)
document.querySelector('.product-button').addEventListener('click', openFullScreenText);
