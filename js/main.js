$(document).ready(function(){

    /*---註冊的彈窗---*/
    $(".register-door-open").click(function(){
        $(".register-popup").addClass("popup-open");
        $(".body-popup-bg").addClass("popup-open");
    });
    $(".register-popup .close-simple-user-door").click(function(){
        $(".body-popup-bg").removeClass("popup-open");
        $(".register-popup").removeClass("popup-open");
    });

    /*---登入的彈窗---*/
    $(".login-door-open").click(function(){
        $(".login-popup").addClass("popup-open");
        $(".body-popup-bg").addClass("popup-open");
    });
    $(".login-popup .close-simple-user-door").click(function(){
        $(".body-popup-bg").removeClass("popup-open");
        $(".login-popup").removeClass("popup-open");
    });

    /*go-top*/
    $(".gotop").click(function(){ 
        $("html,body").animate({scrollTop:$("body").offset().top}, 500);
    });  

});