// // import { apiService } from "./api";

// // // Mock data for development/fallback
// // const mockBabyNames = [
// //   {
// //     name: "Aisha",
// //     meaning: "Living, prosperous",
// //     origin: "Arabic",
// //     pronunciation: "AH-ee-shah",
// //     category: "Traditional",
// //     popularity: "Popular",
// //     description:
// //       'A beautiful name meaning "alive" or "living one", traditionally associated with vitality and prosperity.',
// //     culturalSignificance:
// //       "Aisha was the name of Prophet Muhammad's wife, known for her intelligence and scholarship.",
// //     historicalFigures: ["Aisha bint Abu Bakr"],
// //     variations: ["Ayesha", "Aishah", "Aisa"],
// //   },
// //   {
// //     name: "Omar",
// //     meaning: "Flourishing, long-lived",
// //     origin: "Arabic",
// //     pronunciation: "OH-mar",
// //     category: "Traditional",
// //     popularity: "Very Popular",
// //     description:
// //       'A strong name meaning "flourishing" or "long-lived", symbolizing growth and longevity.',
// //     culturalSignificance:
// //       "Named after Umar ibn al-Khattab, the second Caliph of Islam.",
// //     historicalFigures: ["Umar ibn al-Khattab", "Omar Khayyam"],
// //     variations: ["Umar", "Omer", "Omri"],
// //   },
// // ];

// // const mockBrandNames = [
// //   {
// //     name: "Nexura",
// //     meaning: "Next-generation solutions",
// //     category: "Technology",
// //     description:
// //       'A modern, tech-forward name combining "next" and "aura" to suggest innovative solutions.',
// //     domainAvailable: true,
// //     variations: ["Nexur", "Nexura.io", "Nexuris"],
// //     targetAudience: "Tech-savvy professionals",
// //   },
// //   {
// //     name: "Elevate",
// //     meaning: "Rising above, improvement",
// //     category: "Consulting",
// //     description:
// //       "A powerful name that suggests growth, improvement, and reaching new heights.",
// //     domainAvailable: false,
// //     variations: ["ElevateX", "ElevateNow", "Elevata"],
// //     targetAudience: "Businesses seeking growth",
// //   },
// // ];

// // export const nameService = {
// //   async generateNames(type, formData) {
// //     try {
// //       // Try API first
// //       if (type === "baby") {
// //         const response = await apiService.generateBabyNames(formData);
// //         await apiService.trackNameGeneration(type, formData);
// //         return response.names || response;
// //       } else if (type === "brand") {
// //         const response = await apiService.generateBrandNames(formData);
// //         await apiService.trackNameGeneration(type, formData);
// //         return response.names || response;
// //       }
// //     } catch (error) {
// //       console.warn("API call failed, using mock data:", error.message);

// //       // Fallback to mock data with customization
// //       if (type === "baby") {
// //         return this.generateMockBabyNames(formData);
// //       } else if (type === "brand") {
// //         return this.generateMockBrandNames(formData);
// //       }
// //     }

// //     throw new Error("Invalid name generation type");
// //   },

// //   generateMockBabyNames(formData) {
// //     // Simulate API delay
// //     return new Promise((resolve) => {
// //       setTimeout(() => {
// //         let names = [...mockBabyNames];

// //         // Customize based on form data
// //         if (formData.gender === "boy") {
// //           names = names.filter((n) =>
// //             ["Omar", "Ahmed", "Ali", "Hassan"].includes(n.name)
// //           );
// //         } else if (formData.gender === "girl") {
// //           names = names.filter((n) =>
// //             ["Aisha", "Fatima", "Zara", "Layla"].includes(n.name)
// //           );
// //         }

// //         // Add more mock names based on religion
// //         if (formData.religion === "islamic") {
// //           names.push(
// //             {
// //               name: "Zara",
// //               meaning: "Blooming flower, princess",
// //               origin: "Arabic/Hebrew",
// //               pronunciation: "ZAH-rah",
// //               category: "Modern",
// //               popularity: "Very Popular",
// //               description:
// //                 'A beautiful name meaning "blooming flower" in Arabic and "princess" in Hebrew.',
// //               culturalSignificance:
// //                 "Popular across many cultures, symbolizing beauty and nobility.",
// //               historicalFigures: ["Zara Phillips"],
// //               variations: ["Zahra", "Sara", "Zahrah"],
// //             },
// //             {
// //               name: "Adam",
// //               meaning: "Man, earth",
// //               origin: "Arabic/Hebrew",
// //               pronunciation: "AH-dahm",
// //               category: "Traditional",
// //               popularity: "Popular",
// //               description:
// //                 'The first human name, meaning "man" or "from the earth".',
// //               culturalSignificance:
// //                 "Adam is recognized as the first prophet in Islam and the first man in Judeo-Christian tradition.",
// //               historicalFigures: ["Prophet Adam"],
// //               variations: ["Adem", "Adham"],
// //             }
// //           );
// //         }

// //         // Generate 16 more names to reach 20
// //         const additionalNames = this.generateAdditionalMockNames(formData, 16);
// //         names.push(...additionalNames);

// //         resolve(names.slice(0, 20));
// //       }, 2000);
// //     });
// //   },

// //   generateMockBrandNames(formData) {
// //     return new Promise((resolve) => {
// //       setTimeout(() => {
// //         let names = [...mockBrandNames];

