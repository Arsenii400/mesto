const openPopup = document.querySelector('.profile__edit-button');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__field_type_name');
const popupJob = document.querySelector('.popup__field_type_job');
const fullName = document.querySelector('.profile__heading');
const job = document.querySelector('.profile__job-title');
const submit = document.querySelector('.popup__form');

function openPopupBtn() {
  popup.classList.add('popup_opened');
  popupName.value = fullName.textContent;
  popupJob.value = job.textContent;
}

function closePopupBtn () {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  fullName.textContent = popupName.value;
  job.textContent = popupJob.value;
  closePopupBtn();
}

openPopup.addEventListener('click', openPopupBtn);

closePopup.addEventListener('click', closePopupBtn);

submit.addEventListener('submit', formSubmitHandler);
