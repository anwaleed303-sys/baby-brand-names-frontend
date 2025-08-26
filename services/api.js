import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("API Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error(
      "API Response Error:",
      error.response?.status,
      error.response?.data
    );

    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login or clear auth
      localStorage.removeItem("auth_token");
    }

    if (error.response?.status === 429) {
      // Rate limited
      throw new Error("Too many requests. Please wait a moment and try again.");
    }

    if (error.response?.status >= 500) {
      // Server error
      throw new Error("Server error. Please try again later.");
    }

    if (error.code === "ECONNABORTED") {
      // Timeout
      throw new Error("Request timed out. Please try again.");
    }

    if (!error.response) {
      // Network error
      throw new Error("Network error. Please check your connection.");
    }

    return Promise.reject(error);
  }
);

// API methods
export const apiService = {
  // Baby names
  generateBabyNames: async (formData) => {
    const response = await api.post("/names/baby", formData);
    return response.data;
  },

  // Brand names
  generateBrandNames: async (formData) => {
    const response = await api.post("/names/brand", formData);
    return response.data;
  },

  // Check domain availability
  checkDomainAvailability: async (domain) => {
    const response = await api.get(
      `/domain/check?domain=${encodeURIComponent(domain)}`
    );
    return response.data;
  },

  // Get name suggestions
  getNameSuggestions: async (query, type) => {
    const response = await api.get(
      `/names/suggestions?q=${encodeURIComponent(query)}&type=${type}`
    );
    return response.data;
  },

  // Get name details
  getNameDetails: async (name, type) => {
    const response = await api.get(
      `/names/details?name=${encodeURIComponent(name)}&type=${type}`
    );
    return response.data;
  },

  // Analytics
  trackNameGeneration: async (type, formData) => {
    try {
      await api.post("/analytics/generation", { type, formData });
    } catch (error) {
      // Non-critical, don't throw
      console.warn("Analytics tracking failed:", error);
    }
  },

  // Feedback
  submitFeedback: async (feedback) => {
    const response = await api.post("/feedback", feedback);
    return response.data;
  },
};

export default api;
