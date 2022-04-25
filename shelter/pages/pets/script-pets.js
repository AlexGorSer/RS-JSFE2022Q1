'use strict';
const  burgerMenu = document.querySelector('.burger'),
       navMenu = document.querySelector('.header_nav_menu');


    burgerMenu.addEventListener('click', () => {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('burger_act');
        navMenu.classList.toggle('active_nav');
    });

    navMenu.addEventListener('click', () => {
        if (navMenu.classList.contains('active_nav')) {
            burgerMenu.classList.remove('burger_act');
            navMenu.classList.remove('active_nav');
            document.body.classList.remove('_lock');
        }
    });