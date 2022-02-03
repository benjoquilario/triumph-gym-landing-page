const btnMenu = document.querySelector('.btn--menu');
const body = document.querySelector('body');
const headerMenu = document.querySelector('.header__menu');
const result = document.querySelector('.results');
const formCta = document.querySelector('.cta__form');

const menuShow = () => {
   if (headerMenu.classList.contains('menu-active')) {
      headerMenu.classList.remove('menu-active');
      document.body.classList.remove('no-scroll');
      btnMenu.setAttribute('aria-expanded', false);
   } else {
      headerMenu.classList.add('menu-active');
      document.body.classList.add('no-scroll');
      btnMenu.setAttribute('aria-expanded', true);
   }
};

console.log(formCta);

btnMenu.addEventListener('click', menuShow);
formCta.addEventListener('submit', function (e) {
   e.preventDefault();
   const email = document.querySelector('#email');
   let re = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

   if (re.test(email.value)) {
      result.textContent = 'Email Succesfully submitted';
      email.value = '';
   } else {
      result.textContent = 'Invalid Email';
   }

   result.classList.toggle('showForm');
});
