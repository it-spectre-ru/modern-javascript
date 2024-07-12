const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const link = document.querySelector('.ahr');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
  if(e.target.className === 'popup-wrapper'){
    popup.style.display = 'none';
  }
});

link.addEventListener('click', (e) => {
    popup.style.display = 'none';
  }
);