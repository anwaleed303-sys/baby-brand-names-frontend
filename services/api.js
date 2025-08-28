// // // import axios from "axios";

// // // const API_BASE_URL =
// // //   process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// // // // Create axios instance with default config
// // // const api = axios.create({
// // //   baseURL: API_BASE_URL,
// // //   timeout: 30000, // 30 seconds timeout
// // //   headers: {
// // //     "Content-Type": "application/json",
// // //   },
// // // });

// // // // Request interceptor
// // // api.interceptors.request.use(
// // //   (config) => {
// // //     // Add auth token if available
// // //     const token = localStorage.getItem("auth_token");
// // //     if (token) {
// // //       config.headers.Authorization = `Bearer ${token}`;
// // //     }

// // //     console.log("API Request:", config.method?.toUpperCase(), config.url);
// // //     return config;
// // //   },
// // //   (error) => {
// // //     console.error("API Request Error:", error);
// // //     return Promise.reject(error);
// // //   }
// // // );

// // // // Response interceptor
// // // api.interceptors.response.use(
// // //   (response) => {
// // //     console.log("API Response:", response.status, response.config.url);
// // //     return response;
// // //   },
// // //   (error) => {
// // //     console.error(
// // //       "API Response Error:",
// // //       error.response?.status,
// // //       error.response?.data
// // //     );

// // //     // Handle common errors
// // //     if (error.response?.status === 401) {
// // //       // Unauthorized - redirect to login or clear auth
// // //       localStorage.removeItem("auth_token");
// // //     }

// // //     if (error.response?.status === 429) {
// // //       // Rate limited
// // //       throw new Error("Too many requests. Please wait a moment and try again.");
// // //     }

// // //     if (error.response?.status >= 500) {
// // //       // Server error
// // //       throw new Error("Server error. Please try again later.");
// // //     }

// // //     if (error.code === "ECONNABORTED") {
// // //       // Timeout
// // //       throw new Error("Request timed out. Please try again.");
// // //     }

// // //     if (!error.response) {
// // //       // Network error
// // //       throw new Error("Network error. Please check your connection.");
// // //     }

// // //     return Promise.reject(error);
// // //   }
// // // );

// // // // API methods
// // // export const apiService = {
// // //   // Baby names
// // //   generateBabyNames: async (formData) => {
// // //     const response = await api.post("/names/baby", formData);
// // //     return response.data;
// // //   },

// // //   // Brand names
// // //   generateBrandNames: async (formData) => {
// // //     const response = await api.post("/names/brand", formData);
// // //     return response.data;
// // //   },

// // //   // Check domain availability
// // //   checkDomainAvailability: async (domain) => {
// // //     const response = await api.get(
// // //       `/domain/check?domain=${encodeURIComponent(domain)}`
// // //     );
// // //     return response.data;
// // //   },

// // //   // Get name suggestions
// // //   getNameSuggestions: async (query, type) => {
// // //     const response = await api.get(
// // //       `/names/suggestions?q=${encodeURIComponent(query)}&type=${type}`
// // //     );
// // //     return response.data;
// // //   },

// // //   // Get name details
// // //   getNameDetails: async (name, type) => {
// // //     const response = await api.get(
// // //       `/names/details?name=${encodeURIComponent(name)}&type=${type}`
// // //     );
// // //     return response.data;
// // //   },

// // //   // Analytics
// // //   trackNameGeneration: async (type, formData) => {
// // //     try {
// // //       await api.post("/analytics/generation", { type, formData });
// // //     } catch (error) {
// // //       // Non-critical, don't throw
// // //       console.warn("Analytics tracking failed:", error);
// // //     }
// // //   },

// // //   // Feedback
// // //   submitFeedback: async (feedback) => {
// // //     const response = await api.post("/feedback", feedback);
// // //     return response.data;
// // //   },
// // // };

// // // export default api;

// // import axios from "axios";

// // // Update the API_BASE_URL for Vercel deployment
// // const API_BASE_URL =
// //   process.env.NEXT_PUBLIC_API_URL || "baby-brand-names-backend.vercel.app";

// // // Create axios instance with default config
// // const api = axios.create({
// //   baseURL: API_BASE_URL,
// //   timeout: 30000, // 30 seconds timeout
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // });

// // // Request interceptor
// // api.interceptors.request.use(
// //   (config) => {
// //     // Add auth token if available
// //     const token = localStorage.getItem("auth_token");
// //     if (token) {
// //       config.headers.Authorization = `Bearer ${token}`;
// //     }

