function textflow() {

    var text = document.getElementById('heder');
    var newDom = '';
    var animationDelay = 6;

    for (let i = 0; i < text.innerText.length; i++) {
        newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
    }

    text.innerHTML = newDom;
    var length = text.children.length;

    for (let i = 0; i < length; i++) {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
}

function losdanimations() {
    var element = document.getElementById("text_ph");
    element.classList.add("animated");
    setTimeout(textflow, 2500);
}