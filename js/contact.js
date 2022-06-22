// navbar script
const navbar = document.getElementById('navbar');

navbar.classList.add('header--sticky');

const emailSuccess = document.getElementsByClassName("success");
const emailError = document.getElementsByClassName("error");
const emailForm = document.getElementById('email__form');
document.getElementById("confirm").onclick = function()
    {
        emailSuccess[0].classList.remove("status--display");
        emailError[0].classList.remove("status--display");
    }   

function sendMail(params){
    var tempParams ={
        from_name:document.getElementById("firstName").value,
        to_name:document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    emailjs.send('service_knwby3s','template_p2qmm7d',tempParams)
    .then(function(res){
        if(res.status){
            emailSuccess[0].classList.add("status--display");
            // console.log("sucess",res.status);
            setTimeout(function() {
                emailSuccess[0].classList.remove('status--display');
            }, 3000);
            emailForm.reset();
        }else{
            emailError[0].classList.add("status--display");
            setTimeout(function() {
                emailError[0].classList.remove('status--display');
            }, 3000);
        }
        
        
    });
}

const checkMark = document.getElementsByClassName('fa-check');
weekdayCalculate();
function weekdayCalculate(){
    let d = new Date();
    let n = d.getDay();
    if(n == 0){
        checkMark[2].style.display = 'inline-block';
    }
    else if(n > 0 && n < 6){
        checkMark[0].style.display = 'inline-block';
    }
    else if(n==6){
        checkMark[1].style.display = 'inline-block';
    }

}