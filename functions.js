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

var imag = 1;
function back()
{
    imag = imag - 1;
    if (imag < 1)
    {
        imag = 3;
    }
    swich();
}

function next()
{
    imag = imag + 1;
    
    if (imag > 3)
    {
        imag = 1;
    }
    swich();
}

function swich()
{
    alert(imag);
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