$(document).ready(function () {
    $("#nav-logo").click(function (e) { 
        e.preventDefault();
        window.location.href = "index.html";
    });
    $("#get-started").click(function (e) { 
        e.preventDefault();
        window.location.href = "../event-page/event.html";
    });
});