let body
let modal;
let modalBox;
let btnCloseModal;



export function openModal() {
  window.addEventListener('scroll', animOnScroll);
}


export function closeModal() {
  modal = document.querySelector('.modal');
  modalBox = document.querySelector('.modal__box');
  btnCloseModal = document.querySelectorAll('.btn-close-modal');


  btnCloseModal.forEach(btn => {
    btn.addEventListener('click', function() {
      modal.classList.remove('open');
      body.classList.remove('no-scroll');
    });
  });

//  Close modal window => click Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.remove('open');
      body.classList.remove('no-scroll');
    }
  });

  //  Close modal windows => click out modal window
  modalBox.addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  modal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
    body.classList.remove('no-scroll');
  });
}



function animOnScroll() {

  body = document.body;
  modal = document.querySelector('.modal');

  if (!modal.classList.contains('no-open-modal')) {
    if (window.scrollY >= 9400) {
      modal.classList.add('open');
      modal.classList.add('no-open-modal');
      body.classList.add('no-scroll');
      console.log( 'OPEN' );
    } else {
      modal.classList.remove('open');
    }
  }

}
