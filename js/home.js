// navbar script
const navbar = document.getElementById('navbar');

window.addEventListener('scroll',function(){
    let docElem = document.documentElement;
    let scrollPos = docElem.scrollTop;
    if(scrollPos > 20){
        navbar.classList.add('header--sticky');
    }else{
        navbar.classList.remove('header--sticky');
    }
});

// home slide script
const homeImage = document.getElementsByClassName('home__image');
const homeText = document.querySelectorAll('.home__image h2');
const homeTextSpan = document.querySelectorAll('.home__image p');
const homeButton = document.getElementsByClassName('home__button');
const homeDisplay = document.getElementsByClassName('home__dots__check')

const homeArrow = document.getElementsByClassName('home__arrow');
let timer = setInterval(()=>{ homeSlideIndex(1); }, 7000);
// the index value to calculate which slide the user is on
let currentIndex = 0;

// set 0 as default when DOM is loaded
homeSlideIndex(currentIndex);

homeArrow[0].addEventListener('click', ()=>{
    homeSlideIndex(currentIndex -= 1);
})

homeArrow[1].addEventListener('click', ()=>{
    homeSlideIndex(currentIndex += 1);
})

for(i = 0; i < homeDisplay.length; i++) {
    ((i)=>{
        homeDisplay[i].onclick = ()=>{
            homeSlideIndex(currentIndex = i);
        }    
    })(i);
}


function homeSlideIndex(n){
    currentIndex = n;
    
    homeSlideClear();

    homeSlideCalculate(currentIndex);

    homeSlideDisplay(currentIndex);
}

// a function to clear stored values
function homeSlideClear(){
    for(i=0; i<homeImage.length; i++){
        homeImage[i].style.order = homeImage.length;
        homeImage[i].classList.remove('fade');
        homeText[i].classList.remove('home__text--active');
        homeTextSpan[i].classList.remove('home__text--active');
        homeDisplay[i].classList.remove('home__dots__check--active');

        // not all slides have the button, so this prevents the error
        // selecting only if selected slide has the button class
        if(i<homeButton.length){
            homeButton[i].classList.remove('home__button--active');
        }
    }
}

// a function to check if currentIndex hits out of the range
function homeSlideCalculate(n){
    // when n = 3
    if(n > homeImage.length-1){
        n = 0;
    }
    // when n = -1
    else if(n < 0){
        n = homeImage.length-1;
    }
    currentIndex = n;
}

// a function to display current index slide
function homeSlideDisplay(n){
    // set current index slide order to 1
    homeImage[n].style.order = '1';
    homeImage[n].classList.add('fade');

    // text transform and opacity animation
    homeText[n].classList.add('home__text--active');
    homeTextSpan[n].classList.add('home__text--active');

    // give a color to current index dot
    homeDisplay[n].classList.add('home__dots__check--active');

    // index of 0 has no home__button--active class
    // prevents the error
    if(n!=0){
        homeButton[n-1].classList.add('home__button--active');
    }

    // move to next slide to add +1 on currentIndex in every 7 sec
    // this count will restart if the user gives the new input
    clearInterval(timer);
    timer = setInterval(function () { homeSlideIndex(currentIndex+1); }, 7000);
}