// //         // Add industry-specific names
// //         if (formData.industry === "technology") {
// //           names.push(
// //             {
// //               name: "Quantum",
// //               meaning: "Advanced technology",
// //               category: "Technology",
// //               description: "Suggests cutting-edge technology and innovation.",
// //               domainAvailable: false,
// //               variations: ["QuantumX", "QuantumLab", "Quantify"],
// //               targetAudience: "Tech innovators",
// //             },
// //             {
// //               name: "Pixel",
// //               meaning: "Digital excellence",
// //               category: "Technology",
// //               description: "Perfect for digital agencies and tech companies.",
// //               domainAvailable: true,
// //               variations: ["PixelCore", "PixelWave", "Pixelio"],
// //               targetAudience: "Digital natives",
// //             }
// //           );
// //         }

// //         // Generate more names
// //         const additionalNames = this.generateAdditionalBrandNames(formData, 16);
// //         names.push(...additionalNames);

// //         resolve(names.slice(0, 20));
// //       }, 2500);
// //     });
// //   },

// //   generateAdditionalMockNames(formData, count) {
// //     const prefixes = ["Al", "Ibn", "Abd", "Muhammad", "Ahmad"];
// //     const suffixes = ["din", "ullah", "ahmad", "ali", "hassan"];
// //     const meanings = [
// //       "Light",
// //       "Peace",
// //       "Blessed",
// //       "Noble",
// //       "Wise",
// //       "Strong",
// //       "Beautiful",
// //     ];

// //     const names = [];

// //     for (let i = 0; i < count; i++) {
// //       const isLongName = Math.random() > 0.7;
// //       let name;

// //       if (isLongName && formData.religion === "islamic") {
// //         const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
// //         const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
// //         name = `${prefix}${suffix}`;
// //       } else {
// //         // Generate shorter names
// //         const shortNames = [
// //           "Noor",
// //           "Layla",
// //           "Yusuf",
// //           "Maryam",
// //           "Khalil",
// //           "Amina",
// //           "Tariq",
// //           "Safiya",
// //         ];
// //         name = shortNames[Math.floor(Math.random() * shortNames.length)];
// //       }

// //       names.push({
// //         name,
// //         meaning: meanings[Math.floor(Math.random() * meanings.length)],
// //         origin: formData.religion === "islamic" ? "Arabic" : "Various",
// //         pronunciation: name.toLowerCase().replace(/(.)/g, "$1-").slice(0, -1),
// //         category: Math.random() > 0.5 ? "Traditional" : "Modern",
// //         popularity: ["Popular", "Moderate", "Unique"][
// //           Math.floor(Math.random() * 3)
// //         ],
// //         description: `A meaningful name representing ${meanings[
// //           Math.floor(Math.random() * meanings.length)
// //         ].toLowerCase()}.`,
// //         culturalSignificance:
// //           "Rich cultural heritage and spiritual significance.",
// //         variations: [name + "a", name.slice(0, -1), name + "h"].filter(
// //           (v) => v !== name
// //         ),
// //       });
// //     }

// //     return names;
// //   },

// //   generateAdditionalBrandNames(formData, count) {
// //     const techWords = [
// //       "Nexus",
// //       "Vertex",
// //       "Apex",
// //       "Zenith",
// //       "Prime",
// //       "Core",
// //       "Wave",
// //       "Flow",
// //     ];
// //     const businessWords = [
// //       "Pro",
// //       "Max",
// //       "Plus",
// //       "Elite",
// //       "Premium",
// //       "Global",
// //       "Wise",
// //       "Smart",
// //     ];
// //     const endings = ["ly", "ify", "io", "co", "x", "labs", "hub", "pro"];

// //     const names = [];

// //     for (let i = 0; i < count; i++) {
// //       const baseWords =
// //         formData.industry === "technology" ? techWords : businessWords;
// //       const base = baseWords[Math.floor(Math.random() * baseWords.length)];
// //       const ending =
// //         Math.random() > 0.6
// //           ? endings[Math.floor(Math.random() * endings.length)]
// //           : "";
// //       const name = base + ending;

// //       names.push({
// //         name,
// //         meaning: "Innovation and excellence",
// //         category: formData.industry || "Business",
// //         description: `A modern ${
// //           formData.industry || "business"
// //         } name suggesting innovation and growth.`,
// //         domainAvailable: Math.random() > 0.4,
// //         variations: [name + "x", name + "pro", name + "hub"],
// //         targetAudience: formData.targetAudience || "Modern businesses",
// //       });
// //     }

// //     return names;
// //   },

// //   async checkDomain(domain) {
// //     try {
// //       const response = await apiService.checkDomainAvailability(domain);
// //       return response.available;
// //     } catch (error) {
// //       console.warn("Domain check failed:", error);
// //       // Return random availability for demo
// //       return Math.random() > 0.3;
// //     }
// //   },

// //   async getNameSuggestions(query, type) {
// //     try {
// //       const response = await apiService.getNameSuggestions(query, type);
// //       return response.suggestions || [];
// //     } catch (error) {
// //       console.warn("Name suggestions failed:", error);
// //       return [];
// //     }
// //   },
// // };

// // Updated nameService.js - Fix the API integration

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
// ];

// export const nameService = {
//   // ✅ FIXED: Now properly handles language parameter
//   async generateNames(type, formData, languageContext = null) {
//     try {
//       console.log("🔄 Original form data:", formData);

//       // Prepare payload with correct language mapping
//       let payload;

//       if (languageContext && languageContext.prepareFormDataForAPI) {
//         // Use language context to prepare proper API payload
//         payload = languageContext.prepareFormDataForAPI(formData);
//       } else {
//         // Fallback: manual language mapping
//         payload = {
//           ...formData,
//           language: this.mapUILanguageToAPI(formData.language || "en"),
//         };
//       }

