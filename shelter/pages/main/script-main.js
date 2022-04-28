'use strict';

const petData = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/pets/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/pets/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/pets/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/pets/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/pets/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/pets/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/pets/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/pets/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];


const  burgerMenu = document.querySelector('.burger'),
       navMenu = document.querySelector('.header__navigation-menu'),
       namePets = document.querySelectorAll('.pets-name'),
       petCard = document.querySelectorAll('.pet_card'),
       popup = document.querySelector('.popup'),
       popupButton = document.querySelector('.popup_button'),
       navButtons = document.querySelectorAll('.nav_bottons'),
       navConteiner = document.querySelector('.nav-conteiner');

    // Burger

    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('burger_act');
        navMenu.classList.toggle('active_nav');
        navConteiner.classList.toggle('active_nav');
        document.body.classList.toggle('_lock');
    });

    navConteiner.addEventListener('click', (e) => {
      if (e.target === navConteiner || e.target === e.target.closest('.nav_bottons')) {
        burgerMenu.classList.remove('burger_act');
        navMenu.classList.remove('active_nav');
        document.body.classList.remove('_lock');
        navConteiner.classList.remove('active_nav');
      };
    });



    // modal

    petCard.forEach(btn => {
        btn.addEventListener('click', (event) => {
            let target = event.target.closest('.pet_card').querySelector('.pets-name');
            let petname = target.innerHTML;
            searchDataPet(petname); 
            document.body.classList.toggle('_lock');
            popup.classList.toggle('popup_hide');
        });
    });

    popupButton.addEventListener('click', () =>{
        popup.classList.toggle('popup_hide');
        document.body.classList.toggle('_lock');
    });
    
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.toggle('popup_hide');
        document.body.classList.toggle('_lock');
      };
    });




const petIMG = document.querySelector('.pet_img'),
      petsName = document.querySelector('.name_pet'),
      petsTypeBreed = document.querySelector('.type_breed'),
      petsDescription = document.querySelector('.descritpion'),
      petsAge = document.querySelector('.age'),
      petsInoculations = document.querySelector('.inoculations'),
      petsDiseases = document.querySelector('.diseases'),
      petsParasites = document.querySelector('.parasites');

      function catCard(obj) {
          if (obj.name) {
            petIMG.src = obj.img;
            petsName.textContent = obj.name;
            petsTypeBreed.textContent = `${obj.type} - ${obj.breed}`;
            petsDescription.textContent = obj.description;
            petsAge.innerHTML = `<b>Age:</b> ${obj.age}`;
            petsInoculations.innerHTML = `<b>Inoculations:</b> ${obj.inoculations}`;
            petsDiseases.innerHTML =`<b>Diseases:</b> ${obj.diseases}`;
            petsParasites.innerHTML = `<b>Parasites:</b> ${obj.parasites}`;

          };
      };

function searchDataPet(name) {
       petData.forEach((item, index, array) =>{
    if(item.name == name) {
        catCard(item);
    }
});
};

// Carusel

const btnLeft = document.querySelectorAll('.btn-left'),
      petCardConteiner = document.querySelector('.pets_card-conteiner')
      btnRight = document.querySelectorAll('.btn-right');



      btnLeft.forEach(btn =>{
        btn.addEventListener('click', () => {

        });
      });

      btnRight.forEach(btn =>{
        btn.addEventListener('click', () => {

        });
      });