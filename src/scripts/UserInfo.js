export class UserInfo {
  constructor(profileConfig) {
    this._titleSelector = profileConfig.titleSelector;
    this._jobSelector = profileConfig.jobSelector;
    // this._profile = {title: '', job: ''};
    this._titleElement = document.querySelector(`.${this._titleSelector}`);
    this._jobElement = document.querySelector(`.${this._jobSelector}`);
    // console.dir(this._titleElement);
    // console.dir(this._jobElement);
  };

// _renderProfile() {
//   this._titleElement.textContent = this._profile.title;
//   this._jobElement.textContent = this._profile.job;
// }

setUserInfo = (data) => {
  // console.dir(data);
  this._titleElement.textContent = data.name || '';
  this._jobElement.textContent = data.about || '';
  // console.dir(this._titleElement.textContent);
  // console.dir(this._jobElement.textContent);
}

getUserInfo = () => {
  // console.dir(this);
  // console.dir(this._titleElement);
  // console.dir(this._jobElement);
  // console.dir({name: this._titleElement.textContent, about: this._jobElement.textContent});
  return {name: this._titleElement.textContent, about: this._jobElement.textContent};
}
}
