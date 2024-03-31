$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scroll>20){
            $('.navbar').addclass('sticky');
        }else{
            $('.navbar').removeclass('sticky');
        }
    })
    
});