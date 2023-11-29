import Notiflix from 'notiflix';

export function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

const createbtn = document.querySelector('button');

createbtn.addEventListener('submit', event => {
  event.preventDefault();

  const Inputdelay = document.querySelector('[name="delay"]');
  const Inputstep = document.querySelector('[name="step"]');
  const Inputamount = document.querySelector('[name="amount"]');

  for (let i = 1; i <= Inputamount; i++) {
    const currentDelay = Inputdelay + (i - 1) * Inputstep;
    createPromise(i, currentDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
