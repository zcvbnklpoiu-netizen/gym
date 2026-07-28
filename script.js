// ===============================
// Mobile Menu Toggle
// ===============================

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');


if(menuIcon && navbar){

    menuIcon.addEventListener('click', () => {

        navbar.classList.toggle('active');

        menuIcon.classList.toggle('bx-x');

    });


    // Close menu when clicking a link

    document.querySelectorAll('.navbar a').forEach(link => {

        link.addEventListener('click', () => {

            navbar.classList.remove('active');

            menuIcon.classList.remove('bx-x');

        });

    });

}



// ===============================
// Typing Effect
// ===============================

const textElement = document.querySelector('.multiple-text');


if(textElement){

    const phrases = [
        'Stronger Every Day',
        'Faster Than Ever',
        'Unstoppable Power',
        'Peak Performance'
    ];


    let phraseIndex = 0;

    let charIndex = 0;

    let isDeleting = false;



    function typeEffect(){

        const current = phrases[phraseIndex];


        textElement.textContent =
        current.substring(0, charIndex);



        if(!isDeleting && charIndex < current.length){

            charIndex++;

            setTimeout(typeEffect,80);

        }


        else if(isDeleting && charIndex > 0){

            charIndex--;

            setTimeout(typeEffect,40);

        }


        else{

            isDeleting = !isDeleting;


            if(!isDeleting){

                phraseIndex =
                (phraseIndex + 1) % phrases.length;

            }


            setTimeout(typeEffect,1200);

        }

    }


    typeEffect();

}let counter = 0;

const loaderNumber = document.querySelector(".loader-number");
const loader = document.querySelector(".loader");


let loading = setInterval(()=>{

    counter++;

    loaderNumber.textContent = counter + "%";


    if(counter === 100){

        clearInterval(loading);

        loader.style.opacity = "0";


        setTimeout(()=>{

            loader.style.display = "none";

        },500);

    }


},30);