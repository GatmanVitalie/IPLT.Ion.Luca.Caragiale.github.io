window.addEventListener('scroll', function () {
    const header = document.getElementById('Antet');
    if (window.scrollY > 40) {
        header.style.height = 3 + 'cm';
        header.style.backgroundColor = '#000'; // Change background color
        header.style.color = '#fff'; // Change text color
        // Add any other style changes you want for the scrolled state
    } else {
        header.style.backgroundColor = '#FFFAFA'; // Default background color
        header.style.color = '#333'; // Default text color
        // Reset any other styles you changed
    }
});


let intervalID;
var interval = 7000;
var x = document.getElementsByClassName("slide");
let SliderA = new Array(x.length);

window.onload = function () {
    for (var i = 0; i < x.length; i++) {
        SliderA[i] = 0;
        x[i].style.display = "none";
    }
    
    switchSlides();
    intervalID = setInterval(next, interval);

};

var cont = true;

var imag = 0;
function back() {
    imag = imag - 1;

    if (cont) {
        if (imag < 0) {
            imag = x.length - 1;
        }

        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("slidein");
            x[i].classList.remove("slideout");
            x[i].style.display = "flex";
            SliderA[i] = 0;
        }

        x[imag].classList.add("slidein");
        x[0].style.transitionDuration = '2s';
        if (imag == x.length-1) {
           x[0].style.transitionDuration = '2s';
          

        } else {
            x[imag + 1].style.transitionDuration = '2s';
        }

        if (imag == 0) {
            x[x.length - 1].classList.add("slideout");
            x[x.length - 1].style.transitionDuration = '2s';
        } else {
            x[imag - 1].classList.add("slideout");
            x[imag - 1].style.transitionDuration = '2s';
        }



        // for (let i = 0; i < x.length; i++) {
        //     if (SliderA[i] == 0)
        //     {
        //         x[i].style.display = "none";
        //     }
        // }
    }
    resetInterval();
}

function next() {

    // imag = imag + 1;
    // switchSlides();
    // resetInterval();

}



function resetInterval() {
    clearInterval(intervalID);
    intervalID = setInterval(next, interval);
}

function stopSlides() {

    cont = false;
}

function beginSlides() {
    cont = true;
    resetInterval();
}


function switchSlides() {
    if (cont) {
        if (imag < 0) {
            imag = x.length - 1;
        }
        else if (imag > x.length - 1) {
            imag = 0;
        }

        for (var i = 0; i < x.length; i++) {
            SliderA[i] = 0;
            x[i].style.display = "none";
            x[i].classList.remove("slidein");
            x[i].classList.remove("slideout");
        }
        x[imag].classList.add("slidein");
        x[imag].style.display = "flex";

        if (imag == 0) {
            x[x.length - 1].classList.add("slideout");
            x[x.length - 1].style.display = "flex";
        }
        else {
            x[imag - 1].classList.add("slideout");
            x[imag - 1].style.display = "flex";
        }

    }
}


function More1() {
    var button = document.getElementById("MoreB");
    button.classList.add("clicked"); // Adds the 'clicked' class to change the color

    setTimeout(More1a, 1000);
    // Perform your desired onClick function here

}

function More1a() {
    // For example, you can add code to alert a message
    alert("Button clicked!");
}