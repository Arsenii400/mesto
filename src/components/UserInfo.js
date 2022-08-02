export class UserInfo {
  constructor(profileConfig) {
    this._titleSelector = profileConfig.titleSelector;
    this._jobSelector = profileConfig.jobSelector;
    this._avatarSelector = profileConfig.avatarSelector;
    this._titleElement = document.querySelector(this._titleSelector);
    this._jobElement = document.querySelector(this._jobSelector);
    this._avatarElement = document.querySelector(this._avatarSelector);
  };

  setUserInfo = (data) => {
    this._titleElement.textContent = data.name || '';
    this._jobElement.textContent = data.about || '';
    this._avatarElement.src = data.avatar;
    this._id = data._id;
    this._name = data.name;
    this._about = data.about;
    this._avatar = data.avatar;
  }

  getUserInfo = () => {
    return {
      title: this._titleElement.textContent,
      about: this._jobElement.textContent,
      avatar: this._avatarElement.src,
    };
  }

  getUserId = () => {
    return this._id;
  }
}
