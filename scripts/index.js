const page = document.querySelector('.page');
const templateCard = document.querySelector('#element');
const cardsListWrapper = document.querySelector('.elements');
const footer = document.querySelector('.footer');
const fullName = document.querySelector('.profile__heading');
const about = document.querySelector('.profile__about');
const popupEditName = document.querySelector('.popup__input_type_name');
const popupEditAbout = document.querySelector('.popup__input_type_about');
const popupAddTitle = document.querySelector('.popup__input_type_place');
const popupAddLink = document.querySelector('.popup__input_type_link');
const popup = document.querySelector('.popup');
<<<<<<< HEAD
const popups = document.querySelectorAll('.popup');
const popupForm = document.querySelector('.popup__form');
const popupForms = document.querySelectorAll('.popup__form');
const popupEdit = document.querySelector('.popup__edit');
const popupAdd = document.querySelector('.popup__add');
const popupImage = document.querySelector('.popup__image');
=======
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupImage = document.querySelector('.popup_image');
>>>>>>> parent of 3f17b3f (Hotfix: Убрал повторяющийся код в функции)
const photo = document.querySelector('.popup__photo');
const heading = document.querySelector('.popup__heading-image');

<<<<<<< HEAD

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    };
  });
  const button = popup.querySelector('.popup__submit');
  button.classList.add('popup__submit_inactive');
  button.disabled = true;
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  deleteErrorMessage(popup);
};

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close') || evt.target == evt.currentTarget) {
      if (evt.target.classList.contains('popup__close_add')) {
      document.forms.addCardForm.reset()};
      closePopup(popup)};
  });
});

function deleteErrorMessage(popup) {
  const inputArray = Array.from(popup.querySelectorAll('.popup__input'));
  inputArray.forEach((input) => {
    input.classList.remove('popup__input_type_error');
    const errorMsg = popup.querySelector(`.${input.id}-error`);
    errorMsg.classList.remove('popup__input-error_active');
  });
  document.forms.addCardForm.reset();
};

profile.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('profile__edit-button')) {
    popupEditName.value = fullName.textContent;
    popupEditAbout.value = about.textContent;
    openPopup(popupEdit);
=======
function getEditPopup() {
  popupEdit.classList.add('popup_opened');
  popupEditName.value = fullName.textContent;
  popupEditJob.value = job.textContent;
};

function getAddPopup() {
  popupAdd.classList.add('popup_opened');
  popupAddTitle.value = '';
  popupAddLink.value = '';
};

function openFullPhoto(evt) {
  popupImage.classList.add('popup_opened');
  const cardPhoto = evt.target;
  photo.src = cardPhoto.src;
  photo.alt = cardPhoto.alt;
  heading.textContent = cardPhoto.alt;
};

function closeEditPopupBtn() {
  popupEdit.classList.remove('popup_opened');
};

function closeAddPopupBtn() {
  popupAdd.classList.remove('popup_opened');
};

function closeFullPhoto() {
  popupImage.classList.remove('popup_opened');
};

function submitEditPopup(evt) {
  evt.preventDefault();
  const popupEditName = document.querySelector('.popup__field_type_name');
  const popupEditJob = document.querySelector('.popup__field_type_job');
  fullName.textContent = popupEditName.value;
  job.textContent = popupEditJob.value;
  closeEditPopupBtn();
};

function submitAddUserCard(evt) {
  evt.preventDefault();
  const newCard = templateCard.content.cloneNode(true);
  const newCardTitle = newCard.querySelector('.element__heading');
  const newCardLink = newCard.querySelector('.element__img');
  const popupEditName = document.querySelector('.popup__field_type_place');
  const popupEditJob = document.querySelector('.popup__field_type_link');
  newCardTitle.textContent = popupEditName.value;
  newCardLink.src = popupEditJob.value;
  newCardLink.alt = popupEditName.value;
  cardsListWrapper.prepend(newCard);
  closeAddPopupBtn();
};

function likeActive(evt) {
  const elm = evt.target;
  elm.classList.toggle('element__like_type_active');
};

function removeCard(evt) {
  evt.target.closest('.element').remove();
};

// Повесил слушатель на всю страницу и на всплытии ловлю целевые элементы и к ним применяю функцию
page.addEventListener('click', function (evt) {
  const el = evt.target;
  if (el.classList.value === 'profile__edit-button') {
    getEditPopup();
  }
  if (el.classList.value === 'profile__add-button') {
    getAddPopup();
  }
  else if (el.classList.contains('popup__close_edit')) {
    closeEditPopupBtn();
  }
  else if (el.classList.contains('popup__close_add')) {
    closeAddPopupBtn();
  }
  else if (el.classList.contains('popup__close_image')) {
    closeFullPhoto();
  }
  else if (el.classList.contains('element__like')) {
    likeActive(evt);
  }
  else if (el.classList.value === 'element__img') {
    openFullPhoto(evt);
  }
  else if (el.classList.value === 'element__trash') {
    removeCard(evt);
  }
});

page.addEventListener('submit', function (evt) {
  const el = evt.target;
  if (el.textContent.includes('Сохранить')) {
    submitEditPopup(evt);
>>>>>>> parent of 3f17b3f (Hotfix: Убрал повторяющийся код в функции)
  }
  else if (el.textContent.includes('Создать')) {
    submitAddUserCard(evt);
  }
});

const initialCards = [
  {
    name: 'Микли (посёлок)',
    link: 'https://images.unsplash.com/photo-1555948560-27b32a752ff3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387'
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

<<<<<<< HEAD

function likeActive(evt) {
  evt.target.classList.toggle('element__like_type_active');
};

function removeCard(evt) {
  evt.target.closest('.element').remove();
};

function submitEditPopup(evt) {
  evt.preventDefault();
  fullName.textContent = popupEditName.value;
  about.textContent = popupEditAbout.value;
  closePopup(popup);
};

=======
>>>>>>> parent of 3f17b3f (Hotfix: Убрал повторяющийся код в функции)
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

<<<<<<< HEAD
function createCard(evt) {
  evt.preventDefault();
  const data = {
    name: popupAddTitle.value,
    link: popupAddLink.value
  };
  renderCards(cardsListWrapper, data);
  document.forms.addCardForm.reset();
  closePopup(popupAdd);
};

popupForms.forEach((popupForm) => {
  popupForm.addEventListener('submit', (evt) => {
    if (evt.target.textContent.includes('Сохранить')) {
      submitEditPopup(evt);
    }
    else if (evt.target.textContent.includes('Создать')) {
      createCard(evt);
    };
  });
});
=======


>>>>>>> parent of 3f17b3f (Hotfix: Убрал повторяющийся код в функции)
