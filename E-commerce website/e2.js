const wrapper=document.querySelector('.sliderwrapper'),
menuitems=document.querySelectorAll('.menuitem');

const products = [
    {
        id:1,
        title:"Air Force",
        price:119,
        colors:[
            {
                code:'sandel',
                img:'./img/air1.png',
            },
            {
                code:'black',
                img:'./img/air2.png',
            },
        ],

    },
    {
        id:2,
        title:"JORDAN",
        price:156,
        colors:[
            {
                code:'red',
                img:'./img/jordan.png',
            },
            {
                code:'black',
                img:'./img/jordan2.png',
            },
        ],

    },
    {
        id:3,
        title:"COURT VISION",
        price:512,
        colors:[
            {
                code:'black',
                img:'./img/courtvision.png',
            },
            {
                code:'blue',
                img:'./img/courtvision2.png',
            },
        ],

    },
    {
        id:4,
        title:"CRATER",
        price:300,
        colors:[
            {
                code:'black',
                img:'./img/crater.png',
            },
            {
                code:'white',
                img:'./img/crater2.png',
            },
        ],

    },
    {
        id:5,
        title:"HIPPE",
        price:350,
        colors:[
            {
                code:'grey',
                img:'./img/hippe.png',
            },
            {
                code:'black',
                img:'./img/hippe2.png',
            },
        ],

    },
    
];

let choosenproduct = products[0]

const currentproductimg = document.querySelector('.productimg');
const currentproducttitle = document.querySelector('.producttitle');
const currentproductprice = document.querySelector('.productprice');
const currentproductcolors = document.querySelectorAll('.color');
const currentproductsizes = document.querySelectorAll('.size');



menuitems.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        //change the current slide
        wrapper.style.transform= `translateX(${-100*index}vw)`;

        //change the choosen product
        choosenproduct=products[index];

        //change texts of currentproduct
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = '$' + choosenproduct.price;
        currentproductimg.src = choosenproduct.colors[0].img;

        //assign new colors
        currentproductcolors.forEach((color,index) => {
            color.style.backgroundColor = choosenproduct.colors[index].code;
        });
    });
    
});

currentproductcolors.forEach((color,index) =>{
    color.addEventListener('click',() => {
        currentproductimg.src = choosenproduct.colors[index].img;

    });
});

currentproductsizes.forEach((size,index)=>{
    size.addEventListener('click',()=>{
        currentproductsizes.forEach((size)=>{
            size.style.backgroundColor='white'
            size.style.color='black'
        });
        size.style.backgroundColor='black'
        size.style.color='white'
    });
});

const productbutton= document.querySelector('.productbutton');
const payment= document.querySelector('.payment');
const close= document.querySelector('.close');

productbutton.addEventListener('click',() =>{
    payment.style.display='flex'
})
close.addEventListener('click',() =>{
    payment.style.display='none'
})

/*const productbutton= document.querySelector('.productbutton');
const payment= document.querySelector('.payment');
const close= document.querySelector('.close');

productbutton.addEventListener('click',() =>{
    payment.style.display='flex'
})
close.addEventListener('click',() =>{
    payment.style.display='none'
})
*/