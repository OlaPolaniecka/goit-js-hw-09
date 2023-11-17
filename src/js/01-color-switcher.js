function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startColor = document.querySelector('[data-start]');
const stopColor = document.querySelector('[data-stop]');
let interval = null;

startColor.addEventListener('click', () => {
  startColor.disabled = true;
  stopColor.disabled = false;
  interval = setInterval(() => {
    startColor.parentNode.style.background = getRandomHexColor();
  }, 1000);
});

stopColor.addEventListener('click', () => {
  startColor.disabled = false;
  stopColor.disabled = true;
  clearInterval(interval);
});
