import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, config } from './constans.js';

const cardsListWrapper = document.querySelector('.elements');
const profile = document.querySelector('.profile');
const fullName = document.querySelector('.profile__heading');
const about = document.querySelector('.profile__about');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileAddBtn = document.querySelector('.profile__add-button');
const popupEditName = document.querySelector('.popup__input_type_name');
const popupEditAbout = document.querySelector('.popup__input_type_about');
const popupAddTitle = document.querySelector('.popup__input_type_place');
const popupAddLink = document.querySelector('.popup__input_type_link');
const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
const popupForms = document.querySelectorAll('.popup__form');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const photo = document.querySelector('.popup__photo');
const heading = document.querySelector('.popup__heading-image');
export const popupImage = document.querySelector('.popup_type_image');

const addEsc = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  };
};

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', addEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', addEsc);
};

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    };
  });
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target == evt.currentTarget) {
      closePopup(popup)
    };
  });
});

function handleCardClick(name, link) {
  photo.src = link;
  photo.alt = name;
  heading.textContent = name;
  openPopup(popupImage);
};

profileEditBtn.addEventListener('click', () => {
  popupEditName.value = fullName.textContent;
  popupEditAbout.value = about.textContent;
  formValidator[editProfileForm.name].resetValidation();
  openPopup(popupEdit);
});

profileAddBtn.addEventListener('click', () => {
  formValidator[addCardForm.name].resetValidation();
  openPopup(popupAdd);
});


function submitEditPopup(evt) {
  evt.preventDefault();
  fullName.textContent = popupEditName.value;
  about.textContent = popupEditAbout.value;
  closePopup(popup);
};

function createCard(item) {
  const cardElement = new Card(item, '#element', handleCardClick);
  const card = cardElement.generateCard();
  return card;
}

function renderCards(wrapper, data) {
  const newCard = createCard(data);
  wrapper.prepend(newCard);
};

initialCards.forEach((itm) => {
  renderCards(cardsListWrapper, itm);
});

function assembleCard(evt) {
  evt.preventDefault();
  const data = {
    name: popupAddTitle.value,
    link: popupAddLink.value
  };
  renderCards(cardsListWrapper, data);
  closePopup(popupAdd);
  addCardForm.reset();
};

popupForms.forEach((popupForm) => {
  popupForm.addEventListener('submit', (evt) => {
    if (evt.target.textContent.includes('Сохранить')) {
      submitEditPopup(evt);
    }
    else if (evt.target.textContent.includes('Создать')) {
      assembleCard(evt);
    };
  });
});

const formValidator = {};
Array.from(document.forms).forEach((formElement) => {
  formValidator[formElement.name] = new FormValidator(config, formElement);
  formValidator[formElement.name].enableValidation();
});
