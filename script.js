const cardsData = [
    {
        image: "./img/brazil.png",
        title: "Бразилия Суль-де-Минас",
        alt: "Картинка 1"
    },
    {
        image: "./img/eff.png",
        title: "Эфиопия Иргачефф",
        alt: "Картинка 2"
    },
    {
        image: "./img/gva.png",
        title: "Гватемала Фуэго",
        alt: "Картинка 3"
    }
  ];
  
  const cardContainer = document.getElementById("card-container");
  let cardCount = 0;
  const maxCards = 50;
  
  // Создание карточки
  function createCard(cardData) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
  
    const imgElement = document.createElement("img");
    imgElement.src = cardData.image;
    imgElement.alt = cardData.alt;
    imgElement.classList.add("card__image");
  
    // Клик по изображению открывает модальное окно
    imgElement.addEventListener("click", () => {
        openModal(cardData.image, cardData.title);
    });
  
    cardElement.appendChild(imgElement);
    return cardElement;
  }
  
  // Создание скелетона
  function createSkeleton() {
    const skeletonElement = document.createElement("div");
    skeletonElement.classList.add("card__skeleton");
    return skeletonElement;
  }
  
  // Добавление карточки с анимацией
  function addCard(cardData, delay) {
    const skeleton = createSkeleton();
    cardContainer.appendChild(skeleton);
  
    setTimeout(() => {
        const cardElement = createCard(cardData);
        cardContainer.replaceChild(cardElement, skeleton);
  
        // Анимация появления
        setTimeout(() => {
            cardElement.classList.add("visible");
        }, 200);
    }, delay);
  }
  
  // Случайная карточка
  function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cardsData.length);
    return cardsData[randomIndex];
  }
  
  // Подгрузка карточек
  function loadCards() {
    if (cardCount < maxCards) {
        let cardsToAdd = 3;
        if (cardCount + cardsToAdd > maxCards) {
            cardsToAdd = maxCards - cardCount;
        }
        for (let i = 0; i < cardsToAdd; i++) {
            const randomCard = getRandomCard();
            addCard(randomCard, 500 * i);
            cardCount++;
        }
    }
  }
  
  // Проверка: достиг ли пользователь конца страницы
  function isAtBottom() {
    return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
  }
  
  window.addEventListener("scroll", () => {
    if (isAtBottom() && cardCount < maxCards) {
        loadCards();
    }
  });
  
  // Модальное окно
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalText = document.getElementById("modal-text");
  const modalClose = document.getElementById("modal-close");
  
  // Открыть модальное окно
  function openModal(imageSrc, cardTitle) {
    modal.style.display = "flex";
    modalImage.src = imageSrc;
    modalText.textContent = cardTitle;
  }
  
  // Закрыть модальное окно
  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  // Закрытие модального окна при клике вне изображения
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
  });
  
  // Загрузка первых карточек
  loadCards();
  