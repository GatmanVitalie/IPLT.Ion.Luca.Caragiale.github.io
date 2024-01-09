var Antet_WIdth = 17;
var Phone_Width = 13;



var screenWidthInCm = window.innerWidth / window.devicePixelRatio * 2.54 / 96;
let hamburgerButon = document.getElementById('HamburgerButton'); // Changed to getElementById

window.addEventListener('load', function () {
    resize();
});

function resize() {

    screenWidthInCm = window.innerWidth / window.devicePixelRatio * 2.54 / 96;
    console.log('resize', screenWidthInCm);
    if (screenWidthInCm < 17) {
        hamburgerButon.style.display = "block";
        document.getElementById('contcatns_container').style.display = "flex";
        document.getElementById('burger_butons').style.display = "flex";
        document.getElementById('dreapta').style.display = "none";
    } else {
        hamburgerButon.style.display = "none";
        document.getElementById('contcatns_container').style.display = "none";
        document.getElementById('burger_butons').style.display = "none";
        document.getElementById('dreapta').style.display = "flex";
    }
    //alert(27 / window.devicePixelRatio * 2.54 / 96);
   // fitt();
}

window.onload = function () {
    resize();
};


window.addEventListener("resize", function () {
    resize();
});

var burger_butons = document.getElementById("burger_butons");
function togle(lines) {
    lines.classList.toggle("change");
    burger_butons.classList.toggle("burger_butons");
}