let menuBtn = document.querySelector('.header__menu-burger');
let closeBtn = document.querySelector('.header__close');
let navbar = document.querySelector('.header__navbar');
const navbarBackground = document.querySelector('.header__background');

menuBtn.onclick = function(){
    navbar.classList.toggle('active');
    navbarBackground.style.display = 'grid';
};

closeBtn.onclick = function(){
    navbar.classList.remove('active');
    navbarBackground.style.display = 'none';
};

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    grabCursor: false,
    loop: true,
    navigation: {
      nextEl: ".hero__button--right",
      prevEl: ".hero__button--left",
    },
});