//       console.log("📤 Sending API payload:", payload);
//       console.log("🌍 Language mapping:", {
//         uiLanguage: formData.language,
//         apiLanguage: payload.language,
//       });

//       // Try API first
//       let response;
//       if (type === "baby") {
//         response = await apiService.generateBabyNames(payload);
//         await apiService.trackNameGeneration(type, payload);
//       } else if (type === "brand") {
//         response = await apiService.generateBrandNames(payload);
//         await apiService.trackNameGeneration(type, payload);
//       }

//       // Validate response if language context is available
//       if (languageContext && languageContext.validateAPIResponse) {
//         response = languageContext.validateAPIResponse(response);
//       }

//       console.log("📥 API Response received:", {
//         success: response?.success,
//         language: response?.language,
//         count: response?.names?.length || response?.length,
//       });

//       return response.names || response;
//     } catch (error) {
//       console.warn("API call failed, using mock data:", error.message);

//       // Fallback to mock data with language consideration
//       if (type === "baby") {
//         return this.generateMockBabyNames(formData);
//       } else if (type === "brand") {
//         return this.generateMockBrandNames(formData);
//       }
//     }

//     throw new Error("Invalid name generation type");
//   },

//   // Helper function for manual language mapping
//   mapUILanguageToAPI(uiLanguage) {
//     const mapping = {
//       en: "english",
//       ur: "urdu",
//       ar: "arabic",
//     };

//     const apiLanguage = mapping[uiLanguage] || "english";
//     console.log("🔄 Manual language mapping:", uiLanguage, "->", apiLanguage);
//     return apiLanguage;
//   },

//   // Rest of your existing methods...
//   generateMockBabyNames(formData) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         let names = [...mockBabyNames];

//         // Add mock names based on language
//         if (formData.language === "ur" || formData.language === "urdu") {
//           names = this.getMockUrduNames();
//         } else if (
//           formData.language === "ar" ||
//           formData.language === "arabic"
//         ) {
//           names = this.getMockArabicNames();
//         }

//         resolve(names.slice(0, 20));
//       }, 2000);
//     });
//   },

//   generateMockBrandNames(formData) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         let names = [...mockBrandNames];

//         // Add language-specific mock brand names
//         if (formData.language === "ur" || formData.language === "urdu") {
//           names = this.getMockUrdurBrandNames();
//         } else if (
//           formData.language === "ar" ||
//           formData.language === "arabic"
//         ) {
//           names = this.getMockArabicBrandNames();
//         }

//         resolve(names.slice(0, 20));
//       }, 2500);
//     });
//   },

//   // Mock data generators for different languages
//   getMockUrduNames() {
//     return [
//       {
//         name: "عائشہ",
//         meaning: "زندہ، خوشحال",
//         origin: "عربی",
//         pronunciation: "آئشہ",
//         category: "روایتی",
//         popularity: "مقبول",
//         description:
//           "ایک خوبصورت نام جس کا مطلب 'زندہ' یا 'زندہ رہنے والا' ہے۔",
//         culturalSignificance:
//           "عائشہ حضرت محمد صلی اللہ علیہ وسلم کی بیوی کا نام تھا۔",
//         historicalFigures: ["عائشہ بنت ابوبکر"],
//         variations: ["آئشہ", "عایشہ"],
//       },
//     ];
//   },

//   getMockArabicNames() {
//     return [
//       {
//         name: "عائشة",
//         meaning: "الحية، المزدهرة",
//         origin: "عربي",
//         pronunciation: "عا-ئش-ة",
//         category: "تقليدي",
//         popularity: "شائع",
//         description:
//           "اسم جميل يعني 'الحية' أو 'المعيشة'، يرتبط تقليدياً بالحيوية والازدهار.",
//         culturalSignificance:
//           "عائشة كان اسم زوجة النبي محمد، المعروفة بذكائها وعلمها.",
//         historicalFigures: ["عائشة بنت أبي بكر"],
//         variations: ["عايشة", "عائشه"],
//       },
//     ];
//   },

//   getMockUrdurBrandNames() {
//     return [
//       {
//         name: "نیکسورا",
//         meaning: "نئی نسل کے حل",
//         category: "ٹیکنالوجی",
//         description: "ایک جدید، ٹیک فارورڈ نام جو جدید حل تجویز کرتا ہے۔",
//         domainAvailable: true,
//         variations: ["نیکسر", "نیکسورا.آئی او"],
//         targetAudience: "ٹیک کے ماہر پیشہ ور",
//       },
//     ];
//   },

//   getMockArabicBrandNames() {
//     return [
//       {
//         name: "نكسورا",
//         meaning: "حلول الجيل القادم",
//         category: "التكنولوجيا",
//         description: "اسم حديث متقدم تقنياً يقترح حلولاً مبتكرة.",
//         domainAvailable: true,
//         variations: ["نكسر", "نكسورا.آيو"],
//         targetAudience: "المهنيين المتمرسين في التكنولوجيا",
//       },
//     ];
//   },

//   async checkDomain(domain) {
//     try {
//       const response = await apiService.checkDomainAvailability(domain);
//       return response.available;
//     } catch (error) {
//       console.warn("Domain check failed:", error);
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

import { apiService } from "./api";

