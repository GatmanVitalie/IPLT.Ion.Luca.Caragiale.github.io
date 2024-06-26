function shareToFacebook(button) {
    // Găsește articolul părinte
    var article = button.closest('.article');

    // Preia titlul articolului
    var title = article.querySelector('h2').innerText;

    // Preia URL-ul imaginii
    var imageUrl = article.querySelector('.image_holder img').src;

    // Preia URL-ul articolului (presupunem că articolul este linkuit)
    var articleUrl = window.location.href;

    // Construiește URL-ul de partajare pe Facebook
    var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(articleUrl) +
        '&quote=' + encodeURIComponent(title) +
        '&picture=' + encodeURIComponent(imageUrl);

    // Deschide fereastra de partajare
    window.open(shareUrl, '_blank', 'width=500,height=500');
}

function shareToTwitter(button) {
    // Găsește articolul părinte
    var article = button.closest('.article');

    // Preia titlul articolului
    var title = article.querySelector('h2').innerText;

    // Preia URL-ul articolului (presupunem că articolul este linkuit)
    var articleUrl = window.location.href;

    // Construiește URL-ul de partajare pe Twitter
    var shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) +
        '&url=' + encodeURIComponent(articleUrl);

    // Deschide fereastra de partajare
    window.open(shareUrl, '_blank', 'width=500,height=500');
}

function shareToLinkedIn(button) {
    // Găsește articolul părinte
    var article = button.closest('.article');

    // Preia titlul articolului
    var title = article.querySelector('h2').innerText;

    // Preia descrierea articolului (putem să o lăsăm goală pentru acest exemplu)
    var imageUrl = article.querySelector('.image_holder img').src;

    // Preia URL-ul articolului (presupunem că articolul este linkuit)
    var articleUrl = window.location.href;

    // Construiește URL-ul de partajare pe LinkedIn
    var shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(articleUrl) +
        '&title=' + encodeURIComponent(title) +
        '&summary=' + encodeURIComponent(imageUrl);

    // Deschide fereastra de partajare
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

async function shareContent(button) {
    var article = button.closest('.article');


    const shareData = {
        title: article.querySelector('h2').innerText,
        text: article.querySelector('a').innerText,
        url: window.location.href,
        image: article.querySelector('img').image,
    };

    try {
        await navigator.share(shareData);
    } catch (err) {
        console.error('Error sharing content:', err);
    }
}

function sharedata(button_class, titlu, image_link, descriere, data) {
    var articleUrl = window.location.href;
    if (button_class == 'facebook') {
        var shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(articleUrl) +
            '&quote=' + encodeURIComponent(titlu) +
            '&picture=' + encodeURIComponent(image_link);
        window.open(shareUrl, '_blank', 'width=500,height=500');
    }
    else if (button_class == 'twiter') {
        var shareUrl = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(titlu) +
            '&url=' + encodeURIComponent(articleUrl);
        window.open(shareUrl, '_blank', 'width=500,height=500');
    }
    else if (button_class == 'instagram') {
        var shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(articleUrl) +
            '&title=' + encodeURIComponent(titlu) +
            '&summary=' + encodeURIComponent(image_link);
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    else {
        var shareData = {
            title: titlu,
            text: descriere,
            url: window.location.href,
            image: image_link,
        };
        share_n(shareData); // Corrected this line
    }

}

async function share_n(shareData) {
    try {
        await navigator.share(shareData);
    } catch (err) {
        console.error('Error sharing content:', err);
    }
}