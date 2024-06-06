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
        text:  article.querySelector('a').innerText,
        url: window.location.href,
      };

    try {
        await navigator.share(shareData);
    } catch (err) {
        console.error('Error sharing content:', err);
    }
}
