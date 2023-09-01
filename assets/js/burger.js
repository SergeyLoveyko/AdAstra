let bars;
let xmark;
let burgerList;


export function burger() {
  bars = document.querySelector('.burger-button__icon-bars');
  xmark = document.querySelector('.burger-button__icon-xmark');
  burgerList = document.querySelector('.burger__content');

  bars.addEventListener('click', showMenu);
  xmark.addEventListener('click', closeMenu);
}

function showMenu() {

  if (burgerList.classList.contains('hidden')) {
    burgerList.classList.remove('hidden');

    bars.classList.remove('visible');
    bars.classList.add('hidden');
    xmark.classList.remove('hidden');
    xmark.classList.add('visible');

    setTimeout(function() {
      burgerList.classList.toggle('burger__content_animation');
    }, 20);
  } else {
    closeMenu();
  }
}

function closeMenu() {
  xmark.classList.remove('visible');
  xmark.classList.add('hidden');
  bars.classList.remove('hidden');
  bars.classList.add('visible');
  burgerList.classList.toggle('burger__content_animation');

  setTimeout(function() {
    burgerList.classList.add('hidden');
  }, 1100);
}

// function showMenu() {
//   bars.classList.remove('visible');
//   bars.classList.add('hidden');
//   xmark.classList.remove('hidden');
//   xmark.classList.add('visible');
//   burgerList.classList.toggle('burger__content_animation');
// }

// function closeMenu() {
//   xmark.classList.remove('visible');
//   xmark.classList.add('hidden');
//   bars.classList.remove('hidden');
//   bars.classList.add('visible');
//   burgerList.classList.toggle('burger__content_animation');
// }

