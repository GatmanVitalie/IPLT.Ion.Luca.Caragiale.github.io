var data;

window.onload = function () {
    $.get('news.json', function (d) {
        data = JSON.parse(d);
        // loop through all books
        data.books.forEach(function (b) {
            // now you can put every book in your <div>
            $("#books").append(`<div class="article">
            <h2>${b.title}</h2>
            <div class="image_holder">
                <img src="images/Elevi.webp">
            </div>
            <div class="text_holder">
                <a>Instituția publică Liceul Teoretic Ion Loca caragieale are a fost onorată ca elevii săi să
                    reprezinte raionul Orhei la olimpiadela de fizică, chimie, matematică, informatică, limba si
                    literatura rumână si la istorie</a>
            </div>
            <h3>09.01.2024</h3>
            <div class="button_holder">
                <button type="button" class="facebook">
                    <img src="images/Facebook_Logo_Secondary.png">
                </button>
                <button type="button" class="instagram">
                    <img src="images/Instagram_logo_2022.svg">
                </button>
                <button type="button" class="twiter">
                    <img src="images/logo.svg">
                </button>
                <button type="button" class="github">
                    <img src="images/github-mark-white.svg">
                </button>
            </div>
        </div>`);
        });
    });
}