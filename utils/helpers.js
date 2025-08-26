import { DOMAIN_EXTENSIONS } from "./constants";

// String utilities
export const stringUtils = {
  capitalize: (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  capitalizeWords: (str) => {
    if (!str) return "";
    return str
      .split(" ")
      .map((word) => stringUtils.capitalize(word))
      .join(" ");
  },

  truncate: (str, length = 100, suffix = "...") => {
    if (!str || str.length <= length) return str;
    return str.substring(0, length - suffix.length) + suffix;
  },

  slugify: (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  },

  removeAccents: (str) => {
    if (!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },

  isRTL: (str) => {
    if (!str) return false;
    const rtlChar = /[\u0590-\u05FF\u0600-\u06FF\u0700-\u074F]/;
    return rtlChar.test(str);
  },
};

// Array utilities
export const arrayUtils = {
  shuffle: (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  unique: (array, key) => {
    if (!key) return [...new Set(array)];

    const seen = new Set();
    return array.filter((item) => {
      const value = typeof key === "function" ? key(item) : item[key];
      if (seen.has(value)) return false;
      seen.add(value);
      return true;
    });
  },

  chunk: (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  },

  sortBy: (array, key, direction = "asc") => {
    return [...array].sort((a, b) => {
      const aVal = typeof key === "function" ? key(a) : a[key];
      const bVal = typeof key === "function" ? key(b) : b[key];

      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
  },
};

// Date utilities
export const dateUtils = {
  formatDate: (date, locale = "en-US") => {
    if (!date) return "";
    return new Intl.DateTimeFormat(locale).format(new Date(date));
  },

  formatDateTime: (date, locale = "en-US") => {
    if (!date) return "";
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  },

  timeAgo: (date) => {
    if (!date) return "";
    const now = new Date();
    const diff = now - new Date(date);
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  },
};

// Validation utilities
export const validationUtils = {
  isEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  isUrl: (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  isDomain: (domain) => {
    const domainRegex =
      /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;
    return domainRegex.test(domain);
  },

  isValidNameLength: (name, min = 2, max = 50) => {
    return name && name.length >= min && name.length <= max;
  },

  hasSpecialCharacters: (str) => {
    return /[^a-zA-Z0-9\s]/.test(str);
  },
};

// DOM utilities
export const domUtils = {
  copyToClipboard: async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        document.execCommand("copy");
        document.body.removeChild(textArea);
        return true;
      } catch (error) {
        document.body.removeChild(textArea);
        return false;
      }
    }
  },

  scrollToTop: (smooth = true) => {
    window.scrollTo({
      top: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  },

  scrollToElement: (elementId, smooth = true) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: smooth ? "smooth" : "auto",
        block: "start",
      });
    }
  },
};

// Name processing utilities
export const nameUtils = {
  generateDomainName: (brandName) => {
    return stringUtils.slugify(brandName).toLowerCase();
  },

  suggestDomainVariations: (brandName) => {
    const baseDomain = nameUtils.generateDomainName(brandName);
    const variations = [];

    // Add different extensions
    DOMAIN_EXTENSIONS.forEach((ext) => {
      variations.push(baseDomain + ext);
    });

    // Add prefixes and suffixes
    const modifiers = ["get", "my", "the", "app", "hub", "pro", "co"];
    modifiers.forEach((modifier) => {
      variations.push(modifier + baseDomain + ".com");
      variations.push(baseDomain + modifier + ".com");
    });

    return variations.slice(0, 10); // Return top 10 variations
  },

  analyzeNameComplexity: (name) => {
    const length = name.length;
    const hasNumbers = /\d/.test(name);
    const hasSpecialChars = /[^a-zA-Z0-9\s]/.test(name);
    const syllableCount = name.replace(/[^aeiouAEIOU]/g, "").length;

    return {
      length,
      hasNumbers,
      hasSpecialChars,
      syllableCount,
      complexity:
        length > 10 || hasNumbers || hasSpecialChars ? "complex" : "simple",
      pronunciation: syllableCount > 3 ? "difficult" : "easy",
    };
  },

  filterNamesByPreferences: (names, preferences) => {
    return names.filter((name) => {
      // Filter by length
      if (preferences.length) {
        const { min, max } = preferences.length;
        if (name.name.length < min || name.name.length > max) {
          return false;
        }
      }

      // Filter by starting letter
      if (preferences.startsWith) {
        if (
          !name.name
            .toLowerCase()
            .startsWith(preferences.startsWith.toLowerCase())
        ) {
          return false;
        }
      }

      // Filter by ending letter
      if (preferences.endsWith) {
        if (
          !name.name.toLowerCase().endsWith(preferences.endsWith.toLowerCase())
        ) {
          return false;
        }
      }

      // Filter by keywords
      if (preferences.keywords && preferences.keywords.length > 0) {
        const nameText = (
          name.name +
          " " +
          name.meaning +
          " " +
          name.description
        ).toLowerCase();
        const hasKeyword = preferences.keywords.some((keyword) =>
          nameText.includes(keyword.toLowerCase())
        );
        if (!hasKeyword) {
          return false;
        }
      }

      return true;
    });
  },
};

// Storage utilities
export const storageUtils = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error("Storage set error:", error);
      return false;
    }
  },

  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error("Storage get error:", error);
      return defaultValue;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error("Storage remove error:", error);
      return false;
    }
  },

  clear: () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("Storage clear error:", error);
      return false;
    }
  },
};

// Format utilities
export const formatUtils = {
  number: (num, locale = "en-US") => {
    return new Intl.NumberFormat(locale).format(num);
  },

  currency: (amount, currency = "USD", locale = "en-US") => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);
  },

  percentage: (value, decimals = 2) => {
    return `${(value * 100).toFixed(decimals)}%`;
  },

  fileSize: (bytes) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  },
};

// Color utilities
export const colorUtils = {
  hexToRgb: (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  },

  rgbToHex: (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },

  isLightColor: (hex) => {
    const rgb = colorUtils.hexToRgb(hex);
    if (!rgb) return false;
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 128;
  },
};

// Debounce and throttle utilities
export const performanceUtils = {
  debounce: (func, wait, immediate) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  throttle: (func, limit) => {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },
};

// Analytics utilities
export const analyticsUtils = {
  trackEvent: (eventName, properties = {}) => {
    // In a real app, you would send this to your analytics service
    if (process.env.NODE_ENV === "development") {
      console.log("Analytics Event:", eventName, properties);
    }

    // Example: Send to Google Analytics, Mixpanel, etc.
    // gtag('event', eventName, properties)
  },

  trackPageView: (page) => {
    analyticsUtils.trackEvent("page_view", { page });
  },

  trackNameGeneration: (type, formData) => {
    analyticsUtils.trackEvent("name_generation", {
      type,
      religion: formData.religion,
      gender: formData.gender,
      industry: formData.industry,
      style: formData.style,
    });
  },
};
