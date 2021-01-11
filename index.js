$(document).ready(function() {
    function complete() {
        $("#title h1").text("Welcome to my Website").fadeIn(3000);
    }
    $("#title h1").hide().fadeIn(3000).fadeOut(3000, complete);
});

    