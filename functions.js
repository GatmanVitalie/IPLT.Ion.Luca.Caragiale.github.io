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



function changeLanguage(lang) {
    if (lang === 'en') {
        document.getElementById('title-en').style.display = 'block';
        document.getElementById('title-es').style.display = 'none';
        document.getElementById('content-en').style.display = 'block';
        document.getElementById('content-es').style.display = 'none';
    } else if (lang === 'es') {
        document.getElementById('title-en').style.display = 'none';
        document.getElementById('title-es').style.display = 'block';
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('content-es').style.display = 'block';
    }

}