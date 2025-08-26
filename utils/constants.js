// Religion/Culture options
export const RELIGIONS = [
  { value: "islamic", label: "islamic", icon: "🕌" },
  { value: "hindu", label: "hindu", icon: "🕉️" },
  { value: "buddhist", label: "buddhist", icon: "☸️" },
  { value: "christian", label: "christian", icon: "✝️" },
  { value: "jewish", label: "jewish", icon: "✡️" },
  { value: "sikh", label: "sikh", icon: "🪯" },
  { value: "modern", label: "modern", icon: "🌟" },
];

// Industry options for brands
export const INDUSTRIES = [
  { value: "technology", label: "technology", icon: "💻" },
  { value: "healthcare", label: "healthcare", icon: "🏥" },
  { value: "finance", label: "finance", icon: "💰" },
  { value: "education", label: "education", icon: "📚" },
  { value: "food", label: "food", icon: "🍽️" },
  { value: "fashion", label: "fashion", icon: "👗" },
  { value: "travel", label: "travel", icon: "✈️" },
  { value: "consulting", label: "consulting", icon: "📊" },
  { value: "entertainment", label: "entertainment", icon: "🎬" },
  { value: "fitness", label: "fitness", icon: "💪" },
  { value: "real-estate", label: "realEstate", icon: "🏠" },
  { value: "automotive", label: "automotive", icon: "🚗" },
];

// Brand style options
export const BRAND_STYLES = [
  { value: "professional", label: "professional" },
  { value: "creative", label: "creative" },
  { value: "playful", label: "playful" },
  { value: "luxury", label: "luxury" },
  { value: "minimal", label: "minimal" },
  { value: "bold", label: "bold" },
  { value: "elegant", label: "elegant" },
  { value: "modern", label: "modern" },
];

// Keywords for different contexts
export const KEYWORDS = {
  baby: [
    "strength",
    "wisdom",
    "beauty",
    "peace",
    "light",
    "blessed",
    "noble",
    "brave",
    "pure",
    "joy",
    "love",
    "hope",
    "faith",
    "grace",
    "victory",
    "prosperity",
    "kindness",
    "intelligence",
  ],
  brand: [
    "innovative",
    "reliable",
    "fast",
    "premium",
    "friendly",
    "global",
    "sustainable",
    "creative",
    "professional",
    "trustworthy",
    "efficient",
    "modern",
    "dynamic",
    "smart",
    "secure",
    "powerful",
    "flexible",
    "expert",
  ],
};

// Cultural origins
export const CULTURAL_ORIGINS = {
  islamic: [
    "Arabic",
    "Persian",
    "Turkish",
    "Urdu",
    "Malay",
    "Afghan",
    "Kurdish",
    "Bosnian",
  ],
  hindu: [
    "Sanskrit",
    "Hindi",
    "Tamil",
    "Telugu",
    "Bengali",
    "Gujarati",
    "Marathi",
    "Punjabi",
  ],
  buddhist: [
    "Sanskrit",
    "Tibetan",
    "Thai",
    "Burmese",
    "Japanese",
    "Chinese",
    "Khmer",
    "Lao",
  ],
  christian: [
    "Hebrew",
    "Greek",
    "Latin",
    "Armenian",
    "Coptic",
    "Ethiopian",
    "Irish",
    "Scottish",
  ],
  jewish: [
    "Hebrew",
    "Yiddish",
    "Aramaic",
    "Ladino",
    "Judeo-Arabic",
    "Ashkenazi",
    "Sephardic",
    "Mizrahi",
  ],
  sikh: ["Punjabi", "Gurmukhi", "Sanskrit", "Hindi"],
};

// Name length categories
export const NAME_LENGTHS = {
  short: { min: 3, max: 5 },
  medium: { min: 6, max: 8 },
  long: { min: 9, max: 15 },
};

// Popularity levels
export const POPULARITY_LEVELS = [
  "Very Popular",
  "Popular",
  "Moderate",
  "Unique",
  "Rare",
];

// Domain extensions to check
export const DOMAIN_EXTENSIONS = [
  ".com",
  ".net",
  ".org",
  ".io",
  ".co",
  ".app",
  ".dev",
  ".tech",
];

// Default form values
export const DEFAULT_BABY_FORM = {
  gender: "",
  religion: "",
  origin: "",
  keywords: [],
  meaning: "",
  startsWith: "",
  endsWith: "",
  length: "medium",
};

export const DEFAULT_BRAND_FORM = {
  industry: "",
  style: "",
  keywords: [],
  description: "",
  targetAudience: "",
  length: "medium",
  checkDomain: true,
  avoidNumbers: true,
};

// API endpoints
export const API_ENDPOINTS = {
  BABY_NAMES: "/names/baby",
  BRAND_NAMES: "/names/brand",
  DOMAIN_CHECK: "/domain/check",
  NAME_SUGGESTIONS: "/names/suggestions",
  NAME_DETAILS: "/names/details",
  ANALYTICS: "/analytics/generation",
  FEEDBACK: "/feedback",
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  SERVER_ERROR: "Server error. Please try again later.",
  TIMEOUT_ERROR: "Request timed out. Please try again.",
  RATE_LIMIT_ERROR: "Too many requests. Please wait a moment and try again.",
  VALIDATION_ERROR: "Please check your input and try again.",
  UNKNOWN_ERROR: "Something went wrong. Please try again.",
};

// Success messages
export const SUCCESS_MESSAGES = {
  NAMES_GENERATED: "Names generated successfully!",
  FAVORITE_ADDED: "Added to favorites!",
  FAVORITE_REMOVED: "Removed from favorites!",
  COPIED_TO_CLIPBOARD: "Copied to clipboard!",
  FEEDBACK_SUBMITTED: "Thank you for your feedback!",
};

// Local storage keys
export const STORAGE_KEYS = {
  FAVORITES: "nameGenerator_favorites",
  LANGUAGE: "nameGenerator_language",
  THEME: "nameGenerator_theme",
  RECENT_SEARCHES: "nameGenerator_recentSearches",
  USER_PREFERENCES: "nameGenerator_userPreferences",
};
