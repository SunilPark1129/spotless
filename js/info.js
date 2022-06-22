const infoButton = document.getElementsByClassName('info__button');
const infoImageBox = document.getElementsByClassName('info__image-box');
const infoTextBox = document.getElementsByClassName('info__text-box');
const infoButtonTextSeeMore = document.getElementsByClassName('info__button-text--seemore');
const infoButtonTextClose = document.getElementsByClassName('info__button-text--close');
const infoItemText = document.getElementsByClassName('info__outside-text');

infoClick(0);

for(i = 0; i < infoButton.length; i++) {
    ((i)=>{
        infoButton[i].onclick = ()=>{
            infoButton[i].classList.toggle('info__button--active');
            infoImageBox[i].classList.toggle('info__image-box--active');
            infoTextBox[i].classList.toggle('info__text-box--active');
            infoItemText[i].classList.toggle('info__display--active');
            infoButtonTextSeeMore[i].classList.toggle('info__display--none');
            infoButtonTextClose[i].classList.toggle('info__display--active');  
        }    
    })(i);
}

// info section script starts
function infoClick(n){
    infoButton[n].classList.toggle('info__button--active');
    infoImageBox[n].classList.toggle('info__image-box--active');
    infoTextBox[n].classList.toggle('info__text-box--active');
    infoItemText[n].classList.toggle('info__display--active');
    infoButtonTextSeeMore[n].classList.toggle('info__display--none');
    infoButtonTextClose[n].classList.toggle('info__display--active');  
}