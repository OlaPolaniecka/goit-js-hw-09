import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');

let timer;

let date = new Date();
let newDate = new Date();

const start = document.querySelector('button');
flatpickr('#datetime-picker', options);
start.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= date.getTime()) {
      window.alert('Please choose a date in the future');
      setTimer(0, 0, 0, 0);
      clearInterval(timer);
    } else {
      start.disabled = false;
      newDate = selectedDates[0];
    }
  },
};

const addLeadingZero = value => {
  return value.padStart(2, '0');
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  date = new Date();
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  setTimer(days, hours, minutes, seconds);
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function setTimer(days, hours, minutes, seconds) {
  timerDays.innerHTML = days;
  timerHours.innerHTML = addLeadingZero(String(hours));
  timerMinutes.innerHTML = addLeadingZero(String(minutes));
  timerSeconds.innerHTML = addLeadingZero(String(seconds));
}
