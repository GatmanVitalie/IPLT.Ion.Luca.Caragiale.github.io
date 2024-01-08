
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
    //console.log('resize', screenWidthInCm);
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
    fitt();
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


const articles = document.querySelectorAll('.article');
function fitt() {
    articles.forEach(article => {
        const h2Element = article.querySelector('h2');
        const aElement = article.querySelector('.text_holder a');
        const textElement = article.querySelector('.text_holder');
        const h3Element = article.querySelector('h3');

        if (screenWidthInCm < 13) {
            // Apply styles for smaller screens
            article.style.width = "85vw";

            if (h2Element) {
                h2Element.style.fontSize = "5vw";
            }
             if (textElement) {
                textElement.style.height = "auto";
            }
             if (aElement) {
                aElement.style.fontSize = "3vw";
            }
            if (h3Element) {
                h3Element.style.fontSize = "2.5vw";
            }
        } else {
            // Apply styles for larger screens
            article.style.width = "11cm";

            if (h2Element) {
                h2Element.style.fontSize = "0.7cm";
            }
            if (textElement) {
                textElement.style.height = "auto";
            }
            if (aElement) {
                aElement.style.fontSize = "6mm";
            }
            if (h3Element) {
                h3Element.style.fontSize = "5mm";
            }
        }
    });
    // // document.getElementById("article").style.transform = "
}