"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

const DEFAULT_LANGUAGE = "en";

// Translation object
const translations = {
  en: {
    // Common
    home: "Home",
    babyNames: "Baby Names",
    brandNames: "Brand Names",
    generate: "Generate",
    generating: "Generating",
    loading: "Loading",
    search: "Search",
    filter: "Filter",
    sort: "Sort",
    clear: "Clear",
    all: "All",
    close: "Close",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    copy: "Copy",
    copied: "Copied!",

    // Navigation
    quickLinks: "Quick Links",
    features: "Features",
    languages: "Languages",

    // Baby Names
    babyNamePreferences: "Baby Preferences",
    generateBabyNames: "Generate Baby Names",
    gender: "Gender",
    boy: "Boy",
    girl: "Girl",
    unisex: "Unisex",
    religionCulture: "Religion/Culture",
    islamic: "Islamic",
    hindu: "Hindu",
    buddhist: "Buddhist",
    christian: "Christian",
    jewish: "Jewish",
    sikh: "Sikh",
    modern: "Modern",
    specificOrigin: "Specific Origin",
    originPlaceholder: "e.g., Arabian, Persian, Turkish...",
    preferredMeanings: "Preferred Meanings",
    strength: "Strength",
    wisdom: "Wisdom",
    beauty: "Beauty",
    peace: "Peace",
    light: "Light",
    blessed: "Blessed",
    noble: "Noble",
    brave: "Brave",
    advancedOptions: "Advanced Options",
    optional: "Optional",
    startsWith: "Starts With",
    endsWith: "Ends With",
    specificMeaning: "Specific Meaning",
    meaningPlaceholder: "Describe the meaning you want...",

    // Brand Names
    brandPreferences: "Brand Preferences",
    generateBrandNames: "Generate Brand Names",
    industry: "Industry",
    technology: "Technology",
    healthcare: "Healthcare",
    finance: "Finance",
    education: "Education",
    food: "Food & Beverage",
    fashion: "Fashion",
    travel: "Travel",
    consulting: "Consulting",
    brandStyle: "Brand Style",
    professional: "Professional",
    creative: "Creative",
    playful: "Playful",
    luxury: "Luxury",
    minimal: "Minimal",
    businessDescription: "Business Description",
    businessDescriptionPlaceholder: "Describe what your business does...",
    targetAudience: "Target Audience",
    targetAudiencePlaceholder: "Who are your customers?",
    brandKeywords: "Brand Keywords",
    innovative: "Innovative",
    reliable: "Reliable",
    fast: "Fast",
    premium: "Premium",
    friendly: "Friendly",
    global: "Global",
    sustainable: "Sustainable",
    nameLength: "Name Length",
    short: "Short",
    medium: "Medium",
    long: "Long",
    letters: "letters",
    checkDomainAvailability: "Check Domain Availability",
    avoidNumbers: "Avoid Numbers",

    // Results
    namesGenerated: "Names Generated",
    noNamesFound: "No names found",
    tryDifferentFilters: "Try adjusting your search or filters",
    searchNames: "Search names...",
    sortBy: "Sort by",
    filterBy: "Filter by",
    default: "Default",
    alphabetical: "A-Z",
    popularity: "Popularity",
    copyName: "Copy Name",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    culturalSignificance: "Cultural Significance",
    famousPeople: "Famous People",
    variations: "Variations",
    domainAvailability: "Domain",
    available: "Available",
    taken: "Taken",
    filters: "Filters",
  },

  ur: {
    // Common - Urdu
    home: "گھر",
    babyNames: "بچوں کے نام",
    brandNames: "برانڈ کے نام",
    generate: "بنائیں",
    generating: "بنایا جا رہا ہے",
    loading: "لوڈ ہو رہا ہے",
    search: "تلاش",
    filter: "فلٹر",
    sort: "ترتیب",
    clear: "صاف کریں",
    all: "تمام",
    close: "بند کریں",
    save: "محفوظ کریں",
    cancel: "منسوخ",
    delete: "حذف کریں",
    edit: "تبدیل کریں",
    copy: "کاپی",
    copied: "کاپی ہو گیا!",

    // Navigation
    quickLinks: "فوری لنکس",
    features: "خصوصیات",
    languages: "زبانیں",

    // Baby Names - Urdu
    babyNamePreferences: "بچے کے نام کی ترجیحات",
    generateBabyNames: "بچوں کے نام بنائیں",
    gender: "جنس",
    boy: "لڑکا",
    girl: "لڑکی",
    unisex: "مشترکہ",
    religionCulture: "مذہب/ثقافت",
    islamic: "اسلامی",
    hindu: "ہندو",
    buddhist: "بدھ مت",
    christian: "عیسائی",
    jewish: "یہودی",
    sikh: "سکھ",
    modern: "جدید",
    specificOrigin: "مخصوص اصل",
    originPlaceholder: "مثلاً عربی، فارسی، ترکی...",
    preferredMeanings: "پسندیدہ معانی",
    strength: "طاقت",
    wisdom: "حکمت",
    beauty: "خوبصورتی",
    peace: "امن",
    light: "نور",
    blessed: "مبارک",
    noble: "شریف",
    brave: "بہادر",
    advancedOptions: "اعلیٰ درجے کے اختیارات",
    optional: "اختیاری",
    startsWith: "شروع ہوتا ہے",
    endsWith: "ختم ہوتا ہے",
    specificMeaning: "مخصوص معنی",
    meaningPlaceholder: "جو معنی آپ چاہتے ہیں اس کی وضاحت کریں...",

    // Brand Names - Urdu
    brandPreferences: "برانڈ کی ترجیحات",
    generateBrandNames: "برانڈ کے نام بنائیں",
    industry: "صنعت",
    technology: "ٹیکنالوجی",
    healthcare: "صحت کی دیکھ بھال",
    finance: "مالیات",
    education: "تعلیم",
    food: "کھانا اور مشروبات",
    fashion: "فیشن",
    travel: "سفر",
    consulting: "مشاورت",
    brandStyle: "برانڈ کا انداز",
    professional: "پیشہ ورانہ",
    creative: "تخلیقی",
    playful: "کھیل کود",
    luxury: "عیش و آرام",
    minimal: "کم سے کم",
  },

  ar: {
    // Common - Arabic
    home: "الرئيسية",
    babyNames: "أسماء الأطفال",
    brandNames: "أسماء العلامات التجارية",
    generate: "إنشاء",
    generating: "جاري الإنشاء",
    loading: "جاري التحميل",
    search: "بحث",
    filter: "تصفية",
    sort: "ترتيب",
    clear: "مسح",
    all: "الكل",
    close: "إغلاق",
    save: "حفظ",
    cancel: "إلغاء",
    delete: "حذف",
    edit: "تعديل",
    copy: "نسخ",
    copied: "تم النسخ!",

    // Navigation
    quickLinks: "روابط سريعة",
    features: "الميزات",
    languages: "اللغات",

    // Baby Names - Arabic
    babyNamePreferences: "تفضيلات أسماء الأطفال",
    generateBabyNames: "إنشاء أسماء الأطفال",
    gender: "الجنس",
    boy: "ولد",
    girl: "بنت",
    unisex: "مشترك",
    religionCulture: "الدين/الثقافة",
    islamic: "إسلامي",
    hindu: "هندوسي",
    buddhist: "بوذي",
    christian: "مسيحي",
    jewish: "يهودي",
    sikh: "سيخي",
    modern: "حديث",
    specificOrigin: "الأصل المحدد",
    originPlaceholder: "مثلاً عربي، فارسي، تركي...",
    preferredMeanings: "المعاني المفضلة",
    strength: "القوة",
    wisdom: "الحكمة",
    beauty: "الجمال",
    peace: "السلام",
    light: "النور",
    blessed: "مبارك",
    noble: "نبيل",
    brave: "شجاع",
    advancedOptions: "خيارات متقدمة",
    optional: "اختياري",
    startsWith: "يبدأ بـ",
    endsWith: "ينتهي بـ",
    specificMeaning: "معنى محدد",
    meaningPlaceholder: "اوصف المعنى الذي تريده...",

    // Brand Names - Arabic
    brandPreferences: "تفضيلات العلامة التجارية",
    generateBrandNames: "إنشاء أسماء العلامات التجارية",
    industry: "الصناعة",
    technology: "التكنولوجيا",
    healthcare: "الرعاية الصحية",
    finance: "المالية",
    education: "التعليم",
    food: "الطعام والمشروبات",
    fashion: "الموضة",
    travel: "السفر",
    consulting: "الاستشارات",
    brandStyle: "نمط العلامة التجارية",
    professional: "مهني",
    creative: "إبداعي",
    playful: "مرح",
    luxury: "فاخر",
    minimal: "بسيط",
  },
};

// Create the context
const LanguageContext = createContext();

// Language provider component
export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  // Translation function
  const t = useCallback(
    (key, fallback) => {
      return (
        translations[language]?.[key] ||
        translations[DEFAULT_LANGUAGE]?.[key] ||
        fallback ||
        key
      );
    },
    [language]
  );

  // Set language function
  const setLanguage = useCallback((newLanguage) => {
    if (translations[newLanguage]) {
      setLanguageState(newLanguage);
    }
  }, []);

  // Get current language info
  const getCurrentLanguageInfo = useCallback(() => {
    const languageInfo = {
      en: { name: "English", nativeName: "English", rtl: false },
      ur: { name: "Urdu", nativeName: "اردو", rtl: true },
      ar: { name: "Arabic", nativeName: "العربية", rtl: true },
    };

    return languageInfo[language] || languageInfo[DEFAULT_LANGUAGE];
  }, [language]);

  const value = {
    language,
    setLanguage,
    t,
    getCurrentLanguageInfo,
    isRTL: getCurrentLanguageInfo().rtl,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
