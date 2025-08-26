"use client";

import { useState, useCallback } from "react";
import { nameService } from "../services/nameService";

export function useNameGenerator() {
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const generateNames = useCallback(async (type, formData) => {
    setLoading(true);
    setError(null);

    try {
      const generatedNames = await nameService.generateNames(type, formData);
      setNames(generatedNames);

      // Add to history
      const historyItem = {
        id: Date.now(),
        type,
        formData,
        names: generatedNames,
        timestamp: new Date().toISOString(),
      };
      setHistory((prev) => [historyItem, ...prev.slice(0, 9)]); // Keep last 10 generations
    } catch (err) {
      setError(err.message || "Failed to generate names. Please try again.");
      setNames([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const regenerateNames = useCallback(
    async (type, formData) => {
      await generateNames(type, formData);
    },
    [generateNames]
  );

  const clearNames = useCallback(() => {
    setNames([]);
    setError(null);
  }, []);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  const loadFromHistory = useCallback((historyItem) => {
    setNames(historyItem.names);
    setError(null);
  }, []);

  return {
    loading,
    names,
    error,
    history,
    generateNames,
    regenerateNames,
    clearNames,
    clearHistory,
    loadFromHistory,
  };
}
