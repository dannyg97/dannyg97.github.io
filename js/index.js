$(document).ready(function() {

    $("#home-button").click(function () {
        if ($("#home").hasClass("active")) {
            // Do nothing 
        } else {
            $(".wrapper").find(".active").slideToggle("slow");
            $(".wrapper").find(".active").toggleClass("active inactive");
            sleep(600).then(() => {
                $("#home").toggleClass("active inactive");
                $("#home").slideToggle("slow");
            })
        }
    });
    
    $("#about-button").click(function () {
        if ($("#about").hasClass("active")) {
            // Do nothing 
        } else {
            $(".wrapper").find(".active").slideToggle("slow");
            $(".wrapper").find(".active").toggleClass("active inactive");
            sleep(600).then(() => {
                $("#about").toggleClass("active inactive");
                $("#about").slideToggle("slow");
            })
        }
    });
    
    $("#skills-button").click(function () {
        if ($("#skills").hasClass("active")) {
            // Do nothing 
        } else {
            $(".wrapper").find(".active").slideToggle("slow");
            $(".wrapper").find(".active").toggleClass("active inactive");
            sleep(600).then(() => {
                $("#skills").toggleClass("active inactive");
                $("#skills").slideToggle("slow");
            })
        }
    });
    
    $("#projects-button").click(function () {
        if ($("#projects").hasClass("active")) {
            // Do nothing
        } else {
            $(".wrapper").find(".active").slideToggle("slow");
            $(".wrapper").find(".active").toggleClass("active inactive");
            sleep(600).then(() => {
                $("#projects").toggleClass("active inactive");
                $("#projects").slideToggle("slow");
            })
        }
    });
    
    $("#contact-button").click(function () {
        if ($("#contact").hasClass("active")) {
            // Do nothing 
        } else {
            $(".wrapper").find(".active").slideToggle("slow");
            $(".wrapper").find(".active").toggleClass("active inactive");
            sleep(600).then(() => {
                $("#contact").toggleClass("active inactive");
                $("#contact").slideToggle("slow");
            })
        }
    });
    
});

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