// Enhanced mock data with comprehensive language support
const mockBabyNames = {
  english: [
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
    {
      name: "Fatima",
      meaning: "Captivating, abstainer",
      origin: "Arabic",
      pronunciation: "FAH-ti-mah",
      category: "Traditional",
      popularity: "Popular",
      description:
        "A revered name in Islamic culture meaning 'captivating' or 'one who abstains'.",
      culturalSignificance:
        "Name of Prophet Muhammad's beloved daughter, known for her purity and devotion.",
      historicalFigures: ["Fatima al-Zahra"],
      variations: ["Fatimah", "Fatma"],
    },
    {
      name: "Omar",
      meaning: "Flourishing, thriving",
      origin: "Arabic",
      pronunciation: "OH-mar",
      category: "Traditional",
      popularity: "Popular",
      description: "A strong name meaning prosperity and flourishing life.",
      culturalSignificance:
        "Name of the second Caliph, known for his justice and leadership.",
      historicalFigures: ["Omar ibn al-Khattab"],
      variations: ["Umar", "Omer"],
    },
    {
      name: "Hassan",
      meaning: "Handsome, good",
      origin: "Arabic",
      pronunciation: "HAH-san",
      category: "Traditional",
      popularity: "Popular",
      description:
        "A name meaning 'handsome' or 'good', representing beauty and virtue.",
      culturalSignificance: "Name of Prophet Muhammad's grandson.",
      historicalFigures: ["Hassan ibn Ali"],
      variations: ["Hasan", "Hassaan"],
    },
    {
      name: "Zainab",
      meaning: "Fragrant flower",
      origin: "Arabic",
      pronunciation: "ZAY-nab",
      category: "Traditional",
      popularity: "Popular",
      description:
        "A name meaning 'fragrant flower', symbolizing beauty and grace.",
      culturalSignificance:
        "Name of Prophet Muhammad's daughter and granddaughter.",
      historicalFigures: ["Zainab bint Muhammad"],
      variations: ["Zaynab", "Zeinab"],
    },
  ],
  urdu: [
    {
      name: "عائشہ",
      meaning: "زندہ، خوشحال",
      origin: "عربی",
      pronunciation: "آئشہ",
      category: "روایتی",
      popularity: "مقبول",
      description: "ایک خوبصورت نام جس کا مطلب 'زندہ' یا 'زندہ رہنے والا' ہے۔",
      culturalSignificance:
        "عائشہ حضرت محمد صلی اللہ علیہ وسلم کی بیوی کا نام تھا۔",
      historicalFigures: ["عائشہ بنت ابوبکر"],
      variations: ["آئشہ", "عایشہ"],
    },
    {
      name: "فاطمہ",
      meaning: "دل کش، پرہیزگار",
      origin: "عربی",
      pronunciation: "فاطمہ",
      category: "روایتی",
      popularity: "مقبول",
      description: "اسلامی ثقافت میں ایک محترم نام۔",
      culturalSignificance: "حضرت محمد صلی اللہ علیہ وسلم کی بیٹی کا نام۔",
      historicalFigures: ["فاطمہ الزہرا"],
      variations: ["فاطمہ", "فاطمہ"],
    },
    {
      name: "عمر",
      meaning: "ترقی، خوشحالی",
      origin: "عربی",
      pronunciation: "عمر",
      category: "روایتی",
      popularity: "مقبول",
      description: "ایک مضبوط نام جس کا مطلب خوشحالی ہے۔",
      culturalSignificance: "دوسرے خلیفہ کا نام۔",
      historicalFigures: ["عمر بن خطاب"],
      variations: ["عمر", "عامر"],
    },
    {
      name: "حسن",
      meaning: "خوبصورت، اچھا",
      origin: "عربی",
      pronunciation: "حسن",
      category: "روایتی",
      popularity: "مقبول",
      description: "خوبصورتی اور اچھائی کا نام۔",
      culturalSignificance: "حضرت محمد کے نواسے کا نام۔",
      historicalFigures: ["حسن بن علی"],
      variations: ["حسن", "حسان"],
    },
    {
      name: "زینب",
      meaning: "خوشبودار پھول",
      origin: "عربی",
      pronunciation: "زینب",
      category: "روایتی",
      popularity: "مقبول",
      description: "خوبصورتی اور حسن کا نام۔",
      culturalSignificance: "حضرت محمد کی بیٹی کا نام۔",
      historicalFigures: ["زینب بنت محمد"],
      variations: ["زینب", "زینبا"],
    },
  ],
  arabic: [
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
    {
      name: "فاطمة",
      meaning: "الآسرة، المتمسكة",
      origin: "عربي",
      pronunciation: "فا-ط-مة",
      category: "تقليدي",
      popularity: "شائع",
      description: "اسم محترم في الثقافة الإسلامية.",
      culturalSignificance: "اسم ابنة النبي محمد المحبوبة.",
      historicalFigures: ["فاطمة الزهراء"],
      variations: ["فاطمه", "فطمة"],
    },
    {
      name: "عمر",
      meaning: "المزدهر، النامي",
      origin: "عربي",
      pronunciation: "عمر",
      category: "تقليدي",
      popularity: "شائع",
      description: "اسم قوي يعني الازدهار والنمو.",
      culturalSignificance: "اسم الخليفة الثاني.",
      historicalFigures: ["عمر بن الخطاب"],
      variations: ["عمر", "عامر"],
    },
    {
      name: "حسن",
      meaning: "الجميل، الحسن",
      origin: "عربي",
      pronunciation: "حسن",
      category: "تقليدي",
      popularity: "شائع",
      description: "اسم يعني الجمال والحسن.",
      culturalSignificance: "اسم سبط النبي محمد.",
      historicalFigures: ["الحسن بن علي"],
      variations: ["حسن", "حسان"],
    },
    {
      name: "زينب",
      meaning: "الزهرة العطرة",
      origin: "عربي",
      pronunciation: "زي-نب",
      category: "تقليدي",
      popularity: "شائع",
      description: "اسم يعني الزهرة العطرة، رمز للجمال والنعمة.",
      culturalSignificance: "اسم ابنة وحفيدة النبي محمد.",
      historicalFigures: ["زينب بنت محمد"],
      variations: ["زينب", "زينبة"],
    },
  ],
};

