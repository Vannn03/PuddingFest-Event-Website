$(document).ready(function () {
    $("#nav-logo").click(function (e) { 
        e.preventDefault();
        window.location.href = "../landing-page/index.html";
    });
    $("#back-to-event").click(function (e) { 
        e.preventDefault();
        window.location.href = "../event-page/event.html";
    });
});