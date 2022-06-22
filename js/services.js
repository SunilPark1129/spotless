const navbar = document.getElementById('navbar');

navbar.classList.add('header--sticky');

const serviceBox = document.getElementsByClassName('service__item');
const serviceContent = document.getElementsByClassName('service__content');
const serviceBoxH2 = document.querySelectorAll('.service__item h2');
const serviceBoxText = document.querySelectorAll('.service__item p');
let prevIndexValue;
let prevOrderValue;
isFirst = true;

serviceMain(0);

function serviceMain(n){
    serviceClear(n);
    serviceOrder(n);
    serviceDisplay(n);
}

for(i = 0; i < serviceBox.length; i++) {
    ((i)=>{
        serviceBox[i].onclick = ()=>{
            serviceMain(i);
        }
    })(i);
}

function serviceClear(n){
    for(i=0; i<serviceBox.length; i++){
        if(n==i){
            continue;
        }
        serviceBox[i].classList.remove('service__item-active');
        serviceBox[i].classList.remove('service__item-not-active');
        serviceBox[i].classList.remove('service__item-radius-top');
        serviceBox[i].classList.remove('service__item-radius-bottom');
        serviceBoxText[i].style.display = 'none';
        serviceBoxH2[i].style.display = 'none';
    }
}

function serviceOrder(n){
        if(isFirst == true){
            for(i=0; i<serviceBox.length; i++){
                serviceBox[i].style.order = i+1;
            }
            isFirst = false;
        }
        serviceBox[n].classList.toggle('service__item-active');
        prevOrderValue = serviceBox[n].style.order;
}

// service script starts
function serviceDisplay(n){
    if(serviceBox[n].classList.contains('service__item-active')){
        serviceBoxText[n].style.display = 'block';
        serviceBoxH2[n].style.display = 'block';
        serviceBox[n].style.order = '0';
        if(prevIndexValue!=null){
            serviceBox[prevIndexValue].classList.add('color-change');
            serviceBox[prevIndexValue].style.order = prevOrderValue;
        }
        for(i=0; i<serviceBox.length; i++){
            if(serviceBox[i].style.order==2){
                serviceBox[i].classList.add('service__item-radius-top');            
            }
            if(serviceBox[i].style.order==serviceBox.length){
                serviceBox[i].classList.add('service__item-radius-bottom');
            }
                serviceBox[n].classList.remove('service__item-radius-top');
                serviceBox[n].classList.remove('service__item-radius-bottom');
        }
    }else{
        serviceBoxText[n].style.display = 'none';
        serviceBoxH2[n].style.display = 'none';
        serviceBox[n].classList.add('color-change');
        for(i=0; i<serviceBox.length; i++){
            serviceBox[i].classList.add('service__item-not-active');
            serviceBox[i].classList.remove('service__item-radius-top');
            serviceBox[i].classList.remove('service__item-radius-bottom');
        }
    }
    prevIndexValue = n;
}