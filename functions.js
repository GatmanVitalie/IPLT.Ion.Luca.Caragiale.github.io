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