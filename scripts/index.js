const templateCard = document.querySelector('#element');
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
const popupForm = document.querySelector('.popup__form');
const popupForms = document.querySelectorAll('.popup__form');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');
const photo = document.querySelector('.popup__photo');
const heading = document.querySelector('.popup__heading-image');
const like = document.querySelector('.element__like');
const trash = document.querySelector('.element__trash');
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

function openPopup(popup) {
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

const getCard = function (title) {
  const newCard = templateCard.content.cloneNode(true);
  const newCardTitle = newCard.querySelector('.element__heading');
  const newCardLink = newCard.querySelector('.element__img');
  const like = newCard.querySelector('.element__like');
  const trash = newCard.querySelector('.element__trash');
  newCardTitle.textContent = title.name;
  newCardLink.src = title.link;
  newCardLink.alt = title.name;

  newCardLink.addEventListener('click', function () {
    photo.src = title.link;
    heading.textContent = title.name;
    openPopup(popupImage);
  });

  like.addEventListener('click', (evt) => {
    likeActive(evt);
  });

  trash.addEventListener('click', (evt) => {
    removeCard(evt);
  });

  return newCard;
};

function renderCards(wrapper, title) {
  wrapper.prepend(getCard(title));
};

initialCards.forEach(function (title) {
  renderCards(cardsListWrapper, title);
});

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