const mockBrandNames = {
  english: [
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
    {
      name: "Innovex",
      meaning: "Innovation and excellence",
      category: "Business",
      description:
        "Combines innovation with excellence to create a powerful brand identity.",
      domainAvailable: true,
      variations: ["Innovex.co", "Innovex.app"],
      targetAudience: "Modern businesses",
    },
    {
      name: "TechFlow",
      meaning: "Seamless technology experience",
      category: "Technology",
      description: "Modern flow-based solutions for contemporary challenges.",
      domainAvailable: true,
      variations: ["TechFlow.ai", "TechFlowPro"],
      targetAudience: "Tech startups",
    },
    {
      name: "BrandVibe",
      meaning: "Strong brand energy",
      category: "Marketing",
      description:
        "A name that captures the essence of brand energy and vibration.",
      domainAvailable: true,
      variations: ["BrandVibe.co", "VibeCore"],
      targetAudience: "Creative agencies",
    },
    {
      name: "Synaptix",
      meaning: "Connected intelligence",
      category: "AI/Tech",
      description:
        "Inspired by neural connections, perfect for AI and tech companies.",
      domainAvailable: true,
      variations: ["Synaptix.ai", "SynapCore"],
      targetAudience: "AI companies",
    },
  ],
  urdu: [
    {
      name: "نیکسورا",
      meaning: "نئی نسل کے حل",
      category: "ٹیکنالوجی",
      description: "ایک جدید، ٹیک فارورڈ نام جو جدید حل تجویز کرتا ہے۔",
      domainAvailable: true,
      variations: ["نیکسر", "نیکسورا.آئی او"],
      targetAudience: "ٹیک کے ماہر پیشہ ور",
    },
    {
      name: "انوویکس",
      meaning: "جدت اور بہتری",
      category: "کاروبار",
      description: "جدت اور بہتری کو ملاتا ہے۔",
      domainAvailable: true,
      variations: ["انوویکس.کو", "انوویکس.ایپ"],
      targetAudience: "جدید کاروبار",
    },
    {
      name: "ٹیک فلو",
      meaning: "ہموار ٹیکنالوجی",
      category: "ٹیکنالوجی",
      description: "جدید فلو بیسڈ حل۔",
      domainAvailable: true,
      variations: ["ٹیک فلو.ای آئی", "ٹیک فلو پرو"],
      targetAudience: "ٹیک اسٹارٹ اپس",
    },
  ],
  arabic: [
    {
      name: "نكسورا",
      meaning: "حلول الجيل القادم",
      category: "التكنولوجيا",
      description: "اسم حديث متقدم تقنياً يقترح حلولاً مبتكرة.",
      domainAvailable: true,
      variations: ["نكسر", "نكسورا.آيو"],
      targetAudience: "المهنيين المتمرسين في التكنولوجيا",
    },
    {
      name: "إنوفكس",
      meaning: "الابتكار والتميز",
      category: "الأعمال",
      description: "يجمع بين الابتكار والتميز.",
      domainAvailable: true,
      variations: ["إنوفكس.كو", "إنوفكس.أب"],
      targetAudience: "الأعمال الحديثة",
    },
    {
      name: "تك فلو",
      meaning: "تجربة تقنية سلسة",
      category: "التكنولوجيا",
      description: "حلول حديثة قائمة على التدفق.",
      domainAvailable: true,
      variations: ["تك فلو.آي", "تك فلو برو"],
      targetAudience: "الشركات التقنية الناشئة",
    },
  ],
};

