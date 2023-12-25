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

window.onload = function () {
    var x = document.getElementsByClassName("slide");
    x[0].classList.add("slidein");
    x[x.length - 1].classList.add("slideout");
    switchSlides();
    intervalID = setInterval(next, interval);

};



var imag = 0;
function back() {
    imag = imag - 1;
    switchSlides();
    resetInterval();
}

function next() {
    imag = imag + 1;
    switchSlides();
    resetInterval();
}

var cont = true;

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
        var x = document.getElementsByClassName("slide");
        if (imag < 0) {
            imag = x.length - 1;
        }
        else if (imag > x.length - 1) {
            imag = 0;
        }


        // for (i = 0; i < x.length; i++) {
        //     x[i].style.display = "flex";


        // }
        // x[imag].style.display = "flex";

        x[imag].classList.remove("slidein");
        x[imag].classList.add("slideout");
        
        if (imag == x.length - 1)
        {
            x[0].classList.add("slidein");
        }
        else
        {
            x[imag+1].classList.add("slidein");
        }
        if (imag == 0)
        {
            x[x.length-1].classList.remove("slideout");
        }
        else
        {
            x[imag-1].classList.remove("slideout");
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