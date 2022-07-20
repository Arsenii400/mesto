export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

export const initialCards = [
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

export const formConfiguration = {
  inputSelector: '.popup__input',
  submitBtnSelector: '.popup__submit',
}

export const popupConfiguration = {
  activeModifier: 'popup_opened',
  closeBtnSelector: '.popup__close',
}
export const profileConfiguration = {
  titleSelector: '.profile__heading',
  jobSelector: '.profile__about',
}

export const viewPopupConfiguration = {
  imageSelector: '.popup__photo',
  captionSelector: '.popup__heading-image',
}

export const cardsContainerSelector = '.elements';
export const newPlacePopupSelector = '.popup_type_add';
export const profilePopupSelector = '.popup_type_edit';
export const imagePopupSelector = '.popup_type_image';
export const newPlaceFormName = 'addCardForm';
export const profileFormName = 'editProfileForm';

