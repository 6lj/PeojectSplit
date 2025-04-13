const translations = [
    { english: "Hello", arabic: "مرحبا" },
    { english: "Thank you", arabic: "شكرا" },
    { english: "Goodbye", arabic: "وداعا" },
    { english: "Please", arabic: "من فضلك" },
    { english: "Yes", arabic: "نعم" },
    { english: "No", arabic: "لا" },
    { english: "Excuse me", arabic: "عفوا" },
    { english: "Welcome", arabic: "مرحبًا" },
    { english: "Good Morning", arabic: "صباح الخير" },
    { english: "Good Night", arabic: "تصبح على خير" },
    { english: "How are you?", arabic: "كيف حالك؟" },
    { english: "I'm fine", arabic: "أنا بخير" },
    { english: "What is your name?", arabic: "ما اسمك؟" },
    { english: "My name is...", arabic: "اسمي ..." },
    { english: "Where is the bathroom?", arabic: "أين الحمام؟" },
    { english: "Help!", arabic: "نجدة!" },
    { english: "I don't understand", arabic: "لا أفهم" },
    { english: "Do you speak English?", arabic: "هل تتحدث الإنجليزية؟" },
    { english: "I love you", arabic: "أحبك" },
    { english: "Happy Birthday", arabic: "عيد ميلاد سعيد" }
     { english: "Generate ID", arabic: "عيد ميلاد سعيد" }
];

// Expose just the Arabic translations to the global scope
const words = translations.map(translation => translation.arabic);
