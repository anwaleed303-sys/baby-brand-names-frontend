"use client";

import { useState, useEffect, useCallback } from "react";

const LANGUAGE_STORAGE_KEY = "nameGenerator_language";
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
    babyNamePreferences: "Baby  Preferences",
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
  },
};

export function useLanguage() {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  // Load language from memory on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (stored && translations[stored]) {
        setLanguageState(stored);
      }
    } catch (error) {
      console.error("Error loading language:", error);
    }
  }, []);

  // Save language to memory when changed
  const setLanguage = useCallback((newLanguage) => {
    if (translations[newLanguage]) {
      setLanguageState(newLanguage);
      try {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, newLanguage);
      } catch (error) {
        console.error("Error saving language:", error);
      }
    }
  }, []);

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

  // Get current language info
  const getCurrentLanguageInfo = useCallback(() => {
    const languageInfo = {
      en: { name: "English", nativeName: "English", rtl: false },
      ur: { name: "Urdu", nativeName: "اردو", rtl: true },
      ar: { name: "Arabic", nativeName: "العربية", rtl: true },
    };

    return languageInfo[language] || languageInfo[DEFAULT_LANGUAGE];
  }, [language]);

  return {
    language,
    setLanguage,
    t,
    getCurrentLanguageInfo,
    isRTL: getCurrentLanguageInfo().rtl,
  };
}
