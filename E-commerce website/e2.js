const wrapper=document.querySelector('.sliderwrapper'),
menuitems=document.querySelectorAll('.menuitem');

menuitems.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        wrapper.style.transform= `translateX(${-100*index}vw)`;
    });
    
});