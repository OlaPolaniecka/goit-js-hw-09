import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector('[name="delay"]');
const stepInput = document.querySelector('[name="step"]');
const amountInput = document.querySelector('[name="amount"]');
const createBtn = document.querySelector('button');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    // Reject
    Notify.failure(`Fulfilled promise ${position} in ${delay}ms`);
  }
}

createBtn.addEventListener('submit', e => {
  e.preventDefault();
  let currentDelay = parseInt(delayInput.value);
  setTimeout(() => {
    for (let i = 0; i < amountInput.value; i++) {
      setTimeout(() => {
        createPromise(i + 1, currentDelay), parseInt(stepInput.value);
        currentDelay += parseInt(stepInput.value);
      }, parseInt(stepInput.value) * i);
    }
  }, parseInt(delayInput.value));
});
