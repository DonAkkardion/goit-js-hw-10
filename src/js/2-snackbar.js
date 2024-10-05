import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

function showMessage(type, delay) {
  const message =
    type === 'fulfilled'
      ? `✅ Fulfilled promise in ${delay}ms`
      : `❌ Rejected promise in ${delay}ms`;

  const backgroundColor = type === 'fulfilled' ? '#59A10D' : '#E75B5B';
  const textColor = '#FFFFFF';

  iziToast.show({
    message: message,
    timeout: 5000,
    theme: 'dark',
    position: 'topRight',
    backgroundColor: backgroundColor,
    color: textColor,
  });
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const delay = formData.get('delay');
  const state = formData.get('state');

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else if (state === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      showMessage('fulfilled', delay);
    })
    .catch(delay => {
      console.error(`❌ Rejected promise in ${delay}ms`);
      showMessage('rejected', delay);
    });
});
