$(document).ready(function () {
    $("#flip").mouseover(function () {
        $("#flip").text("over");
        $("#flip").css({
            background: 'red'
        });

    });
    $("#flip").mouseleave(function () {
        $("#flip").text("kotak");
        $("#flip").css({
            background: 'aqua'
        });
    });
});