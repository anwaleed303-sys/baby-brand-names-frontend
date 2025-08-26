// import { apiService } from "./api";

// // Mock data for development/fallback
// const mockBabyNames = [
//   {
//     name: "Aisha",
//     meaning: "Living, prosperous",
//     origin: "Arabic",
//     pronunciation: "AH-ee-shah",
//     category: "Traditional",
//     popularity: "Popular",
//     description:
//       'A beautiful name meaning "alive" or "living one", traditionally associated with vitality and prosperity.',
//     culturalSignificance:
//       "Aisha was the name of Prophet Muhammad's wife, known for her intelligence and scholarship.",
//     historicalFigures: ["Aisha bint Abu Bakr"],
//     variations: ["Ayesha", "Aishah", "Aisa"],
//   },
//   {
//     name: "Omar",
//     meaning: "Flourishing, long-lived",
//     origin: "Arabic",
//     pronunciation: "OH-mar",
//     category: "Traditional",
//     popularity: "Very Popular",
//     description:
//       'A strong name meaning "flourishing" or "long-lived", symbolizing growth and longevity.',
//     culturalSignificance:
//       "Named after Umar ibn al-Khattab, the second Caliph of Islam.",
//     historicalFigures: ["Umar ibn al-Khattab", "Omar Khayyam"],
//     variations: ["Umar", "Omer", "Omri"],
//   },
// ];

// const mockBrandNames = [
//   {
//     name: "Nexura",
//     meaning: "Next-generation solutions",
//     category: "Technology",
//     description:
//       'A modern, tech-forward name combining "next" and "aura" to suggest innovative solutions.',
//     domainAvailable: true,
//     variations: ["Nexur", "Nexura.io", "Nexuris"],
//     targetAudience: "Tech-savvy professionals",
//   },
//   {
//     name: "Elevate",
//     meaning: "Rising above, improvement",
//     category: "Consulting",
//     description:
//       "A powerful name that suggests growth, improvement, and reaching new heights.",
//     domainAvailable: false,
//     variations: ["ElevateX", "ElevateNow", "Elevata"],
//     targetAudience: "Businesses seeking growth",
//   },
// ];

// export const nameService = {
//   async generateNames(type, formData) {
//     try {
//       // Try API first
//       if (type === "baby") {
//         const response = await apiService.generateBabyNames(formData);
//         await apiService.trackNameGeneration(type, formData);
//         return response.names || response;
//       } else if (type === "brand") {
//         const response = await apiService.generateBrandNames(formData);
//         await apiService.trackNameGeneration(type, formData);
//         return response.names || response;
//       }
//     } catch (error) {
//       console.warn("API call failed, using mock data:", error.message);

//       // Fallback to mock data with customization
//       if (type === "baby") {
//         return this.generateMockBabyNames(formData);
//       } else if (type === "brand") {
//         return this.generateMockBrandNames(formData);
//       }
//     }

//     throw new Error("Invalid name generation type");
//   },

//   generateMockBabyNames(formData) {
//     // Simulate API delay
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         let names = [...mockBabyNames];

//         // Customize based on form data
//         if (formData.gender === "boy") {
//           names = names.filter((n) =>
//             ["Omar", "Ahmed", "Ali", "Hassan"].includes(n.name)
//           );
//         } else if (formData.gender === "girl") {
//           names = names.filter((n) =>
//             ["Aisha", "Fatima", "Zara", "Layla"].includes(n.name)
//           );
//         }

//         // Add more mock names based on religion
//         if (formData.religion === "islamic") {
//           names.push(
//             {
//               name: "Zara",
//               meaning: "Blooming flower, princess",
//               origin: "Arabic/Hebrew",
//               pronunciation: "ZAH-rah",
//               category: "Modern",
//               popularity: "Very Popular",
//               description:
//                 'A beautiful name meaning "blooming flower" in Arabic and "princess" in Hebrew.',
//               culturalSignificance:
//                 "Popular across many cultures, symbolizing beauty and nobility.",
//               historicalFigures: ["Zara Phillips"],
//               variations: ["Zahra", "Sara", "Zahrah"],
//             },
//             {
//               name: "Adam",
//               meaning: "Man, earth",
//               origin: "Arabic/Hebrew",
//               pronunciation: "AH-dahm",
//               category: "Traditional",
//               popularity: "Popular",
//               description:
//                 'The first human name, meaning "man" or "from the earth".',
//               culturalSignificance:
//                 "Adam is recognized as the first prophet in Islam and the first man in Judeo-Christian tradition.",
//               historicalFigures: ["Prophet Adam"],
//               variations: ["Adem", "Adham"],
//             }
//           );
//         }

