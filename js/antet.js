
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



function resize() {

    screenWidthInCm = window.innerWidth / document.getElementById('dpi').offsetWidth;
    //console.log('resize', screenWidthInCm);
    if (screenWidthInCm < 14) {
        hamburgerButon.style.display = "block";
        document.getElementById('contcatns_container').style.display = "flex";
        document.getElementById('dreapta').style.display = "none";
        document.getElementById('Antet_Imob').style.alignItems = "center";
        
    } else {
        hamburgerButon.style.display = "none";
        document.getElementById('contcatns_container').style.display = "none";
        document.getElementById('mobileNav').style.display = "none";
        document.getElementById('dreapta').style.display = "flex";
        document.getElementById('Antet_Imob').style.alignItems = "flex-end";
    }
    console.log(window.innerWidth / document.getElementById('dpi').offsetWidth);
}

function arange() {

    document.getElementById('admitere_butons').style.left = document.getElementById('admitere_button').getBoundingClientRect().left + 'px';
    document.getElementById('admitere_butons').style.top = document.getElementById('admitere_button').getBoundingClientRect().bottom - 1 + 'px';
    document.getElementById('admitere_butons').style.width = document.getElementById('admitere_button').getBoundingClientRect().width + 'px';

    document.getElementById('elevi_butons').style.left = document.getElementById('elevi_buton').getBoundingClientRect().left + 'px';
    document.getElementById('elevi_butons').style.top = document.getElementById('elevi_buton').getBoundingClientRect().bottom - 1 + 'px';
    document.getElementById('elevi_butons').style.width = document.getElementById('elevi_buton').getBoundingClientRect().width + 'px';

    document.getElementById('desrpe_butons').style.left = document.getElementById('despre_buton').getBoundingClientRect().left + 'px';
    document.getElementById('desrpe_butons').style.top = document.getElementById('despre_buton').getBoundingClientRect().bottom - 1 + 'px';
    document.getElementById('desrpe_butons').style.width = document.getElementById('despre_buton').getBoundingClientRect().width + 'px';

}


// Admitere //
function activate_admitere() {
    document.getElementById('admitere_butons').classList.add('active');
}
function deactivate_admitere() {
    document.getElementById('admitere_butons').classList.remove('active');
}
function toggle_active_admitere() {
    document.getElementById('admitere_butons').classList.toggle('active');
}

// Elevi //
function activate_elevi() {

    document.getElementById('elevi_butons').classList.add('active');
}

function deactivate_elevi() {
    document.getElementById('elevi_butons').classList.remove('active');
}

function toggle_active_elevi() {
    document.getElementById('elevi_butons').classList.toggle('active');
}

// Despre //
function activate_despre() {
    document.getElementById('desrpe_butons').classList.add('active');
}
function deactivate_despre() {
    document.getElementById('desrpe_butons').classList.remove('active');
}
function toggle_active_despre() {
    document.getElementById('desrpe_butons').classList.toggle('active');
}

// window.addEventListener('click', function (e) {
//     if (!((document.getElementById('admitere_butons').contains(e.target)) || (document.getElementById('admitere_button').contains(e.target)))) {
//         document.getElementById('admitere_butons').classList.remove('active');
//     }
//     else if (!((document.getElementById('elevi_butons').contains(e.target)) || (document.getElementById('elevi_buton').contains(e.target)))) {
//         document.getElementById('elevi_butons').classList.remove('active');
//     }
// });

window.addEventListener('load', function () {

    resize();
    arange();

});

window.onload = function () {

    resize();
    arange();

};


window.addEventListener("resize", function () {
    resize();
    arange();
});

var burger_butons = document.getElementById("burger_butons");
function togle(lines) {
    lines.classList.toggle("change");
    burger_butons.classList.toggle("burger_butons");
}