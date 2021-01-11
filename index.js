var timeFade = 1750;

$(document).ready(function() {
    $("h1.presentation").hide().fadeIn(timeFade).fadeOut(timeFade, complete);
});

function complete() {
    $("h1.presentation").text("Welcome to my Website!").fadeIn(timeFade);
}