//         // Generate 16 more names to reach 20
//         const additionalNames = this.generateAdditionalMockNames(formData, 16);
//         names.push(...additionalNames);

//         resolve(names.slice(0, 20));
//       }, 2000);
//     });
//   },

//   generateMockBrandNames(formData) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         let names = [...mockBrandNames];

//         // Add industry-specific names
//         if (formData.industry === "technology") {
//           names.push(
//             {
//               name: "Quantum",
//               meaning: "Advanced technology",
//               category: "Technology",
//               description: "Suggests cutting-edge technology and innovation.",
//               domainAvailable: false,
//               variations: ["QuantumX", "QuantumLab", "Quantify"],
//               targetAudience: "Tech innovators",
//             },
//             {
//               name: "Pixel",
//               meaning: "Digital excellence",
//               category: "Technology",
//               description: "Perfect for digital agencies and tech companies.",
//               domainAvailable: true,
//               variations: ["PixelCore", "PixelWave", "Pixelio"],
//               targetAudience: "Digital natives",
//             }
//           );
//         }

//         // Generate more names
//         const additionalNames = this.generateAdditionalBrandNames(formData, 16);
//         names.push(...additionalNames);

//         resolve(names.slice(0, 20));
//       }, 2500);
//     });
//   },

//   generateAdditionalMockNames(formData, count) {
//     const prefixes = ["Al", "Ibn", "Abd", "Muhammad", "Ahmad"];
//     const suffixes = ["din", "ullah", "ahmad", "ali", "hassan"];
//     const meanings = [
//       "Light",
//       "Peace",
//       "Blessed",
//       "Noble",
//       "Wise",
//       "Strong",
//       "Beautiful",
//     ];

//     const names = [];

//     for (let i = 0; i < count; i++) {
//       const isLongName = Math.random() > 0.7;
//       let name;

//       if (isLongName && formData.religion === "islamic") {
//         const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
//         const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
//         name = `${prefix}${suffix}`;
//       } else {
//         // Generate shorter names
//         const shortNames = [
//           "Noor",
//           "Layla",
//           "Yusuf",
//           "Maryam",
//           "Khalil",
//           "Amina",
//           "Tariq",
//           "Safiya",
//         ];
//         name = shortNames[Math.floor(Math.random() * shortNames.length)];
//       }

//       names.push({
//         name,
//         meaning: meanings[Math.floor(Math.random() * meanings.length)],
//         origin: formData.religion === "islamic" ? "Arabic" : "Various",
//         pronunciation: name.toLowerCase().replace(/(.)/g, "$1-").slice(0, -1),
//         category: Math.random() > 0.5 ? "Traditional" : "Modern",
//         popularity: ["Popular", "Moderate", "Unique"][
//           Math.floor(Math.random() * 3)
//         ],
//         description: `A meaningful name representing ${meanings[
//           Math.floor(Math.random() * meanings.length)
//         ].toLowerCase()}.`,
//         culturalSignificance:
//           "Rich cultural heritage and spiritual significance.",
//         variations: [name + "a", name.slice(0, -1), name + "h"].filter(
//           (v) => v !== name
//         ),
//       });
//     }

//     return names;
//   },

//   generateAdditionalBrandNames(formData, count) {
//     const techWords = [
//       "Nexus",
//       "Vertex",
//       "Apex",
//       "Zenith",
//       "Prime",
//       "Core",
//       "Wave",
//       "Flow",
//     ];
//     const businessWords = [
//       "Pro",
//       "Max",
//       "Plus",
//       "Elite",
//       "Premium",
//       "Global",
//       "Wise",
//       "Smart",
//     ];
//     const endings = ["ly", "ify", "io", "co", "x", "labs", "hub", "pro"];

