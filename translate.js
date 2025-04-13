const translations = {
    'انشاء معرف': 'Generate ID',
    'مرحبا': 'Hello',
    'وداعا': 'Goodbye',
    'شكرا': 'Thank you',
    'من فضلك': 'Please',
    'نعم': 'Yes',
    'لا': 'No',
    'آسف': 'Sorry',
    'مساعدة': 'Help',
};

function translate(word) {
    return translations[word] || word; 
}

window.translate = translate; 
