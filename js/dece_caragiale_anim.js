let elements_d = document.querySelectorAll('.argument_dreapta');
let elements_s = document.querySelectorAll('.argument_stanga');
let elements_t = Array.from(elements_d).concat(Array.from(elements_s));
let booleans_t = new Array(elements_t.length).fill(false);

window.addEventListener('scroll', function () {
    var screenHeight = window.innerHeight;
    for (var i = 0; i < elements_t.length; i++) {
        var position = elements_t[i].getBoundingClientRect().top;
        console.log(position);
        if (position < screenHeight * 0.79 && !booleans_t[i]) {
            booleans_t[i] = true;
            elements_t[i].classList.add('slide-in');
        }
    }
});
