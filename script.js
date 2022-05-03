const openPopup = document.querySelector('.profile-info__edit-button');
const closePopup = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__field_type_name');
const popupJob = document.querySelector('.popup__field_type_job');
const fullName = document.querySelector('.profile-info__heading');
const job = document.querySelector('.profile-info__job-title');
const submit = document.querySelector('.popup__submit');

openPopup.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.add('popup_opened');
  popupName.value = fullName.textContent;
  popupJob.value = job.textContent;
})

closePopup.addEventListener('click', function(event) {
  event.preventDefault();
  popup.classList.remove('popup_opened');
})

function formSubmitHandler (evt) {
  evt.preventDefault();
  fullName.textContent = popupName.value;
  job.textContent = popupJob.value;
  popup.classList.remove('popup_opened');
}

submit.addEventListener('click', formSubmitHandler);
