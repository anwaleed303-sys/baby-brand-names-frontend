// Cultural and religious name data
export const CULTURAL_NAME_DATA = {
  islamic: {
    commonPrefixes: ["Abd", "Al", "Ibn", "Abu", "Umm"],
    commonSuffixes: ["ullah", "din", "rahman", "rahim", "allah"],
    meaningCategories: {
      attributes: ["Beautiful", "Wise", "Strong", "Noble", "Pure", "Blessed"],
      nature: ["Light", "Moon", "Star", "Dawn", "Garden", "Rose"],
      virtues: ["Faith", "Hope", "Peace", "Justice", "Patience", "Gratitude"],
      divine: [
        "Servant of Allah",
        "Gift of God",
        "God is great",
        "Blessed by Allah",
      ],
    },
    popularNames: {
      boys: [
        "Muhammad",
        "Ahmed",
        "Ali",
        "Omar",
        "Hassan",
        "Yusuf",
        "Ibrahim",
        "Khalil",
      ],
      girls: [
        "Aisha",
        "Fatima",
        "Khadija",
        "Maryam",
        "Zeinab",
        "Amina",
        "Layla",
        "Nour",
      ],
    },
    origins: ["Arabic", "Persian", "Turkish", "Urdu", "Malay", "Kurdish"],
  },

  hindu: {
    commonPrefixes: ["Maha", "Sri", "Adi", "Param", "Deva", "Bhagya"],
    commonSuffixes: ["ananda", "priya", "devi", "krishna", "raj", "vardhan"],
    meaningCategories: {
      divine: [
        "Lord Vishnu",
        "Goddess Lakshmi",
        "Lord Shiva",
        "Divine blessing",
      ],
      nature: ["Lotus", "Moon", "Sun", "Earth", "Water", "Fire"],
      virtues: ["Truth", "Knowledge", "Compassion", "Devotion", "Purity"],
      prosperity: ["Wealth", "Success", "Victory", "Fortune", "Abundance"],
    },
    popularNames: {
      boys: [
        "Arjun",
        "Krishna",
        "Rama",
        "Vikram",
        "Aditya",
        "Rohit",
        "Akash",
        "Pradeep",
      ],
      girls: [
        "Priya",
        "Kavya",
        "Ananya",
        "Sita",
        "Radha",
        "Shreya",
        "Pooja",
        "Meera",
      ],
    },
    origins: ["Sanskrit", "Hindi", "Tamil", "Telugu", "Bengali", "Gujarati"],
  },

  buddhist: {
    commonPrefixes: ["Bodhi", "Dharma", "Karma", "Sangha", "Buddha"],
    commonSuffixes: ["mitra", "ratna", "shanti", "bodhi", "dharma"],
    meaningCategories: {
      enlightenment: ["Awakening", "Enlightenment", "Wisdom", "Understanding"],
      peace: ["Tranquility", "Serenity", "Calm", "Peaceful", "Harmony"],
      compassion: ["Loving-kindness", "Compassion", "Mercy", "Kindness"],
      nature: ["Lotus", "Mountain", "River", "Tree", "Cloud"],
    },
    popularNames: {
      boys: ["Siddhartha", "Tenzin", "Lobsang", "Karma", "Thich", "Bodhi"],
      girls: ["Tara", "Dolma", "Pema", "Yangchen", "Choden", "Lhamo"],
    },
    origins: ["Sanskrit", "Tibetan", "Thai", "Burmese", "Japanese", "Chinese"],
  },

  christian: {
    commonPrefixes: ["Saint", "Blessed", "Holy"],
    commonSuffixes: ["el", "iah", "ael", "beth", "anna"],
    meaningCategories: {
      biblical: [
        "God is gracious",
        "Gift of God",
        "Beloved of God",
        "God has heard",
      ],
      virtues: ["Faith", "Hope", "Charity", "Grace", "Joy", "Peace"],
      angels: ["Michael", "Gabriel", "Rafael", "Uriel"],
      saints: ["Joseph", "Mary", "John", "Peter", "Paul", "Luke"],
    },
    popularNames: {
      boys: [
        "Michael",
        "John",
        "David",
        "James",
        "Matthew",
        "Daniel",
        "Andrew",
        "Peter",
      ],
      girls: [
        "Mary",
        "Sarah",
        "Rebecca",
        "Ruth",
        "Elizabeth",
        "Anna",
        "Grace",
        "Faith",
      ],
    },
    origins: ["Hebrew", "Greek", "Latin", "Aramaic", "Armenian"],
  },

  jewish: {
    commonPrefixes: ["Bar", "Bat", "Ben"],
    commonSuffixes: ["el", "iah", "ael", "ah"],
    meaningCategories: {
      biblical: ["God remembers", "God has judged", "God is my strength"],
      heritage: ["From Judah", "Hebrew", "Of Jerusalem", "Israelite"],
      blessings: ["Blessed", "Chosen", "Favored", "Sacred"],
      nature: ["Rose", "Lily", "Cedar", "Olive"],
    },
    popularNames: {
      boys: [
        "David",
        "Benjamin",
        "Samuel",
        "Jacob",
        "Isaac",
        "Abraham",
        "Moses",
        "Aaron",
      ],
      girls: [
        "Sarah",
        "Rebecca",
        "Rachel",
        "Leah",
        "Miriam",
        "Esther",
        "Ruth",
        "Naomi",
      ],
    },
    origins: ["Hebrew", "Yiddish", "Aramaic", "Ladino"],
  },

  sikh: {
    commonPrefixes: ["Guru", "Sant", "Bhai"],
    commonSuffixes: ["singh", "kaur", "preet", "deep", "jot"],
    meaningCategories: {
      divine: ["One God", "Divine light", "God's grace", "Blessed by Guru"],
      light: ["Light", "Lamp", "Bright", "Radiant", "Illumination"],
      love: ["Love", "Beloved", "Dear", "Precious", "Cherished"],
      strength: ["Lion", "Princess", "Brave", "Warrior", "Defender"],
    },
    popularNames: {
      boys: ["Gurpreet", "Harpreet", "Manpreet", "Jaspreet", "Simran", "Arjan"],
      girls: [
        "Simran",
        "Gurleen",
        "Harleen",
        "Jaspreet",
        "Manpreet",
        "Navneet",
      ],
    },
    origins: ["Punjabi", "Gurmukhi", "Sanskrit"],
  },
};