// //     console.log("API Request:", config.method?.toUpperCase(), config.url);
// //     return config;
// //   },
// //   (error) => {
// //     console.error("API Request Error:", error);
// //     return Promise.reject(error);
// //   }
// // );

// // // Response interceptor
// // api.interceptors.response.use(
// //   (response) => {
// //     console.log("API Response:", response.status, response.config.url);
// //     return response;
// //   },
// //   (error) => {
// //     console.error(
// //       "API Response Error:",
// //       error.response?.status,
// //       error.response?.data
// //     );

// //     // Handle common errors
// //     if (error.response?.status === 401) {
// //       // Unauthorized - redirect to login or clear auth
// //       localStorage.removeItem("auth_token");
// //     }

// //     if (error.response?.status === 429) {
// //       // Rate limited
// //       throw new Error("Too many requests. Please wait a moment and try again.");
// //     }

// //     if (error.response?.status >= 500) {
// //       // Server error
// //       throw new Error("Server error. Please try again later.");
// //     }

// //     if (error.code === "ECONNABORTED") {
// //       // Timeout
// //       throw new Error("Request timed out. Please try again.");
// //     }

// //     if (!error.response) {
// //       // Network error
// //       throw new Error("Network error. Please check your connection.");
// //     }

// //     return Promise.reject(error);
// //   }
// // );

// // // Updated API methods for Vercel serverless functions
// // export const apiService = {
// //   // Baby names - UPDATE: Remove /baby sub-path, use main /names endpoint
// //   generateBabyNames: async (formData) => {
// //     const response = await api.post("/api/names", {
// //       ...formData,
// //       type: "baby",
// //     });
// //     return response.data;
// //   },

// //   // Brand names - UPDATE: Remove /brand sub-path, use main /names endpoint
// //   generateBrandNames: async (formData) => {
// //     const response = await api.post("/api/names", {
// //       ...formData,
// //       type: "brand",
// //     });
// //     return response.data;
// //   },

// //   // Check domain availability - UPDATE: Use POST instead of GET for complex data
// //   checkDomainAvailability: async (domain) => {
// //     const response = await api.post("/api/domain", { domain });
// //     return response.data;
// //   },

// //   // Get name suggestions - UPDATE: Use POST method for better serverless compatibility
// //   getNameSuggestions: async (query, type) => {
// //     const response = await api.post("/api/names", {
// //       action: "suggestions",
// //       query,
// //       type,
// //     });
// //     return response.data;
// //   },

// //   // Get name details - UPDATE: Use POST method
// //   getNameDetails: async (name, type) => {
// //     const response = await api.post("/api/names", {
// //       action: "details",
// //       name,
// //       type,
// //     });
// //     return response.data;
// //   },

// //   // Analytics - WORKS AS IS
// //   trackNameGeneration: async (type, formData) => {
// //     try {
// //       await api.post("/api/analytics", { type, formData });
// //     } catch (error) {
// //       // Non-critical, don't throw
// //       console.warn("Analytics tracking failed:", error);
// //     }
// //   },

// //   // Feedback - WORKS AS IS
// //   submitFeedback: async (feedback) => {
// //     const response = await api.post("/api/feedback", feedback);
// //     return response.data;
// //   },

// //   // NEW: Health check method for testing
// //   healthCheck: async () => {
// //     const response = await api.get("/api/health");
// //     return response.data;
// //   },
// // };

// // export default api;

// import axios from "axios";

// // FIXED: Correct API base URL with https protocol
// const API_BASE_URL = "https://baby-brand-names-backend.vercel.app";

// // Create axios instance with default config
// const api = axios.create({
//   baseURL: API_BASE_URL,
//   timeout: 30000, // 30 seconds timeout
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // FIXED: Remove localStorage usage for Vercel compatibility
// // Request interceptor
// api.interceptors.request.use(
//   (config) => {
//     console.log("API Request:", config.method?.toUpperCase(), config.url);
//     return config;
//   },
//   (error) => {
//     console.error("API Request Error:", error);
//     return Promise.reject(error);
//   }
// );

// // Response interceptor
// api.interceptors.response.use(
//   (response) => {
//     console.log("API Response:", response.status, response.config.url);
//     return response;
//   },
//   (error) => {
//     console.error(
//       "API Response Error:",
//       error.response?.status,
//       error.response?.data || error.message
//     );

