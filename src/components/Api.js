export class Api {
  constructor(options) {
    this._url = options.url;
    this._token = options.token;
  }

  // _checkResponse = (res) => {
  //   console.log('_checkResponse\nres:');
  //   console.dir(res);
  //   console.log(res.ok);
  //   const response = res.json();
  //     if (res.ok) {
  //       return response;
  //     }
  //     response.then((err) => {
  //       console.dir(this);
  //       this._handleServerErrors(err)});
  // }

  // _handleServerErrors = (err) => {
  //   console.log('_handleServerErrors');
  //   console.dir(err);
  //   return Promise.reject(`Ошибка сети: ${err.message}`);
  // }

  // _fetchFromServer = (url, options) => {

  // }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }

  addCard(card) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`)
      })
  }

  getProfileInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }

  patchProfileEdit(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Что-то пошло не так: ${res.status}`);
      })
  }

  toggleLike(cardId, _isLiked) {
    return fetch(`${this._url}/cards/${cardId}/likes`, {
      method: _isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }

  // deleteLike() {
  //   return fetch(`${this._url}/cards/${id}/likes`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: this._token,
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then((res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     return Promise.reject(`Что-то пошло не так: ${res.status}`);
  //   })
  // }

  updateAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
  }
}
