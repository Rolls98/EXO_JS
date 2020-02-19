(function () {
    var bar = document.querySelector(".bar");
    window.onscroll = function () {
        var html = document.documentElement;
        var max = html.scrollHeight - html.clientHeight;
        var height = (window.scrollY / max)*100;
    
        bar.style.width = height + "%";
    };

    

})();