//     // Handle common errors
//     if (error.response?.status === 429) {
//       throw new Error("Too many requests. Please wait a moment and try again.");
//     }

//     if (error.response?.status >= 500) {
//       throw new Error("Server error. Please try again later.");
//     }

//     if (error.code === "ECONNABORTED") {
//       throw new Error("Request timed out. Please try again.");
//     }

//     if (!error.response) {
//       throw new Error("Network error. Please check your connection.");
//     }

//     return Promise.reject(error);
//   }
// );

// // FIXED: Updated API methods for Vercel serverless functions
// export const apiService = {
//   // Baby names generation
//   generateBabyNames: async (formData) => {
//     try {
//       console.log("Generating baby names with data:", formData);
//       const response = await api.post("/api/names", {
//         ...formData,
//         type: "baby",
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Baby names generation failed:", error);
//       throw error;
//     }
//   },

//   // Brand names generation
//   generateBrandNames: async (formData) => {
//     try {
//       console.log("Generating brand names with data:", formData);
//       const response = await api.post("/api/names", {
//         ...formData,
//         type: "brand",
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Brand names generation failed:", error);
//       throw error;
//     }
//   },

//   // Check domain availability
//   checkDomainAvailability: async (domain) => {
//     try {
//       const response = await api.post("/api/domain", { domain });
//       return response.data;
//     } catch (error) {
//       console.error("Domain check failed:", error);
//       throw error;
//     }
//   },

//   // Get name suggestions
//   getNameSuggestions: async (query, type) => {
//     try {
//       const response = await api.post("/api/names", {
//         action: "suggestions",
//         query,
//         type,
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Name suggestions failed:", error);
//       throw error;
//     }
//   },

//   // Get name details
//   getNameDetails: async (name, type) => {
//     try {
//       const response = await api.post("/api/names", {
//         action: "details",
//         name,
//         type,
//       });
//       return response.data;
//     } catch (error) {
//       console.error("Name details failed:", error);
//       throw error;
//     }
//   },

//   // Analytics tracking
//   trackNameGeneration: async (type, formData) => {
//     try {
//       await api.post("/api/analytics", { type, formData });
//     } catch (error) {
//       // Non-critical, don't throw
//       console.warn("Analytics tracking failed:", error);
//     }
//   },

//   // Submit feedback
//   submitFeedback: async (feedback) => {
//     try {
//       const response = await api.post("/api/feedback", feedback);
//       return response.data;
//     } catch (error) {
//       console.error("Feedback submission failed:", error);
//       throw error;
//     }
//   },

//   // Health check
//   healthCheck: async () => {
//     try {
//       const response = await api.get("/api/health");
//       return response.data;
//     } catch (error) {
//       console.error("Health check failed:", error);
//       throw error;
//     }
//   },
// };

// export default api;

import axios from "axios";

// FIXED: Correct API base URL
const API_BASE_URL = "https://baby-brand-names-backend.vercel.app";

// Create axios instance with improved config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false, // Important for CORS
});

// Request interceptor with better error handling
api.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.method?.toUpperCase(), config.url);
    console.log("Request Data:", config.data);
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor with enhanced error handling
api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.config.url);
    console.log("Response Data:", response.data);
    return response;
  },
  (error) => {
    console.error("API Response Error:", {
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      url: error.config?.url,
    });

    // Handle common errors with user-friendly messages
    if (error.response?.status === 429) {
      throw new Error("Too many requests. Please wait a moment and try again.");
    }

    if (error.response?.status >= 500) {
      throw new Error("Server error. Please try again later.");
    }

    if (error.code === "ECONNABORTED" || error.code === "TIMEOUT") {
      throw new Error("Request timed out. Please try again.");
    }

    if (!error.response) {
      throw new Error("Network error. Please check your connection.");
    }

    // If response has error message, use it
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }

    return Promise.reject(error);
  }
);

