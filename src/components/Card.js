export class Card {

  constructor({ name, link, _id, likes, owner: { _id: ownerId } }, userId, cardSelector, { CardClickhandler,
    deleteCardHandler, cardLikeHandler }) {
    this._heading = name;
    this._image = link;
    this._id = _id;
    this._likes = likes;
    this._isOwner = userId === ownerId;
    this._userId = userId;

    this._cardSelector = cardSelector;
    this._handleCardClick = CardClickhandler;
    this._handleDeleteCard = deleteCardHandler;
    this._handleCardLike = cardLikeHandler;
  };

  _getCard = () => {
    const newCard = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return newCard;
  };

  _handleLikeClick = () => {
    // console.log(`this._id = '${this._id}', this._isLiked() = '${this._isLiked()}'`)
    this._handleCardLike(this._id, this._isLiked(), this.setLikes);
  };

  _isLiked = () => {
    return this._likes.map((item) => item._id).includes(this._userId);
  }

  _renderLikes = () => {
    if (this._isLiked()) {
      this._likeButton.classList.add('element__like_type_active');
    }
    else {
      this._likeButton.classList.remove('element__like_type_active');
    }
    this._cardsCounter.textContent = this._likes.length;
  }

  setLikes = (newLikes) => {
    this._likes = newLikes;
    this._renderLikes();
  }

  removeCard = () => {
    this._element.remove(/* '.element' */);
  };


  _handleDeleteClick = () => {
    this._handleDeleteCard(this._id, this.removeCard);
  }

  _handleImageClick = () => {
    this._handleCardClick({ name: this._heading, link: this._image });
  };

  _setEventListeners = () => {
    this._likeButton.addEventListener('click', () => {
      this._handleLikeClick();
    });

    if (this._isOwner) {
      this._removeBtn.addEventListener('click', () => {
        this._handleDeleteClick();
      });
    }
    else {
      this._removeBtn.remove()
    };

    this._cardImage.addEventListener('click', () => {
      this._handleImageClick();
    });
  };

  generateCard = () => {
    this._element = this._getCard();

    this._cardsCounter = this._element.querySelector('.element__likeCounter');
    this._likeButton = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__img');
    this._removeBtn = this._element.querySelector('.element__trash');

    this._cardImage.src = this._image;
    this._cardImage.alt = this._heading;
    this._element.querySelector('.element__heading').textContent = this._heading;

    this._renderLikes();

    this._setEventListeners();

    return this._element;
  };
};


