$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("stiky");
           
        }else{
            $('.navbar').removeClass("stiky");
        }
        if(this.scrollY>20)
        {
            $('.scroll-down').addClass("van");
        }
        else{
            $('.scroll-down').removeClass("van");
        }
        if(this.scrollY>500){
            $('.scroll-up').addClass("show");
           
        }else{
            $('.scroll-up').removeClass("show");
           
        }
    });
   



    $('.scroll-up').click(function(){

        $('html').animate({scrollTop:0});
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });
});
//typing animation
var typed=new Typed(".typing",{
    strings:["WebDeveloper","Coding Ninja","IITian","Software Developer"],
    typeSpeed:100,
    backSpeed: 60,
    loop:true
});