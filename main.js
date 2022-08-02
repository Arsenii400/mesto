(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},t={inputSelector:".popup__input",submitBtnSelector:".popup__submit"},n={activeModifier:"popup_opened",closeBtnSelector:".popup__close"},r={normalCaption:"Сохранить",activeCaption:"Сохраняю..."},o=document.querySelector(".profile__edit-button"),i=document.querySelector(".profile__add-button"),a=document.querySelector(".profile__avatar"),c=document.querySelector(".popup__form_type_edit"),l=document.querySelector(".popup__form_type_add"),u=document.querySelector(".popup__form_type_updateAvatar");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=f((function e(t,n,r,o){var i=this,a=t.name,c=t.link,l=t._id,u=t.likes,s=t.owner._id,f=o.CardClickhandler,d=o.deleteCardHandler,_=o.cardLikeHandler;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"_getCard",(function(){return document.querySelector(i._cardSelector).content.querySelector(".element").cloneNode(!0)})),p(this,"_handleLikeClick",(function(){i._handleCardLike(i._id,i._isLiked(),i.setLikes)})),p(this,"_isLiked",(function(){return i._likes.map((function(e){return e._id})).includes(i._userId)})),p(this,"_renderLikes",(function(){i._isLiked()?i._likeButton.classList.add("element__like_type_active"):i._likeButton.classList.remove("element__like_type_active"),i._cardsCounter.textContent=i._likes.length})),p(this,"setLikes",(function(e){i._likes=e,i._renderLikes()})),p(this,"removeCard",(function(){i._element.remove(),i._element=null})),p(this,"_handleDeleteClick",(function(){i._handleDeleteCard(i._id,i.removeCard)})),p(this,"_handleImageClick",(function(){i._handleCardClick({name:i._heading,link:i._image})})),p(this,"_setEventListeners",(function(){i._likeButton.addEventListener("click",(function(){i._handleLikeClick()})),i._isOwner?i._removeBtn.addEventListener("click",(function(){i._handleDeleteClick()})):i._removeBtn.remove(),i._cardImage.addEventListener("click",(function(){i._handleImageClick()}))})),p(this,"generateCard",(function(){return i._element=i._getCard(),i._cardsCounter=i._element.querySelector(".element__likeCounter"),i._likeButton=i._element.querySelector(".element__like"),i._cardImage=i._element.querySelector(".element__img"),i._removeBtn=i._element.querySelector(".element__trash"),i._cardImage.src=i._image,i._cardImage.alt=i._heading,i._element.querySelector(".element__heading").textContent=i._heading,i._renderLikes(),i._setEventListeners(),i._element})),this._heading=a,this._image=c,this._id=l,this._likes=u,this._isOwner=n===s,this._userId=n,this._cardSelector=r,this._handleCardClick=f,this._handleDeleteCard=d,this._handleCardLike=_}));function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&_(e.prototype,t),n&&_(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=m((function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),h(this,"setUserInfo",(function(e){n._titleElement.textContent=e.name||"",n._jobElement.textContent=e.about||"",n._avatarElement.src=e.avatar,n._id=e._id,n._name=e.name,n._about=e.about,n._avatar=e.avatar})),h(this,"getUserInfo",(function(){return{title:n._titleElement.textContent,about:n._jobElement.textContent,avatar:n._avatarElement.src}})),h(this,"getUserId",(function(){return n._id})),this._titleSelector=t.titleSelector,this._jobSelector=t.jobSelector,this._avatarSelector=t.avatarSelector,this._titleElement=document.querySelector(this._titleSelector),this._jobElement=document.querySelector(this._jobSelector),this._avatarElement=document.querySelector(this._avatarSelector)}));function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n,this._container=document.querySelector(".".concat(this._containerSelector))}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t.addItem(e)}))}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),C(this,"_handleCloseBtnClick",(function(){r.close()})),C(this,"_handleCloseOverlayClick",(function(e){e.target===e.currentTarget&&r.close()})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._activeModifier=n.activeModifier,this._closeBtnSelector=n.closeBtnSelector}var t,n;return t=e,(n=[{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleCloseOverlayClick),this._closeBtn=this._popup.querySelector(this._closeBtnSelector),this._closeBtn.addEventListener("click",this._handleCloseBtnClick)}},{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add(this._activeModifier)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove(this._activeModifier)}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function j(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(n);if(r){var o=B(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return j(this,e)});function i(e,t,n,r,a,c,l){var u,s,f,p,d=l.normalCaption,_=l.activeCaption,m=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;return E(this,i),I(O(p=o.call(this,e,n)),"_getInputValues",(function(){var e={};return p._inputList.forEach((function(t){e[t.id.slice(0,-6)]=t.value})),e})),I(O(p),"_setInputValues",(function(e){p._inputList.forEach((function(t){t.value=e[t.id.slice(0,-6)]}))})),I(O(p),"toggleButtonCaption",(function(e){p._submitButton.textContent=e?p._activeCaption:p._normalCaption})),I(O(p),"_handleSubmit",(function(e){e.preventDefault(),p._submitCallBack(p._getInputValues(),p.toggleButtonCaption,p.close)})),I(O(p),"setEventListeners",(function(){P((u=O(p),B(i.prototype)),"setEventListeners",u).call(u),p._formElement.addEventListener("submit",p._handleSubmit)})),I(O(p),"open",(function(){P((s=O(p),B(i.prototype)),"open",s).call(s),p._getterCallBack?p._setInputValues(p._getterCallBack()):p._formElement.reset(),p._errorResetCallback()})),I(O(p),"close",(function(){P((f=O(p),B(i.prototype)),"close",f).call(f),p._formElement.reset()})),p._formName=t,p._inputSelector=r.inputSelector,p._submitBtnSelector=r.submitBtnSelector,p._submitCallBack=c,p._getterCallBack=m,p._formElement=document.forms[p._formName],p._inputList=Array.from(p._formElement.querySelectorAll(p._inputSelector)),p._submitBtn=p._formElement.querySelector(p._submitBtnSelector),p._errorResetCallback=a,p._normalCaption=d,p._activeCaption=_,p._submitButton=p._formElement.querySelector(".popup__submit"),p}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(k);function T(e){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(e)}function x(e,t){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},x(e,t)}function R(e,t){if(t&&("object"===T(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return A(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&x(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(n);if(r){var o=M(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return R(this,e)});function i(e,t,n){var r,a,c,l,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),u=function(e){var t=e.name,n=e.link;a._imageElement.src=n,a._imageElement.alt=t,a._captionElement.textContent=t,D((r=A(a),M(i.prototype)),"open",r).call(r)},(l="open")in(c=A(a=o.call(this,e,t)))?Object.defineProperty(c,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):c.open=u,a._imageSelector=n.imageSelector,a._captionSelector=n.captionSelector,a._imageElement=document.querySelector(a._imageSelector),a._captionElement=document.querySelector(a._captionSelector),a}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(k);function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function N(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return F(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(){return G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=J(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},G.apply(this,arguments)}function J(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=W(e)););return e}function W(e){return W=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},W(e)}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var $=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=W(n);if(r){var o=W(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return N(this,e)});function i(e,t,n,r){var a,c,l,u,s=r.normalCaption,f=r.activeCaption;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),Y(F(u=o.call(this,e,t)),"_handleFormSubmit",(function(e){e.preventDefault(),u._handleSubmit(u._cardId,u._removeCardCallBack,u.toggleButtonCaption,u.close)})),Y(F(u),"toggleButtonCaption",(function(e){u._submitButton.textContent=e?u._activeCaption:u._normalCaption})),Y(F(u),"open",(function(e,t){u._cardId=e,u._removeCardCallBack=t,G((a=F(u),W(i.prototype)),"open",a).call(a)})),Y(F(u),"close",(function(){G((c=F(u),W(i.prototype)),"close",c).call(c)})),Y(F(u),"setEventListeners",(function(){G((l=F(u),W(i.prototype)),"setEventListeners",l).call(l),u._formElement.addEventListener("submit",u._handleFormSubmit)})),u._normalCaption=s,u._activeCaption=f,u._handleSubmit=n,u._formElement=u._popup.querySelector(".popup__form"),u._submitButton=u._formElement.querySelector(".popup__submit"),u}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(k);function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Q(e,t,n){return t&&K(e.prototype,t),n&&K(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=Q((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),X(this,"_showInputError",(function(e,t){var n=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.textContent=t,n.classList.add(r._errorClass)})),X(this,"_hideInputError",(function(e){var t=r._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),X(this,"_isValid",(function(e){if(e.validity.valid)r._hideInputError(e);else{var t=e.validationMessage;r._showInputError(e,t)}})),X(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),X(this,"_toggleButtonState",(function(e,t){r._hasInvalidInput(e)?(t.classList.add(r._inactiveButtonClass),t.disabled=!0):(t.classList.remove(r._inactiveButtonClass),t.disabled=!1)})),X(this,"resetValidation",(function(){r._toggleButtonState(r._inputList,r._buttonElement),r._inputList.forEach((function(e){r._hideInputError(e)}))})),X(this,"enableValidation",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._isValid(e),r._toggleButtonState(r._inputList,r._buttonElement)}))})),r._toggleButtonState(r._inputList,r._buttonElement)})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}));function ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var te=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._token=t.token}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"getProfileInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"patchProfileEdit",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.title,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"toggleLike",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:t?"DELETE":"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("Что-то пошло не так: ".concat(e.status))}))}}])&&ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function ne(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var re={};Array.from(document.forms).forEach((function(t){re[t.name]=new Z(e,t),re[t.name].enableValidation()}));var oe=function(e,t,n){ae.toggleLike(e,t).then((function(e){var t=e.likes;n(t)})).catch((function(e){console.log(e)}))},ie=new y({titleSelector:".profile__heading",jobSelector:".profile__about",avatarSelector:".profile__avatar"}),ae=new te({url:"https://mesto.nomoreparties.co/v1/cohort-45",token:"a04b0996-96db-486f-bf5a-22c04dae71aa"}),ce=new v({items:[{name:"Микли (посёлок)",link:"https://images.unsplash.com/photo-1555948560-27b32a752ff3?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].reverse(),renderer:function(e){return new d(e,ie.getUserId(),"#element",{CardClickhandler:_e,deleteCardHandler:de,cardLikeHandler:oe}).generateCard()}},"elements"),le=new q(".popup_type_edit","editProfileForm",n,t,re[c.name].resetValidation,(function(e,t,n){t(!0),ae.patchProfileEdit(e).then((function(e){ie.setUserInfo(e),n()})).catch((function(e){console.log(e)})).finally((function(){t(!1)}))}),r,ie.getUserInfo);le.setEventListeners();var ue=new q(".popup_type_add","addCardForm",n,t,re[l.name].resetValidation,(function(e,t,n){t(!0),ae.addCard(e).then((function(e){ce.addItem(e),n()})).catch((function(e){console.log(e)})).finally((function(){t(!1)}))}),{normalCaption:"Создать",activeCaption:"Создаю..."});ue.setEventListeners();var se=new U(".popup_type_image",n,{imageSelector:".popup__photo",captionSelector:".popup__heading-image"});se.setEventListeners();var fe=new q(".popup_type_updateAvatar","updateAvatarForm",n,t,re[u.name].resetValidation,(function(e,t,n){t(!0),ae.updateAvatar(e).then((function(e){ie.setUserInfo(e),n()})).catch((function(e){console.log(e)})).finally((function(){t(!1)}))}),r);fe.setEventListeners();var pe=new $(".popup_type_deleteConfirmation",n,(function(e,t,n,r){n(!0),ae.deleteCard(e).then((function(){t(),r()})).catch((function(e){console.log(e)})).finally((function(){n(!1)}))}),{normalCaption:"Да",activeCaption:"Удаляю..."});pe.setEventListeners();var de=function(e,t){pe.open(e,t)},_e=function(e,t){se.open(e,t)};o.addEventListener("click",(function(){le.open()})),i.addEventListener("click",(function(){ue.open()})),a.addEventListener("click",(function(){fe.open()})),Promise.all([ae.getProfileInfo(),ae.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return ne(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ne(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ie.setUserInfo(o),ce.renderItems(i)})).catch((function(e){console.log("Ошибка в индексе: ".concat(e))}))})();