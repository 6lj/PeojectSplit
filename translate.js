const translations = {
    'Generate ID': 'انشاء معرف',
    'Hello': 'مرحبا',
    'Goodbye': 'وداعا',
    'Thank you': 'شكرا',
    'Please': 'من فضلك',
    'Yes': 'نعم',
    'No': 'لا',
    'Sorry': 'آسف',
    'Help': 'مساعدة',
    'Appointment Scheduling and Booking System': 'نظام جدولة وحجز المواعيد',
};

let isEnglish = false;

function translateText(text) {
    if (!isEnglish) return text; 
    let words = text.split(" ");
    let translated = words.map(word => translations[word] || word).join(" ");
    return translated;
}

function walkTextNodes(node) {
    if (node.nodeType === 3) { 
        const originalText = node.data.trim();
        if (originalText) {
            if (!node.parentElement.dataset.originalText) {
                node.parentElement.dataset.originalText = originalText;
            }
            node.data = translateText(originalText);
        }
    } else if (node.nodeType === 1 && node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') { 
        for (let child of node.childNodes) {
            walkTextNodes(child);
        }
    }
}

function toggleLanguage() {
    const button = document.querySelector('.lang-button');
    const html = document.documentElement;

    isEnglish = !isEnglish;

    if (isEnglish) {
        button.textContent = 'العربية'; // Switch to Arabic
        html.setAttribute('lang', 'en'); // Set language attribute to English
        html.setAttribute('dir', 'ltr'); // Left-to-right direction
        document.title = translateText(document.title); // Translate title
        walkTextNodes(document.body); 
    } else {
        button.textContent = 'English'; // Switch to English
        html.setAttribute('lang', 'ar'); // Set language attribute to Arabic
        html.setAttribute('dir', 'rtl'); // Right-to-left direction
        document.title = "نظام جدولة وحجز المواعيد"; // Arabic title
        const allElements = document.body.getElementsByTagName('*');
        for (let element of allElements) {
            if (element.dataset.originalText) {
                element.textContent = element.dataset.originalText; // Restore original text
            }
        }
    }
}

// Expose the toggleLanguage function to the global scope
window.toggleLanguage = toggleLanguage;