export const nameService = {
  // Main name generation method with comprehensive error handling
  async generateNames(type, formData, languageContext = null) {
    try {
      console.log("🔄 Starting name generation with:", {
        type,
        formData,
        hasLanguageContext: !!languageContext,
      });

      // Prepare payload with proper language mapping
      let payload = { ...formData };

      // Handle language context if provided
      if (
        languageContext &&
        typeof languageContext.prepareFormDataForAPI === "function"
      ) {
        try {
          payload = languageContext.prepareFormDataForAPI(formData);
          console.log("✅ Language context processed payload");
        } catch (contextError) {
          console.warn(
            "⚠️ Language context failed, using fallback:",
            contextError.message
          );
          payload.language = this.mapUILanguageToAPI(formData.language);
        }
      } else if (formData.language) {
        // Manual language mapping fallback
        payload.language = this.mapUILanguageToAPI(formData.language);
      }

      console.log("📤 API Payload prepared:", payload);

      // Try API first with timeout and retries
      let response;
      try {
        const apiCall =
          type === "baby"
            ? apiService.generateBabyNames(payload)
            : apiService.generateBrandNames(payload);

        response = await Promise.race([
          apiCall,
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("API timeout")), 25000)
          ),
        ]);

        // Validate API response structure
        if (!response || typeof response !== "object") {
          throw new Error("Invalid response structure");
        }

        if (!response.success) {
          throw new Error(
            response.error ||
              response.message ||
              "API returned unsuccessful response"
          );
        }

        if (!Array.isArray(response.names) || response.names.length === 0) {
          throw new Error("No names returned from API");
        }

        // Validate response if language context is available
        if (
          languageContext &&
          typeof languageContext.validateAPIResponse === "function"
        ) {
          try {
            response = languageContext.validateAPIResponse(response);
            console.log("✅ Language context validated response");
          } catch (validationError) {
            console.warn(
              "⚠️ Language context validation failed:",
              validationError.message
            );
          }
        }

        // Track analytics (non-critical)
        try {
          await apiService.trackNameGeneration(type, payload);
        } catch (analyticsError) {
          console.warn("📊 Analytics tracking failed:", analyticsError.message);
        }

        console.log("📥 API Success:", {
          success: response.success,
          language: response.language,
          count: response.names.length,
        });

        // Ensure names have required structure
        const processedNames = response.names.map((name, index) => ({
          id: name.id || Date.now() + index,
          type: name.type || type,
          ...name,
        }));

        return processedNames;
      } catch (apiError) {
        console.warn("🚫 API call failed:", apiError.message);

        // Determine if this is a network error vs server error
        const isNetworkError =
          apiError.message.includes("Network") ||
          apiError.message.includes("timeout") ||
          apiError.message.includes("ECONNABORTED");

        if (isNetworkError) {
          console.log("🌐 Network issue detected, using mock data");
        } else {
          console.log("🔧 Server issue detected, using mock data");
        }

        // Fallback to mock data
        return await this.generateMockNames(type, formData);
      }
    } catch (error) {
      console.error("❌ Name generation failed completely:", error);

      // Last resort: try mock data
      try {
        return await this.generateMockNames(type, formData);
      } catch (mockError) {
        console.error("❌ Even mock data failed:", mockError);
        throw new Error(`Failed to generate ${type} names: ${error.message}`);
      }
    }
  },

  // Generate mock names with language support
  async generateMockNames(type, formData) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          const language = this.normalizeLanguage(
            formData.language || "english"
          );
          let names = [];

          if (type === "baby") {
            names = mockBabyNames[language] || mockBabyNames.english;
          } else if (type === "brand") {
            names = mockBrandNames[language] || mockBrandNames.english;
          } else {
            reject(new Error(`Invalid type: ${type}`));
            return;
          }

          // Add IDs and type to mock names
          const processedNames = names.map((name, index) => ({
            id: Date.now() + index,
            type,
            ...name,
          }));

          console.log(
            `🎭 Using ${language} mock data for ${type} names:`,
            processedNames.length
          );
          resolve(processedNames.slice(0, Math.min(10, processedNames.length)));
        }, 1500); // Simulate API delay
      } catch (error) {
        reject(new Error(`Mock data generation failed: ${error.message}`));
      }
    });
  },

  // Helper function to normalize language codes
  normalizeLanguage(language) {
    if (!language || typeof language !== "string") {
      return "english";
    }

    const normalizedLang = language.toLowerCase().trim();
    const mapping = {
      ur: "urdu",
      urdu: "urdu",
      اردو: "urdu",
      ar: "arabic",
      arabic: "arabic",
      عربي: "arabic",
      عربی: "arabic",
      en: "english",
      english: "english",
      انگریزی: "english",
    };

    return mapping[normalizedLang] || "english";
  },

  // Helper function for manual language mapping (API format)
  mapUILanguageToAPI(uiLanguage) {
    if (!uiLanguage || typeof uiLanguage !== "string") {
      return "english";
    }

    const mapping = {
      en: "english",
      ur: "urdu",
      ar: "arabic",
      english: "english",
      urdu: "urdu",
      arabic: "arabic",
      اردو: "urdu",
      عربي: "arabic",
      عربی: "arabic",
      انگریزی: "english",
    };

    const apiLanguage = mapping[uiLanguage.toLowerCase().trim()] || "english";
    console.log("🔄 Language mapping:", uiLanguage, "->", apiLanguage);
    return apiLanguage;
  },

  // Check single domain availability
  async checkDomain(domain) {
    if (!domain || typeof domain !== "string" || !domain.trim()) {
      console.error("Invalid domain provided:", domain);
      return false;
    }

    try {
      console.log("🌐 Checking domain:", domain);
      const response = await apiService.checkDomainAvailability(domain.trim());

      if (response && typeof response.available === "boolean") {
        return response.available;
      }

      // Fallback if response structure is unclear
      return response.available !== false;
    } catch (error) {
      console.warn("🚫 Domain check failed:", error.message);
      // Return random availability as fallback (slightly optimistic)
      return Math.random() > 0.3;
    }
  },

  // Bulk check multiple domains
  async bulkCheckDomains(domains) {
    if (!Array.isArray(domains) || domains.length === 0) {
      console.error("Invalid domains array:", domains);
      return [];
    }

    try {
      console.log("🌐 Bulk checking domains:", domains.length, "domains");
      const response = await apiService.bulkCheckDomains(domains);

      if (response && response.success && Array.isArray(response.results)) {
        return response.results;
      }

      throw new Error("Invalid bulk check response");
    } catch (error) {
      console.warn("🚫 Bulk domain check failed:", error.message);

      // Return mock results as fallback
      return domains.map((domain) => ({
        domain,
        available: Math.random() > 0.3,
        price: `$${Math.floor(Math.random() * 50) + 10}/year`,
        registrar: "Mock Registrar",
        status: Math.random() > 0.3 ? "available" : "taken",
        checkedAt: new Date().toISOString(),
      }));
    }
  },

  // Get domain suggestions
  async getDomainSuggestions(baseDomain) {
    if (!baseDomain || typeof baseDomain !== "string" || !baseDomain.trim()) {
      console.error("Invalid base domain:", baseDomain);
      return [];
    }

    try {
      console.log("💡 Getting domain suggestions for:", baseDomain);
      const response = await apiService.getDomainSuggestions(baseDomain.trim());

      if (response && response.success && Array.isArray(response.suggestions)) {
        return response.suggestions;
      }

      throw new Error("Invalid suggestions response");
    } catch (error) {
      console.warn("🚫 Domain suggestions failed:", error.message);

      // Generate mock suggestions as fallback
      const extensions = [".com", ".net", ".org", ".io", ".co", ".app"];
      const prefixes = ["get", "my", "the", "try", ""];
      const suffixes = ["app", "pro", "hub", "tech", ""];

      const suggestions = [];
      const cleanBase = baseDomain.trim().toLowerCase();

      for (let i = 0; i < 8; i++) {
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const ext = extensions[Math.floor(Math.random() * extensions.length)];

        const suggestion = `${prefix}${cleanBase}${suffix}${ext}`;
        if (!suggestions.find((s) => s.domain === suggestion)) {
          suggestions.push({
            domain: suggestion,
            available: Math.random() > 0.4,
            price: `$${Math.floor(Math.random() * 50) + 10}/year`,
            registrar: "Mock Registrar",
            status: Math.random() > 0.4 ? "available" : "taken",
          });
        }
      }

      return suggestions;
    }
  },

  // Get name suggestions based on query
  async getNameSuggestions(query, type) {
    if (!query || typeof query !== "string" || !query.trim()) {
      console.error("Invalid query for suggestions:", query);
      return [];
    }

    if (!type || !["baby", "brand"].includes(type)) {
      console.error("Invalid type for suggestions:", type);
      return [];
    }

    try {
      console.log("💡 Getting name suggestions for:", query, type);
      const response = await apiService.getNameSuggestions(query.trim(), type);

      if (response && response.success && Array.isArray(response.suggestions)) {
        return response.suggestions;
      }

      throw new Error("Invalid suggestions response");
    } catch (error) {
      console.warn("🚫 Name suggestions failed:", error.message);

      // Generate mock suggestions as fallback
      const cleanQuery = query.trim();
      return [
        { name: cleanQuery + "Pro", reason: "Professional variant" },
        { name: cleanQuery + "X", reason: "Modern variant" },
        { name: cleanQuery + "Plus", reason: "Enhanced version" },
        { name: "Super" + cleanQuery, reason: "Empowered version" },
        { name: cleanQuery + "Max", reason: "Maximum potential" },
        { name: cleanQuery + "Elite", reason: "Premium version" },
        { name: "Ultra" + cleanQuery, reason: "Advanced version" },
        { name: cleanQuery + "Core", reason: "Essential version" },
      ].slice(0, 5);
    }
  },

  // Get detailed information about a name
  async getNameDetails(name, type) {
    if (!name || typeof name !== "string" || !name.trim()) {
      console.error("Invalid name for details:", name);
      return null;
    }

    try {
      console.log("📖 Getting name details for:", name, type);
      const response = await apiService.getNameDetails(name.trim(), type);

      if (response && response.success) {
        return {
          etymology:
            response.etymology || `Rich historical background for ${name}`,
          culturalSignificance:
            response.culturalSignificance || "Significant cultural meaning",
          famousPeople: response.famousPeople || [
            `Famous person named ${name}`,
          ],
          interestingFacts: response.interestingFacts || [
            `Interesting fact about ${name}`,
          ],
          modernUsage: response.modernUsage || "Popular in contemporary usage",
        };
      }

      throw new Error("Invalid details response");
    } catch (error) {
      console.warn("🚫 Name details failed:", error.message);

      // Return mock details as fallback
      const cleanName = name.trim();
      return {
        etymology: `The name ${cleanName} has a rich etymological history spanning centuries`,
        culturalSignificance: `${cleanName} holds special significance in various cultures and traditions`,
        famousPeople: [
          `Notable historical figure named ${cleanName}`,
          `Contemporary celebrity ${cleanName}`,
        ],
        interestingFacts: [
          `${cleanName} is associated with positive traits and characteristics`,
          `The name ${cleanName} has variations in multiple languages`,
          `${cleanName} has been popular in different time periods`,
        ],
        modernUsage: `${cleanName} continues to be relevant and used in modern contexts`,
      };
    }
  },

  // Submit feedback
  async submitFeedback(feedback) {
    if (!feedback || typeof feedback !== "object") {
      throw new Error("Invalid feedback data");
    }

    if (!feedback.message && !feedback.rating) {
      throw new Error("Either feedback message or rating is required");
    }

    try {
      console.log("💬 Submitting feedback:", {
        hasMessage: !!feedback.message,
        rating: feedback.rating,
        type: feedback.type,
      });

      const response = await apiService.submitFeedback(feedback);

      if (response && response.success) {
        return response;
      }

      throw new Error(response.error || "Failed to submit feedback");
    } catch (error) {
      console.error("🚫 Feedback submission failed:", error.message);
      throw new Error(`Failed to submit feedback: ${error.message}`);
    }
  },

  // Test API connection
  async testConnection() {
    try {
      console.log("🔍 Testing API connection...");
      const response = await apiService.testConnection();
      console.log("✅ Connection test successful:", response);
      return {
        success: true,
        message: "API connection working",
        data: response,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error("🚫 Connection test failed:", error.message);
      return {
        success: false,
        message: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  },

  // Get health status of the service
  async getHealthStatus() {
    try {
      console.log("🏥 Checking service health...");
      const response = await apiService.healthCheck();
      return {
        success: true,
        message: "Service healthy",
        data: response,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      console.error("🚫 Health check failed:", error.message);
      return {
        success: false,
        message: error.message,
        timestamp: new Date().toISOString(),
      };
    }
  },

  // Utility function to validate name data structure
  validateNameData(names) {
    if (!Array.isArray(names)) {
      return false;
    }

    return names.every((name) => {
      return (
        name &&
        typeof name === "object" &&
        typeof name.name === "string" &&
        name.name.trim().length > 0
      );
    });
  },

  // Utility function to clean and format names
  formatNames(names, type) {
    if (!Array.isArray(names)) {
      return [];
    }

    return names.map((name, index) => ({
      id: name.id || Date.now() + index,
      type: name.type || type,
      name: name.name ? name.name.trim() : `Name ${index + 1}`,
      meaning: name.meaning || "Unknown meaning",
      origin: name.origin || "Unknown origin",
      pronunciation: name.pronunciation || name.name,
      category: name.category || "General",
      popularity: name.popularity || "Unknown",
      description: name.description || "No description available",
      culturalSignificance: name.culturalSignificance || "",
      historicalFigures: Array.isArray(name.historicalFigures)
        ? name.historicalFigures
        : [],
      variations: Array.isArray(name.variations) ? name.variations : [],
      // Brand-specific fields
      ...(type === "brand" && {
        domainAvailable:
          typeof name.domainAvailable === "boolean"
            ? name.domainAvailable
            : true,
        targetAudience: name.targetAudience || "General audience",
      }),
    }));
  },

  // Generate language-specific variations of a name
  generateNameVariations(baseName, language = "english") {
    if (!baseName || typeof baseName !== "string") {
      return [];
    }

    const variations = [];
    const cleanBase = baseName.trim();

    switch (language.toLowerCase()) {
      case "urdu":
      case "ur":
        // Add common Urdu name patterns
        variations.push(`${cleanBase} احمد`);
        variations.push(`${cleanBase} علی`);
        variations.push(`محمد ${cleanBase}`);
        break;

      case "arabic":
      case "ar":
        // Add common Arabic name patterns
        variations.push(`${cleanBase} الدین`);
        variations.push(`عبد ${cleanBase}`);
        variations.push(`${cleanBase} اللہ`);
        break;

      default:
        // English variations
        variations.push(`${cleanBase}a`);
        variations.push(`${cleanBase}ah`);
        variations.push(`${cleanBase}ia`);
        if (cleanBase.length > 4) {
          variations.push(cleanBase.slice(0, -1) + "y");
        }
    }

    return variations.slice(0, 3);
  },

  // Search names by criteria
  searchNames(names, criteria) {
    if (!Array.isArray(names) || !criteria) {
      return names || [];
    }

    const { query, category, origin, popularity, minLength, maxLength } =
      criteria;

    let filtered = [...names];

    if (query && typeof query === "string") {
      const searchTerm = query.toLowerCase().trim();
      filtered = filtered.filter(
        (name) =>
          name.name.toLowerCase().includes(searchTerm) ||
          name.meaning.toLowerCase().includes(searchTerm) ||
          name.origin.toLowerCase().includes(searchTerm)
      );
    }

    if (category) {
      filtered = filtered.filter(
        (name) => name.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (origin) {
      filtered = filtered.filter(
        (name) => name.origin.toLowerCase() === origin.toLowerCase()
      );
    }

    if (popularity) {
      filtered = filtered.filter(
        (name) => name.popularity.toLowerCase() === popularity.toLowerCase()
      );
    }

    if (minLength && typeof minLength === "number") {
      filtered = filtered.filter((name) => name.name.length >= minLength);
    }

    if (maxLength && typeof maxLength === "number") {
      filtered = filtered.filter((name) => name.name.length <= maxLength);
    }

    return filtered;
  },

  // Get popular names by category
  getPopularNamesByCategory(type, language = "english") {
    const normalizedLang = this.normalizeLanguage(language);
    const sourceData = type === "baby" ? mockBabyNames : mockBrandNames;
    const names = sourceData[normalizedLang] || sourceData.english;

    const categories = {};
    names.forEach((name) => {
      if (!categories[name.category]) {
        categories[name.category] = [];
      }
      categories[name.category].push(name);
    });

    return categories;
  },

  // Get name statistics
  getNameStatistics(names) {
    if (!Array.isArray(names) || names.length === 0) {
      return {
        total: 0,
        categories: {},
        origins: {},
        averageLength: 0,
        popularityDistribution: {},
      };
    }

    const stats = {
      total: names.length,
      categories: {},
      origins: {},
      lengths: [],
      popularityDistribution: {},
    };

    names.forEach((name) => {
      // Categories
      if (name.category) {
        stats.categories[name.category] =
          (stats.categories[name.category] || 0) + 1;
      }

      // Origins
      if (name.origin) {
        stats.origins[name.origin] = (stats.origins[name.origin] || 0) + 1;
      }

      // Lengths
      if (name.name) {
        stats.lengths.push(name.name.length);
      }

      // Popularity
      if (name.popularity) {
        stats.popularityDistribution[name.popularity] =
          (stats.popularityDistribution[name.popularity] || 0) + 1;
      }
    });

    // Calculate average length
    stats.averageLength =
      stats.lengths.length > 0
        ? Math.round(
            (stats.lengths.reduce((a, b) => a + b, 0) / stats.lengths.length) *
              10
          ) / 10
        : 0;

    return stats;
  },
};
