function translatePage(lang) {
    var elements = document.querySelectorAll('[data-en], [data-fr]');
    elements.forEach(function(el) {
        if (lang === 'fr') {
            el.textContent = el.getAttribute('data-fr');
        } else {
            el.textContent = el.getAttribute('data-en');
        }
    });
}