const inputfield = document.querySelector('.input-field textarea'),
todolist= document.querySelector('.todolist'),
pendingnum= document.querySelector('.pending-num',),
clearbutton= document.querySelector('.clear-button');

//console.log( inputfield,todolist,pendingnum,clearbutton)
inputfield.addEventListener('keyup',(e)=>{
    let inputval=inputfield.value.trim();
    

    if(e.key==='Enter' && inputval.length>0){
        console.log('valid');
    }
});
