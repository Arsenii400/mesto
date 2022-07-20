import './pages/index.css';

import { initialCards, config } from './scripts/constans.js';
import { Card } from './scripts/Card.js';
import { UserInfo } from './scripts/UserInfo.js';
import { Section } from './scripts/Section.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import { PopupWithImage } from './scripts/PopupWithImage.js';
import { FormValidator } from './scripts/FormValidator.js';

const profileEditBtn = document.querySelector('.profile__edit-button');
const profileAddBtn = document.querySelector('.profile__add-button');
const editProfileForm = document.querySelector('.popup__form_type_edit');
const addCardForm = document.querySelector('.popup__form_type_add');

import {
  formConfiguration,
  popupConfiguration,
  profileConfiguration,
  viewPopupConfiguration,
  cardsContainerSelector,
  newPlacePopupSelector,
  profilePopupSelector,
  imagePopupSelector,
  newPlaceFormName,
  profileFormName,
} from './scripts/constans.js';

const formValidator = {};
Array.from(document.forms).forEach((formElement) => {
  formValidator[formElement.name] = new FormValidator(config, formElement);
  formValidator[formElement.name].enableValidation();
});

const handleCardSubmit = (data) => {
  cardsContainer.addItem(data);
};

const handleProfileSubmit = (data) => {
  user.setUserInfo(data);
};

const user = new UserInfo(profileConfiguration);

const newProfilePopup = new PopupWithForm(
  profilePopupSelector,
  profileFormName,
  popupConfiguration,
  formConfiguration,
  formValidator[editProfileForm.name].resetValidation,
  handleProfileSubmit,
  user.getUserInfo);

newProfilePopup.setEventListeners();

const newCardPopup = new PopupWithForm(
  newPlacePopupSelector,
  newPlaceFormName,
  popupConfiguration,
  formConfiguration,
  formValidator[addCardForm.name].resetValidation,
  handleCardSubmit);

newCardPopup.setEventListeners();

const fullViewPopup = new PopupWithImage(
  imagePopupSelector,
  popupConfiguration,
  viewPopupConfiguration,
);

fullViewPopup.setEventListeners();

const addCardSubmitHandler = () => {
  newCardPopup.open();
};

const handleProfilePopupOpen = () => {
  newProfilePopup.open();
};

profileAddBtn.addEventListener('click', () => {
  addCardSubmitHandler();
});

profileEditBtn.addEventListener('click', () => {
  handleProfilePopupOpen();
});

const createCard = (cardItem) => {
  const card = new Card(cardItem, '#element', fullViewPopup.open);
  return card.generateCard();
};

const cardsContainer = new Section({
  items: initialCards.reverse(), renderer: createCard,
}, cardsContainerSelector);

cardsContainer.renderItems();
