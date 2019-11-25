$(window).on('load', function(){
    $('.loader-wrapper').fadeOut("slow");
});

$(function(){
    $(".element").typed({
        strings: ["Hello!", "Ciao!", "Olá!", "Bonjour!", "Hello!"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        showCursor: false
    });
});

$(function () {
  $(document).scroll(function () {
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

$(document).ready(function (){
    $("#home-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#home").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#about-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#skills-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000);
    });
});

$(document).ready(function (){
    $("#contact-nav").click(function (){
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });
});