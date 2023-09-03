let headerTimeDate;
let headTime;
let headWeekDay;
let headDay;


export function showTime() {
  headTime = document.querySelector('.header__time');

  const date = new Date();
  const currentTime = date.toLocaleTimeString();

  headTime.textContent = currentTime;

  showDate();
  setTimeout(showTime, 1000);
}

export function showDate() {
  headWeekDay = document.querySelector('.header__weekday');
  headDay = document.querySelector('.header__day');

  const date = new Date();
  const dateDay = {weekday: 'long'}
  const options = {month: 'long', day: 'numeric'};

  const currentDateWeek = date.toLocaleDateString('es-US', dateDay);
  const currentDate = date.toLocaleDateString('es-US', options);

  headWeekDay.textContent = currentDateWeek;
  headDay.textContent = currentDate;
}

export function headSticky() {
  headerTimeDate = document.querySelector('.header__time-date');

  const sticky = headerTimeDate.offsetTop;

  window.addEventListener('scroll', () => {
    if (window.scrollY > sticky) {
      headerTimeDate.classList.add('sticky');
    } else {
      headerTimeDate.classList.remove('sticky');
    }
  });
}