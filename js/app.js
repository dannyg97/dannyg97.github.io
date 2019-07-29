$(function(){
    $(".element").typed({
        strings: ["Hello!", "你好!", "Ciao!", "Olá!", "Bonjour!", "こんにちは!", "Hello!"],
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