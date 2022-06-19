import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards, config } from './constans.js';

const cardsListWrapper = document.querySelector('.elements');
const profile = document.querySelector('.profile');
const fullName = document.querySelector('.profile__heading');
const about = document.querySelector('.profile__about');
const popupEditName = document.querySelector('.popup__input_type_name');
const popupEditAbout = document.querySelector('.popup__input_type_about');
const popupAddTitle = document.querySelector('.popup__input_type_place');
const popupAddLink = document.querySelector('.popup__input_type_link');
const popup = document.querySelector('.popup');
const popups = document.querySelectorAll('.popup');
const popupForms = document.querySelectorAll('.popup__form');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
export const popupImage = document.querySelector('.popup_type_image');

const popupEditBtn = document.querySelector('.popup__submit_type_edit');
const popupAddBtn = document.querySelector('.popup__submit_type_add');

const addEsc = (evt) => {
  if (evt.key === 'Escape') {
    const PopupOpened = document.querySelector('.popup_opened');
    closePopup(PopupOpened);
  };
};

function closePopupEscBtn() {
  document.addEventListener('keydown', addEsc);
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  closePopupEscBtn();
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  deleteErrorMessage(popup);
  document.removeEventListener('keydown', addEsc);
};

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup__close')) {
      if (evt.target.classList.contains('popup__close_add')) {
        document.forms.addCardForm.reset()
      };
      closePopup(popup)
    };
  });
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target == evt.currentTarget) {
      if (evt.target.classList.contains('popup__close_add')) {
        document.forms.addCardForm.reset()
      };
      closePopup(popup)
    };
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
    popupEditBtn.classList.add('popup__submit_inactive');
    popupEditBtn.disabled = true;
    openPopup(popupEdit);
  }
  else if (evt.target.classList.contains('profile__add-button')) {
    popupAddBtn.classList.add('popup__submit_inactive');
    popupAddBtn.disabled = true;
    openPopup(popupAdd);
  }
});

function submitEditPopup(evt) {
  evt.preventDefault();
  fullName.textContent = popupEditName.value;
  about.textContent = popupEditAbout.value;
  closePopup(popup);
};

function renderCards(wrapper, data) {
  const newCard = new Card(data, '#element');
  wrapper.prepend(newCard.generateCard());
};

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

initialCards.forEach((item) => {
  const card = new Card(item, '#element');
  const cardElement = card.generateCard();
  document.querySelector('.elements').prepend(cardElement);
});

const formValidator = {};
Array.from(document.forms).forEach((formElement) => {
  formValidator[formElement.name] = new FormValidator(config, formElement);
  formValidator[formElement.name].enableValidation();
});
