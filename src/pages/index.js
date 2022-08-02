import './index.css';

import { initialCards, config } from '../utils/constans.js';
import { Card } from '../components/Card.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { FormValidator } from '../components/FormValidator.js';
import { Api } from '../components/Api.js';

const profileEditBtn = document.querySelector('.profile__edit-button');
const profileAddBtn = document.querySelector('.profile__add-button');
const updateAvatarBtn = document.querySelector('.profile__avatar');
const editProfileForm = document.querySelector('.popup__form_type_edit');
const addCardForm = document.querySelector('.popup__form_type_add');
const updateAvatarForm = document.querySelector('.popup__form_type_updateAvatar')


import {
  formConfiguration,
  popupConfiguration,
  profileConfiguration,
  viewPopupConfiguration,
  ApiConfiguration,
  newCardSubmitButtonConfiguration,
  editProfileSubmitButtonConfiguration,
  confimDeleteButtonCaption,
  cardsContainerSelector,
  newPlacePopupSelector,
  profilePopupSelector,
  updateAvatarPopupSelector,
  deleteConfirmPopupSelector,
  imagePopupSelector,
  newPlaceFormName,
  profileFormName,
  updateAvatarFormName,
  deleteConfirmFormName,
} from '../utils/constans.js';

const formValidator = {};
Array.from(document.forms).forEach((formElement) => {
  formValidator[formElement.name] = new FormValidator(config, formElement);
  formValidator[formElement.name].enableValidation();
});

const handleLikeClick = (cardId, isLiked, setLikesCallback) => {
  api.toggleLike(cardId, isLiked)
    .then(({ likes }) => {
      setLikesCallback(likes)
    })
    .catch((err) => {
      console.log(err);
    })
}

const handleCardSubmit = (data, toggleButtonCaptionCallback, closePopupCallback) => {
  toggleButtonCaptionCallback(true);
  api.addCard(data)
    .then((res) => {
      cardsContainer.addItem(res);
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonCaptionCallback(false);
    })
};

const handleProfileSubmit = (data, toggleButtonCaptionCallback, closePopupCallback) => {
  toggleButtonCaptionCallback(true);
  api.patchProfileEdit(data)
    .then((res) => {
      user.setUserInfo(res);
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonCaptionCallback(false);
    })
};

const handleUpdateAvatarSubmit = (data, toggleButtonCaptionCallback, closePopupCallback) => {
  toggleButtonCaptionCallback(true);
  api.updateAvatar(data)
    .then((res) => {
      user.setUserInfo(res);
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonCaptionCallback(false);
    })
};

const handleDeleteclick = (cardId, removeCardCallBack, toggleButtonCaptionCallback, closePopupCallback) => {
  toggleButtonCaptionCallback(true);
  api.deleteCard(cardId)
    .then(() => {
      removeCardCallBack();
      closePopupCallback();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      toggleButtonCaptionCallback(false);
    })
}

const user = new UserInfo(
  profileConfiguration
);

const api = new Api(
  ApiConfiguration
);

const createCard = (cardItem) => {
  const card = new Card(cardItem, user.getUserId(), '#element', {
    CardClickhandler: openFullPhotoPopup,
    deleteCardHandler: openDeleteConfirmPopup, cardLikeHandler: handleLikeClick
  });
  return card.generateCard();
};

const cardsContainer = new Section({
  items: initialCards.reverse(), renderer: createCard,
}, cardsContainerSelector
);

const newProfilePopup = new PopupWithForm(
  profilePopupSelector,
  profileFormName,
  popupConfiguration,
  formConfiguration,
  formValidator[editProfileForm.name].resetValidation,
  handleProfileSubmit,
  editProfileSubmitButtonConfiguration,
  user.getUserInfo
);

newProfilePopup.setEventListeners();

const newCardPopup = new PopupWithForm(
  newPlacePopupSelector,
  newPlaceFormName,
  popupConfiguration,
  formConfiguration,
  formValidator[addCardForm.name].resetValidation,
  handleCardSubmit,
  newCardSubmitButtonConfiguration);

newCardPopup.setEventListeners();

const fullViewPopup = new PopupWithImage(
  imagePopupSelector,
  popupConfiguration,
  viewPopupConfiguration,
);

fullViewPopup.setEventListeners();

const updateAvatarPopup = new PopupWithForm(
  updateAvatarPopupSelector,
  updateAvatarFormName,
  popupConfiguration,
  formConfiguration,
  formValidator[updateAvatarForm.name].resetValidation,
  handleUpdateAvatarSubmit,
  editProfileSubmitButtonConfiguration
  );

updateAvatarPopup.setEventListeners();

const deleteConfirmPopup = new PopupWithConfirmation(
  deleteConfirmPopupSelector,
  popupConfiguration,
  handleDeleteclick,
  confimDeleteButtonCaption,
);
 deleteConfirmPopup.setEventListeners();

const openDeleteConfirmPopup = (cardId, removeCardCallBack) => {
  deleteConfirmPopup.open(cardId, removeCardCallBack)
}

const openProfilePopup = () => {
  newProfilePopup.open();
};

const openCardPopup = () => {
  newCardPopup.open();
};

const openAvatarPopup = () => {
  updateAvatarPopup.open();
}

const openFullPhotoPopup = (name, link) => {
  fullViewPopup.open(name, link);
}

profileEditBtn.addEventListener('click', () => {
  openProfilePopup();
});

profileAddBtn.addEventListener('click', () => {
  openCardPopup();
});

updateAvatarBtn.addEventListener('click', () => {
  openAvatarPopup();
})

Promise.all([api.getProfileInfo(), api.getInitialCards()])
  .then(([profile, cards]) => {
    user.setUserInfo(profile);
    cardsContainer.renderItems(cards);
  })
  .catch((err) => {
    console.log(`Ошибка в индексе: ${err}`)
  })

// const cardFromServer = function() {
//   api.getInitialCards()
//   .then((res) => {
//     cardsContainer.renderItems(res);
//     console.dir(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }

// cardFromServer();

// const setUserInfoFromServer = function() {
//   api.getProfileInfo()
//   .then((res) => {
//     user.setUserInfo(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
// }

// setUserInfoFromServer();