//     const names = [];

//     for (let i = 0; i < count; i++) {
//       const baseWords =
//         formData.industry === "technology" ? techWords : businessWords;
//       const base = baseWords[Math.floor(Math.random() * baseWords.length)];
//       const ending =
//         Math.random() > 0.6
//           ? endings[Math.floor(Math.random() * endings.length)]
//           : "";
//       const name = base + ending;

//       names.push({
//         name,
//         meaning: "Innovation and excellence",
//         category: formData.industry || "Business",
//         description: `A modern ${
//           formData.industry || "business"
//         } name suggesting innovation and growth.`,
//         domainAvailable: Math.random() > 0.4,
//         variations: [name + "x", name + "pro", name + "hub"],
//         targetAudience: formData.targetAudience || "Modern businesses",
//       });
//     }

//     return names;
//   },

//   async checkDomain(domain) {
//     try {
//       const response = await apiService.checkDomainAvailability(domain);
//       return response.available;
//     } catch (error) {
//       console.warn("Domain check failed:", error);
//       // Return random availability for demo
//       return Math.random() > 0.3;
//     }
//   },

//   async getNameSuggestions(query, type) {
//     try {
//       const response = await apiService.getNameSuggestions(query, type);
//       return response.suggestions || [];
//     } catch (error) {
//       console.warn("Name suggestions failed:", error);
//       return [];
//     }
//   },
// };

// Updated nameService.js - Fix the API integration

import { apiService } from "./api";

// Mock data for development/fallback
const mockBabyNames = [
  {
    name: "Aisha",
    meaning: "Living, prosperous",
    origin: "Arabic",
    pronunciation: "AH-ee-shah",
    category: "Traditional",
    popularity: "Popular",
    description:
      'A beautiful name meaning "alive" or "living one", traditionally associated with vitality and prosperity.',
    culturalSignificance:
      "Aisha was the name of Prophet Muhammad's wife, known for her intelligence and scholarship.",
    historicalFigures: ["Aisha bint Abu Bakr"],
    variations: ["Ayesha", "Aishah", "Aisa"],
  },
];

const mockBrandNames = [
  {
    name: "Nexura",
    meaning: "Next-generation solutions",
    category: "Technology",
    description:
      'A modern, tech-forward name combining "next" and "aura" to suggest innovative solutions.',
    domainAvailable: true,
    variations: ["Nexur", "Nexura.io", "Nexuris"],
    targetAudience: "Tech-savvy professionals",
  },
];

