
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

    screenWidthInCm = window.devicePixelRatio / window.innerWidth * 1000000 ;
    //console.log('resize', screenWidthInCm);
    if (window.innerWidth / document.getElementById('dpi').offsetWidth < 13) {
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
var titles = document.getElementsByClassName("title_show");
function fitt() {

    for (var i = 0; i < titles.length; i++) {

        if (screenWidthInCm < 13) {
            titles[i].style.fontSize = "10vw";
            titles[i].style.marginTop = "4vw";
            titles[i].style.marginBottom = "1vw";

        } else {
            titles[i].style.fontSize = "1.6cm";
            titles[i].style.marginTop = "2cm";
            titles[i].style.marginBottom = "1cm";
        }
    }

    if (screenWidthInCm < 13) {
        //    document.getElementById("backround_image_phone").style.display = "flex";
        //  document.getElementById("backround_image_desktop").style.display = "none";
        document.getElementById("stat_holder").style.flexDirection = "column";
        document.getElementById("stat_holder").style.height = "auto";
        document.getElementById("stat_holder").style.alignItems = "center";
        document.getElementById("statistici").style.height = "auto";
        var stat = document.getElementsByClassName("stat");
        for (var i = 0; i < stat.length; i++) {
            stat[i].style.width = "60vw";
            stat[i].style.height = "70vw";
        }

    } else {
        //document.getElementById("backround_image_phone").style.display = "none";
        //document.getElementById("backround_image_desktop").style.display = "flex";
        document.getElementById("stat_holder").style.flexDirection = "row";
        document.getElementById("stat_holder").style.height = "10cm";
        document.getElementById("statistici").style.height = "17cm";
        document.getElementById("stat_holder").style.alignItems = "flex-start";
        var stat = document.getElementsByClassName("stat");
        for (var i = 0; i < stat.length; i++) {
            stat[i].style.width = "3.5cm";
            stat[i].style.height = "4cm";

        }
    }



    articles.forEach(article => {
        const h2Element = article.querySelector('h2');
        const aElement = article.querySelector('.text_holder a');
        const textElement = article.querySelector('.text_holder');
        const h3Element = article.querySelector('h3');
        const buttonElement = article.querySelectorAll('.button_holder');
        const gapElement = article.querySelector('.button_holder');
        const imagElement = article.querySelector('.image_holder');

        if (screenWidthInCm < 13) {
            // Apply styles for smaller screens
            article.style.width = "85vw";

            if (h2Element) {
                h2Element.style.fontSize = "5.5vw";
                h2Element.style.textDecorationThickness = "0.64vw";
            }
            if (textElement) {
                textElement.style.height = "auto";
            }
            if (aElement) {
                aElement.style.fontSize = "4vw";
            }
            if (h3Element) {
                h3Element.style.fontSize = "3.5vw";
                h3Element.style.textDecorationThickness = "0.64vw";
            }
            if (gapElement) {
                gapElement.style.gap = "1.3vw";
            }
            if (imagElement) {
                imagElement.style.borderRadius = "3vw";
            }
            buttonElement.forEach(holder => {
                // Find all buttons within the current holder
                const buttons = holder.querySelectorAll('button');

                // Iterate through each button within the holder
                buttons.forEach(button => {
                    // alert("button");
                    button.style.height = '10vw';
                    button.style.width = '10vw';


                });
            });
        } else {
            // Apply styles for larger screens
            article.style.width = "11cm";

            if (h2Element) {
                h2Element.style.fontSize = "0.7cm";
                h2Element.style.textDecorationThickness = "0.8mm";
            }
            if (textElement) {
                textElement.style.height = "auto";
            }
            if (aElement) {
                aElement.style.fontSize = "6mm";
            }
            if (h3Element) {
                h3Element.style.fontSize = "5mm";
                h3Element.style.textDecorationThickness = "0.8mm";
            }
            if (gapElement) {
                gapElement.style.gap = "2mm";
            }
            if (imagElement) {
                imagElement.style.borderRadius = "5mm";
            }
            buttonElement.forEach(holder => {
                // Find all buttons within the current holder
                const buttons = holder.querySelectorAll('button');

                // Iterate through each button within the holder
                buttons.forEach(button => {
                    // alert("button");
                    button.style.height = '1.35cm';
                    button.style.width = '1.35cm';


                });
            });
        }
    });
    // // document.getElementById("article").style.transform = "
}