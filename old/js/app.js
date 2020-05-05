// loading screen fadeout
$(window).on('load', function(){
    $('.loader-wrapper').fadeOut("slow");
});

// splash screen typedjs
$(function(){
    $(".element").typed({
        strings: ["Hello!", "Ciao!", "Olá!", "Bonjour!", "Hello!"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: false,
        showCursor: false
    });
});

// navbar colour change and pin-to-top
$(function () {
  $(document).scroll(function () {
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

// navbar scrolls
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

// <div id="ev-button" class="button">Euclidean Vector</div>
// 				<div id="discord-button" class="button">Wikia Discord Chat Bot</div>
// 				<div id="portfolio-button" class="button">Portfolio</div>
// 				<div id="hopebox-button" class="button">hopebox</div>
// modal animation 
$('#ev-button').click(function() {
    // access id of button
    // add the class of the button (one) to the modal container to make it show up
    $('#modal-container').removeAttr('class').addClass('modal-button');
    // add
    // $('body').append('discord-modal');
});

$('#discord-button').click(function() {
    // access id of button
    // add the class of the button (one) to the modal container to make it show up
    $('#modal-container2').removeAttr('class').addClass('modal-button');
    // add
    // $('body').append('discord-modal');
});

$('#portfolio-button').click(function() {
    // access id of button
    // add the class of the button (one) to the modal container to make it show up
    $('#modal-container3').removeAttr('class').addClass('modal-button');
    // add
    // $('body').append('discord-modal');
});

$('#hopebox-button').click(function() {
    // access id of button
    // add the class of the button (one) to the modal container to make it show up
    $('#modal-container4').removeAttr('class').addClass('modal-button');
    // add
    // $('body').append('discord-modal');
});


$('#modal-container').click(function() {    
    $(this).addClass('out');
});
$('#modal-container2').click(function() {    
    $(this).addClass('out');
});
$('#modal-container3').click(function() {    
    $(this).addClass('out');
});
$('#modal-container4').click(function() {    
    $(this).addClass('out');
});