// Regional variations and pronunciations
export const REGIONAL_VARIATIONS = {
  arabic: {
    regions: ["Gulf", "Levant", "Egypt", "Maghreb", "Sudan"],
    dialects: {
      gulf: { characteristics: "Softer sounds, different vowels" },
      levant: { characteristics: "More consonant clusters" },
      egypt: { characteristics: "Distinctive pronunciation patterns" },
      maghreb: { characteristics: "French influence, unique sounds" },
    },
  },

  persian: {
    regions: ["Iran", "Afghanistan", "Tajikistan"],
    dialects: {
      farsi: { characteristics: "Modern Persian, Arabic script" },
      dari: { characteristics: "Afghan Persian variant" },
      tajik: { characteristics: "Cyrillic script, Russian influence" },
    },
  },

  urdu: {
    regions: ["Pakistan", "India"],
    characteristics: "Arabic-Persian script, Sanskrit influence",
  },

  sanskrit: {
    influence: "Hindu, Buddhist, and some Sikh names",
    characteristics: "Ancient language, complex phonetics",
  },
};

// Name meanings by category
export const MEANING_CATEGORIES = {
  divine: {
    islamic: ["Allah", "Rahman", "Rahim", "Khaliq", "Malik"],
    hindu: ["Brahma", "Vishnu", "Shiva", "Devi", "Ganesha"],
    buddhist: ["Buddha", "Dharma", "Sangha", "Nirvana"],
    christian: ["God", "Jesus", "Holy Spirit", "Trinity"],
    jewish: ["Yahweh", "Elohim", "Adonai"],
    sikh: ["Waheguru", "Satnam", "Onkar"],
  },

  virtues: [
    "Honesty",
    "Courage",
    "Wisdom",
    "Compassion",
    "Patience",
    "Justice",
    "Mercy",
    "Kindness",
    "Humility",
    "Generosity",
  ],

  nature: [
    "Sun",
    "Moon",
    "Stars",
    "Ocean",
    "Mountain",
    "River",
    "Tree",
    "Flower",
    "Bird",
    "Lion",
    "Eagle",
    "Deer",
  ],

  colors: [
    "Golden",
    "Silver",
    "White",
    "Black",
    "Red",
    "Blue",
    "Green",
    "Purple",
    "Crimson",
    "Azure",
  ],

  emotions: [
    "Joy",
    "Peace",
    "Love",
    "Hope",
    "Faith",
    "Bliss",
    "Serenity",
    "Contentment",
    "Happiness",
    "Delight",
  ],
};

// Historical and cultural context
export const CULTURAL_CONTEXT = {
  islamic: {
    importance:
      "Names carry spiritual significance and often reference Allah, prophets, or Islamic virtues",
    traditions:
      "Often named after Prophet Muhammad, his family, companions, or 99 names of Allah",
    ceremony: "Aqiqah ceremony, name chosen within 7 days of birth",
  },

  hindu: {
    importance:
      "Names based on deities, virtues, nature, or astrological considerations",
    traditions:
      "Nakshatra (birth star) influences name selection, often starts with specific letters",
    ceremony: "Namakaran ceremony, typically held on 12th day after birth",
  },

  buddhist: {
    importance:
      "Names reflect Buddhist teachings, enlightenment, or spiritual qualities",
    traditions:
      "Often chosen by spiritual teachers or based on Buddhist virtues",
    ceremony: "Varies by tradition, often blessed by monks",
  },

  christian: {
    importance: "Names from Bible, saints, or Christian virtues",
    traditions: "Baptismal names, confirmation names, saint's names",
    ceremony: "Baptism, often includes middle name of saint",
  },

  jewish: {
    importance: "Hebrew names, often biblical or related to Jewish heritage",
    traditions:
      "Ashkenazi avoid naming after living relatives, Sephardic honor living family",
    ceremony: "Brit milah for boys, Hebrew naming ceremony for girls",
  },

  sikh: {
    importance:
      "Names often end with Singh (lion) for boys, Kaur (princess) for girls",
    traditions:
      "Random selection from Guru Granth Sahib, first letter determines name",
    ceremony: "Nam Karan ceremony in Gurdwara",
  },
};

// Modern adaptations and trends
export const MODERN_TRENDS = {
  globalization: [
    "Cross-cultural name adoption",
    "Simplified spellings for international use",
    "Pronunciation-friendly variations",
  ],

  diaspora: [
    "Hyphenated cultural names",
    "Anglicized versions of traditional names",
    "Bilingual name pairs",
  ],

  contemporary: [
    "Shorter, modern-sounding names",
    "Unisex name preferences",
    "Nature-inspired variations",
    "Unique spelling variations",
  ],
};
