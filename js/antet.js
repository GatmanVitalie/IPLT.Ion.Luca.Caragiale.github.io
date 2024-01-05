
// window.addEventListener('scroll', function () {
//     const header = document.getElementById('Antet');
//     if (window.scrollY > 40) {
//         header.style.height = 3 + 'cm';
//         header.style.backgroundColor = '#000'; // Change background color
//         header.style.color = '#fff'; // Change text color
//         // Add any other style changes you want for the scrolled state
//     } else {
//         header.style.backgroundColor = '#FFFAFA'; // Default background color
//         header.style.color = '#333'; // Default text color
//         // Reset any other styles you changed
//     }
// });




var screenWidthInCm = window.innerWidth / window.devicePixelRatio * 2.54 / 96;
let hamburgerButon = document.getElementById('HamburgerButton'); // Changed to getElementById

window.addEventListener('load', function () {
    resize();
});

function resize() {

    screenWidthInCm = window.innerWidth / window.devicePixelRatio * 2.54 / 96;
    if (screenWidthInCm < 1300 / window.devicePixelRatio * 2.54 / 96) {
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


