document.querySelector('.call-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Запрос отправлен!');
});

document
  .querySelector('.burger__button')
  .addEventListener('click', function (e) {
    if (window.innerWidth < 1116) {
      document
        .querySelector('.burger__nav')
        .classList.toggle('burger__nav--active');
    }
  });
