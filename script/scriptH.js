(function(){
    var heure = document.querySelectorAll(".heure div");
    var p= document.querySelectorAll(".heure div p");
    var audio = new Audio("0007.wav");
    audio.loop = true;
    // audio.play();
    var rotate = -30;
    var reverseRotate = 30;
    heure.forEach(function(h){
        rotate +=30;
        h.style.transform="rotate("+rotate+"deg)";
    });

    p.forEach(function (h) {
        reverseRotate -= 30;
        h.style.transform = "rotate(" + reverseRotate + "deg)";
    });

    window.onload = horloge();

    setInterval(horloge,1000);

    function horloge() {
        var h = document.querySelector("#heure");
        var m = document.querySelector("#minute");
        var s = document.querySelector("#second");

        var date = new Date();
        var dh = date.getHours();
        var dm = date.getMinutes();
        var ds = date.getSeconds();
        var rotates = (ds * 360) / 60;
        var rotatem = (dm * 360) / 60;
        var rotateh = (dh * 360) / 12;
        s.style.transform = "rotate(" + rotates + "deg)";
        m.style.transform = "rotate(" + rotatem + "deg)";
        h.style.transform = "rotate(" + rotateh + "deg)";
        
    }
})();