const form = document.querySelector('form'),
emailfield=form.querySelector('.email-field'),
emailinput=emailfield.querySelector('.email'),
passfield=form.querySelector('.create-password'),
passinput=form.querySelector('.password'),
cpassfield=form.querySelector('.cpassword-field'),
cpassinput=form.querySelector('.cpassword');

//email check
function checkemail() {
    const pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailinput.value.match(pattern)){
        return emailfield.classList.add('invalid');
    }
    emailfield.classList.remove('invalid');
}

form.addEventListener('submit',(e) =>{
    e.preventDefault(); //prevent submit
    checkemail();
});
