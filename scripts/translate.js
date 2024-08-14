async function translateText(text, targetLang) {
    const response = await fetch('https://libretranslate.com/translate', {
        method: 'POST',
        body: JSON.stringify({
            q: text,
            source: 'en',
            target: targetLang,
            format: 'text'
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    return data.translatedText;
}

function translatePage(lang) {
    const elements = document.querySelectorAll('.translate');
    
    elements.forEach(async function(el) {
        const text = el.textContent;
        const translatedText = await translateText(text, lang);
        el.textContent = translatedText;
    });
}