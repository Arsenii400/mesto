const page = document.querySelector('.page');
const templatePopup = document.querySelector('#popup');
const templateCard = document.querySelector('#element');
const templateImagePopup = document.querySelector('#imagePopup');
const cardsListWrapper = document.querySelector('.elements');
const footer = document.querySelector('.footer');
const fullName = document.querySelector('.profile__heading');
const job = document.querySelector('.profile__job-title');

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
};

function closeFullPhoto() {
  const photoToClose = document.querySelector('.imagePopup');
  photoToClose.remove();
}

function submitEditPopup(evt) {
  evt.preventDefault();
  const popupEditName = document.querySelector('.popup__field_type_name');
  const popupEditJob = document.querySelector('.popup__field_type_job');
  fullName.textContent = popupEditName.value;
  job.textContent = popupEditJob.value;
  closePopupBtn();
};

function submitAddUserCard(evt) {
  evt.preventDefault();
  const newCard = templateCard.content.cloneNode(true);
  const newCardTitle = newCard.querySelector('.element__heading');
  const newCardLink = newCard.querySelector('.element__img');
  const popupEditName = document.querySelector('.popup__field_type_name');
  const popupEditJob = document.querySelector('.popup__field_type_job');
  newCardTitle.textContent = popupEditName.value;
  newCardLink.src = popupEditJob.value;
  newCardLink.alt = popupEditName.value;
  cardsListWrapper.prepend(newCard);
  closePopupBtn()
};

function likeActive(evt) {
  const elm = evt.target;
  elm.classList.toggle('element__like_type_active');
};

function openFullPhoto(evt) {
  const imagePopup = templateImagePopup.content.cloneNode(true);
  const photo = imagePopup.querySelector('.imagePopup__photo');
  const heading = imagePopup.querySelector('.imagePopup__heading');
  const cardPhoto = evt.target;
  photo.src = cardPhoto.src;
  photo.alt = cardPhoto.alt;
  heading.textContent = cardPhoto.alt;
  footer.after(imagePopup);
};

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
  else if (el.classList.value === 'imagePopup__close') {
    closeFullPhoto();
  }
  else if (el.classList.contains('element__like')) {
    likeActive(evt);
  }
  else if (el.classList.value === 'element__img') {
    openFullPhoto(evt);
}
});

page.addEventListener('submit', function (evt) {
  const el = evt.target;
  if (el.textContent.includes('Сохранить')) {
    submitEditPopup(evt);
  }
  else if (el.textContent.includes('Создать')) {
    submitAddUserCard(evt);
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

const getCard = function (title) {
  const newCard = templateCard.content.cloneNode(true);
  const newCardTitle = newCard.querySelector('.element__heading');
  const newCardLink = newCard.querySelector('.element__img');
  newCardTitle.textContent = title.name;
  newCardLink.src = title.link;
  newCardLink.alt = title.name;
  return newCard;
};

function renderCards(wrapper, title) {
  wrapper.prepend(getCard(title));
};

initialCards.forEach(function (title) {
  renderCards(cardsListWrapper, title);
});



