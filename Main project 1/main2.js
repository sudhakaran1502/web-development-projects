$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addclass('sticky');
        }else{
            $('.navbar').removeclass('sticky');
        }
    });
    //toogle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
    });
    
});