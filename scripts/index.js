const openEditPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__field_type_name');
const popupJob = document.querySelector('.popup__field_type_job');
const fullName = document.querySelector('.profile__heading');
const job = document.querySelector('.profile__job-title');
const submit = document.querySelector('.popup__form');
const profile = document.querySelector('.profile');
const footer = document.querySelector('.footer');
const templatePopup = document.querySelector('#popup');
const page = document.querySelector('.page');

function getEditPopup() {
  const editPopup = templatePopup.content.cloneNode(true);
  const popupEditHeading = editPopup.querySelector('.popup__heading');
  const popupEditName = editPopup.querySelector('.popup__field_type_name');
  const popupEditJob = editPopup.querySelector('.popup__field_type_job');
  const popupEditSubmit = editPopup.querySelector('.popup__submit');
  popupEditHeading.textContent = 'Редактировать профиль';
  popupEditName.value = fullName.textContent;
  popupEditJob.value = job.textContent;
  popupEditName.placeholder = 'Имя';
  popupEditJob.placeholder = 'О себе';
  popupEditSubmit.textContent = 'Сохранить';
  footer.after(editPopup);
};

function getAddPopup() {
  const editPopup = templatePopup.content.cloneNode(true);
  const popupEditHeading = editPopup.querySelector('.popup__heading');
  const popupEditName = editPopup.querySelector('.popup__field_type_name');
  const popupEditJob = editPopup.querySelector('.popup__field_type_job');
  const popupEditSubmit = editPopup.querySelector('.popup__submit');
  popupEditHeading.textContent = 'Новое место';
  popupEditName.placeholder = 'Название';
  popupEditJob.placeholder = 'Ссылка на картинку';
  popupEditSubmit.textContent = 'Создать';
  footer.after(editPopup);
};

function closePopupBtn() {
  const popupToClose = document.querySelector('.popup');
  popupToClose.remove();
}

page.addEventListener('click', function (evt) {
  const el = evt.target;
  if (el.classList.value === 'profile__edit-button') {
    getEditPopup();
  }
  if (el.classList.value === 'profile__add-button') {
    getAddPopup();
  }
  else if (el.classList.value === 'popup__close') {
    closePopupBtn();
  }
});

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardsListWrapper = document.querySelector('.elements');
const templateCard = document.querySelector('#element');

const getCard = function (title) {
  const newCard = templateCard.content.cloneNode(true);
  const newCardTitle = newCard.querySelector('.element__heading');
  const newCardLink = newCard.querySelector('.element__img');
  newCardTitle.textContent = title.name;
  newCardLink.src = title.link;
  newCardLink.alt = title.name;
  return newCard;
};

function renderItems(wrapper, title) {
  wrapper.append(getCard(title));
};

initialCards.forEach(function (title) {
  renderItems(cardsListWrapper, title);
});



