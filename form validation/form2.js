const form = document.querySelector('form'),
emailfield=form.querySelector('.email-field'),
emailinput=emailfield.querySelector('.email'),
passfield=form.querySelector('.create-password'),
passinput=form.querySelector('.password'),
cpassfield=form.querySelector('.cpassword-field'),
cpassinput=form.querySelector('.cpassword');
button=form.querySelector('.button');

//email check
function checkemail() {
    const pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailinput.value.match(pattern)){
        return emailfield.classList.add('invalid');
    }
    emailfield.classList.remove('invalid');
}

const eyeicon=document.querySelectorAll('.show-hide');

eyeicon.forEach((eyeicon) => {
    eyeicon.addEventListener('click',() => {
        const pinput=eyeicon.parentElement.querySelector('input');
        if (pinput.type==='password'){
            eyeicon.classList.replace('bx-hide','bx-show');
            return (pinput.type='text');
        }
        eyeicon.classList.replace('bx-show','bx-hide')
        return (pinput.type='password')
     });
});

//cpass confirm
function checkpass(){
    if(passinput.value !== cpassinput.value || cpassinput.value===''){
        return cpassfield.classList.add('invalid');
    }
    cpassfield.classList.remove('invalid');
}

//pass validation
function createpass(){
    const passpatern=  /^[A-Za-z]\w{7,14}$/;
    if(!passinput.value.match(passpatern)){
      return passfield.classList.add('invalid');

    }
    passfield.classList.remove('invalid');
}
/*function clickbtn(){
    if(classList.remove('invalid')){
        alert('sucessfully registered')
    }

}*/



//calling function on form submit
form.addEventListener('submit',(e) =>{
    e.preventDefault(); //prevent submit
    checkemail();
    createpass();
    checkpass();
    clickbtn();

    //calling function on key up
    emailinput.addEventListener('keyup', checkemail);
    passinput.addEventListener('keyup',createpass);
    cpassinput.addEventListener('keyup',checkpass);
    button.addEventListener('click',clickbtn);

    if(
        !emailfield.classList.contains('invalid') &&
        !passfield.classList.contains('invalid') &&
        !cpassfield.classList.contains('invalid')

    ){
        location.href=form.getAttribute("action");
    }
});