// Enhanced API service with better error handling
export const apiService = {
  // Baby names generation with improved payload handling
  generateBabyNames: async (formData) => {
    try {
      console.log("Generating baby names with data:", formData);

      // Ensure clean payload
      const payload = {
        ...formData,
        type: "baby",
      };

      const response = await api.post("/api/names", payload);

      // Validate response structure
      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to generate baby names");
      }

      return response.data;
    } catch (error) {
      console.error("Baby names generation failed:", error);
      throw new Error(`Baby name generation failed: ${error.message}`);
    }
  },

  // Brand names generation with improved payload handling
  generateBrandNames: async (formData) => {
    try {
      console.log("Generating brand names with data:", formData);

      // Ensure clean payload
      const payload = {
        ...formData,
        type: "brand",
      };

      const response = await api.post("/api/names", payload);

      // Validate response structure
      if (!response.data.success) {
        throw new Error(
          response.data.error || "Failed to generate brand names"
        );
      }

      return response.data;
    } catch (error) {
      console.error("Brand names generation failed:", error);
      throw new Error(`Brand name generation failed: ${error.message}`);
    }
  },

  // Check domain availability
  checkDomainAvailability: async (domain) => {
    try {
      console.log("Checking domain availability for:", domain);

      const response = await api.post("/api/domain", { domain });

      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to check domain");
      }

      return response.data;
    } catch (error) {
      console.error("Domain check failed:", error);
      throw new Error(`Domain check failed: ${error.message}`);
    }
  },

  // Bulk domain check
  bulkCheckDomains: async (domains) => {
    try {
      console.log("Bulk checking domains:", domains);

      const response = await api.post("/api/domain", {
        action: "bulk",
        domains,
      });

      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to check domains");
      }

      return response.data;
    } catch (error) {
      console.error("Bulk domain check failed:", error);
      throw new Error(`Bulk domain check failed: ${error.message}`);
    }
  },

  // Get domain suggestions
  getDomainSuggestions: async (domain) => {
    try {
      console.log("Getting domain suggestions for:", domain);

      const response = await api.post("/api/domain", {
        action: "suggestions",
        domain,
      });

      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to get suggestions");
      }

      return response.data;
    } catch (error) {
      console.error("Domain suggestions failed:", error);
      throw new Error(`Domain suggestions failed: ${error.message}`);
    }
  },

  // Get name suggestions
  getNameSuggestions: async (query, type) => {
    try {
      console.log("Getting name suggestions for:", query, type);

      const response = await api.post("/api/names", {
        action: "suggestions",
        query,
        type,
      });

      if (!response.data.success) {
        throw new Error(
          response.data.error || "Failed to get name suggestions"
        );
      }

      return response.data;
    } catch (error) {
      console.error("Name suggestions failed:", error);
      throw new Error(`Name suggestions failed: ${error.message}`);
    }
  },

  // Get name details
  getNameDetails: async (name, type) => {
    try {
      console.log("Getting name details for:", name, type);

      const response = await api.post("/api/names", {
        action: "details",
        name,
        type,
      });

      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to get name details");
      }

      return response.data;
    } catch (error) {
      console.error("Name details failed:", error);
      throw new Error(`Name details failed: ${error.message}`);
    }
  },

  // Submit feedback
  submitFeedback: async (feedback) => {
    try {
      console.log("Submitting feedback:", feedback);

      const response = await api.post("/api/feedback", feedback);

      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to submit feedback");
      }

      return response.data;
    } catch (error) {
      console.error("Feedback submission failed:", error);
      throw new Error(`Feedback submission failed: ${error.message}`);
    }
  },

  // Get feedback stats
  getFeedbackStats: async () => {
    try {
      console.log("Getting feedback stats");

      const response = await api.get("/api/feedback?action=stats");

      if (!response.data.success) {
        throw new Error(response.data.error || "Failed to get feedback stats");
      }

      return response.data;
    } catch (error) {
      console.error("Feedback stats failed:", error);
      throw new Error(`Feedback stats failed: ${error.message}`);
    }
  },

  // Analytics tracking (non-critical, don't throw on failure)
  // trackNameGeneration: async (type, formData) => {
  //   try {
  //     console.log("Tracking analytics for:", type);

  //     await api.post("/api/analytics", { type, formData });
  //   } catch (error) {
  //     // Non-critical, just log
  //     console.warn("Analytics tracking failed:", error.message);
  //   }
  // },

  // Health check
  healthCheck: async () => {
    try {
      console.log("Performing health check");

      const response = await api.get("/api/health");
      return response.data;
    } catch (error) {
      console.error("Health check failed:", error);
      throw new Error(`Health check failed: ${error.message}`);
    }
  },

  // Test endpoint connection
  testConnection: async () => {
    try {
      console.log("Testing API connection");

      const response = await api.get("/api/names");
      return response.data;
    } catch (error) {
      console.error("Connection test failed:", error);
      throw new Error(`Connection test failed: ${error.message}`);
    }
  },
};

export default api;
