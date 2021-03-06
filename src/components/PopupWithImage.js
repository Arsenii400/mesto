import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector, popupConfig, viewPopupConfig) {
    super(popupSelector, popupConfig);
    this._imageSelector = viewPopupConfig.imageSelector;
    this._captionSelector = viewPopupConfig.captionSelector;
    this._imageElement = document.querySelector(this._imageSelector);
    this._captionElement = document.querySelector(this._captionSelector);
  };

  open = ({name, link}) => {
    this._imageElement.src = link;
    this._imageElement.alt = name;
    this._captionElement.textContent = name;
    super.open();
  }
};