export const nameService = {
  // ✅ FIXED: Now properly handles language parameter
  async generateNames(type, formData, languageContext = null) {
    try {
      console.log("🔄 Original form data:", formData);

      // Prepare payload with correct language mapping
      let payload;

      if (languageContext && languageContext.prepareFormDataForAPI) {
        // Use language context to prepare proper API payload
        payload = languageContext.prepareFormDataForAPI(formData);
      } else {
        // Fallback: manual language mapping
        payload = {
          ...formData,
          language: this.mapUILanguageToAPI(formData.language || "en"),
        };
      }

      console.log("📤 Sending API payload:", payload);
      console.log("🌍 Language mapping:", {
        uiLanguage: formData.language,
        apiLanguage: payload.language,
      });

      // Try API first
      let response;
      if (type === "baby") {
        response = await apiService.generateBabyNames(payload);
        await apiService.trackNameGeneration(type, payload);
      } else if (type === "brand") {
        response = await apiService.generateBrandNames(payload);
        await apiService.trackNameGeneration(type, payload);
      }

      // Validate response if language context is available
      if (languageContext && languageContext.validateAPIResponse) {
        response = languageContext.validateAPIResponse(response);
      }

      console.log("📥 API Response received:", {
        success: response?.success,
        language: response?.language,
        count: response?.names?.length || response?.length,
      });

      return response.names || response;
    } catch (error) {
      console.warn("API call failed, using mock data:", error.message);

      // Fallback to mock data with language consideration
      if (type === "baby") {
        return this.generateMockBabyNames(formData);
      } else if (type === "brand") {
        return this.generateMockBrandNames(formData);
      }
    }

    throw new Error("Invalid name generation type");
  },

  // Helper function for manual language mapping
  mapUILanguageToAPI(uiLanguage) {
    const mapping = {
      en: "english",
      ur: "urdu",
      ar: "arabic",
    };

    const apiLanguage = mapping[uiLanguage] || "english";
    console.log("🔄 Manual language mapping:", uiLanguage, "->", apiLanguage);
    return apiLanguage;
  },

  // Rest of your existing methods...
  generateMockBabyNames(formData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let names = [...mockBabyNames];

        // Add mock names based on language
        if (formData.language === "ur" || formData.language === "urdu") {
          names = this.getMockUrduNames();
        } else if (
          formData.language === "ar" ||
          formData.language === "arabic"
        ) {
          names = this.getMockArabicNames();
        }

        resolve(names.slice(0, 20));
      }, 2000);
    });
  },

  generateMockBrandNames(formData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let names = [...mockBrandNames];

        // Add language-specific mock brand names
        if (formData.language === "ur" || formData.language === "urdu") {
          names = this.getMockUrdurBrandNames();
        } else if (
          formData.language === "ar" ||
          formData.language === "arabic"
        ) {
          names = this.getMockArabicBrandNames();
        }

        resolve(names.slice(0, 20));
      }, 2500);
    });
  },

  // Mock data generators for different languages
  getMockUrduNames() {
    return [
      {
        name: "عائشہ",
        meaning: "زندہ، خوشحال",
        origin: "عربی",
        pronunciation: "آئشہ",
        category: "روایتی",
        popularity: "مقبول",
        description:
          "ایک خوبصورت نام جس کا مطلب 'زندہ' یا 'زندہ رہنے والا' ہے۔",
        culturalSignificance:
          "عائشہ حضرت محمد صلی اللہ علیہ وسلم کی بیوی کا نام تھا۔",
        historicalFigures: ["عائشہ بنت ابوبکر"],
        variations: ["آئشہ", "عایشہ"],
      },
    ];
  },

  getMockArabicNames() {
    return [
      {
        name: "عائشة",
        meaning: "الحية، المزدهرة",
        origin: "عربي",
        pronunciation: "عا-ئش-ة",
        category: "تقليدي",
        popularity: "شائع",
        description:
          "اسم جميل يعني 'الحية' أو 'المعيشة'، يرتبط تقليدياً بالحيوية والازدهار.",
        culturalSignificance:
          "عائشة كان اسم زوجة النبي محمد، المعروفة بذكائها وعلمها.",
        historicalFigures: ["عائشة بنت أبي بكر"],
        variations: ["عايشة", "عائشه"],
      },
    ];
  },

  getMockUrdurBrandNames() {
    return [
      {
        name: "نیکسورا",
        meaning: "نئی نسل کے حل",
        category: "ٹیکنالوجی",
        description: "ایک جدید، ٹیک فارورڈ نام جو جدید حل تجویز کرتا ہے۔",
        domainAvailable: true,
        variations: ["نیکسر", "نیکسورا.آئی او"],
        targetAudience: "ٹیک کے ماہر پیشہ ور",
      },
    ];
  },

  getMockArabicBrandNames() {
    return [
      {
        name: "نكسورا",
        meaning: "حلول الجيل القادم",
        category: "التكنولوجيا",
        description: "اسم حديث متقدم تقنياً يقترح حلولاً مبتكرة.",
        domainAvailable: true,
        variations: ["نكسر", "نكسورا.آيو"],
        targetAudience: "المهنيين المتمرسين في التكنولوجيا",
      },
    ];
  },

  async checkDomain(domain) {
    try {
      const response = await apiService.checkDomainAvailability(domain);
      return response.available;
    } catch (error) {
      console.warn("Domain check failed:", error);
      return Math.random() > 0.3;
    }
  },

  async getNameSuggestions(query, type) {
    try {
      const response = await apiService.getNameSuggestions(query, type);
      return response.suggestions || [];
    } catch (error) {
      console.warn("Name suggestions failed:", error);
      return [];
    }
  },
};
