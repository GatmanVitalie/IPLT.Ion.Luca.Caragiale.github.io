
// window.addEventListener('scroll', function () {
//     const header = document.getElementById('Antet');
//     if (window.scrollY < 10) {
//         document.getElementById("backround_image_phone").style.display = "none";
//         document.getElementById("backround_image_desktop").style.display = "none";
//     }
//     else
//     {
//         document.getElementById("backround_image_desktop").style.display = "block";
//     }
// });




var screenWidthInCm = window.innerWidth / window.devicePixelRatio * 2.54 / 96;
let hamburgerButon = document.getElementById('HamburgerButton');

window.addEventListener('load', function () {

    resize();
   
    
});

function resize() {
    document.getElementById("backround_image_phone").style.display = "none";
    screenWidthInCm = window.innerWidth / document.getElementById('dpi').offsetWidth;
    //console.log('resize', screenWidthInCm);
    if (screenWidthInCm < 13) {
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
    console.log(window.innerWidth / document.getElementById('dpi').offsetWidth);
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