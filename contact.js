$(document).ready(function () {
    $("#nav-logo").click(function (e) { 
        e.preventDefault();
        window.location.href = "index.html";
    });
    $("#back-to-event").click(function (e) { 
        e.preventDefault();
        window.location.href = "event.html";
    });
});