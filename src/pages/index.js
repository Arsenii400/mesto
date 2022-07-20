import './index.css';

import { initialCards, config } from '../utils/constans.js';
import { Card } from '../components/Card.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { FormValidator } from '../components/FormValidator.js';

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
} from '../utils/constans.js';

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

const openCardPopup = () => {
  newCardPopup.open();
};

const handleProfilePopupOpen = () => {
  newProfilePopup.open();
};

profileAddBtn.addEventListener('click', () => {
  openCardPopup();
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
