const inputfield = document.querySelector('.input-field textarea'),
todolist= document.querySelector('.todolist'),
pendingnum= document.querySelector('.pending-num',),
clearbutton= document.querySelector('.clear-button');

//console.log( inputfield,todolist,pendingnum,clearbutton)
inputfield.addEventListener('keyup',(e)=>{
    let inputval=inputfield.value.trim();
    

    if(e.key==='Enter' && inputval.length>0){
        let litag= `<li class="list" onclick='handlestatus(this)'>
        <input type="checkbox">
        <span class="task">${inputval}</span>
        <i class='bx bx-trash'></i>
    </li>`;

    todolist.insertAdjacentHTML('beforeend',litag);
    inputfield.value='';
   
    }
});
function handlestatus(e){
    
}
