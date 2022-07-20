export class UserInfo {
  constructor(profileConfig) {
    this._titleSelector = profileConfig.titleSelector;
    this._jobSelector = profileConfig.jobSelector;
    this._titleElement = document.querySelector(this._titleSelector);
    this._jobElement = document.querySelector(this._jobSelector);
  };

  setUserInfo = (data) => {
    this._titleElement.textContent = data.title || '';
    this._jobElement.textContent = data.about || '';
  }

  getUserInfo = () => {
    return { title: this._titleElement.textContent, about: this._jobElement.textContent };
  }
}
