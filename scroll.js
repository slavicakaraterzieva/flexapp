
$(function() {

    //change the classes
    var btn = $(".scroll__hide");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 1000) {
            btn.removeClass('scroll__hide').addClass("show");
        } else {

            if(scroll < 1000){
                btn.removeClass("show").addClass('scroll__hide');
            }
            
        }

    });

//scroll to top
    $("button").click(function() {
       // alert("scroll script is working");
        $('html,body').animate({
            scrollTop: $(".header-profile").offset().top},
            'slow');
    });

});
//end of scroll function


//toggle link flexapp header a class=user_name span nik

$(document).ready(function(){
    // alert("working")
  $(".user-name").click(function(){
    $(".nav_user-link").toggle();
  })
});