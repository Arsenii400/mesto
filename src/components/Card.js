export class Card {

  constructor({ name, link }, cardSelector, handleCardClick) {
    this._heading = name;
    this._image = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  };

  _getCard = () => {
    const newCard = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return newCard;
  };

  _handleLikeClick = () => {
    this._likeButton.classList.toggle('element__like_type_active');
  };

  _handleRemoveCard = () => {
    this._element.remove();
  };

  _handleImageClick = () => {
    this._handleCardClick({ name: this._heading, link: this._image });
  };

  _setEventListeners = () => {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });
    this._element.querySelector('.element__trash').addEventListener('click', this._handleRemoveCard);
    this._cardImage.addEventListener('click', this._handleImageClick);
  };

  generateCard = () => {
    this._element = this._getCard();

    this._likeButton = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__img');

    this._cardImage.src = this._image;
    this._cardImage.alt = this._heading;
    this._element.querySelector('.element__heading').textContent = this._heading;

    this._setEventListeners();

    return this._element;
  };
};


