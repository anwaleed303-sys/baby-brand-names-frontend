"use client";

import { useState, useEffect, useCallback } from "react";

const FAVORITES_STORAGE_KEY = "nameGenerator_favorites";

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from memory on mount
  useEffect(() => {
    try {
      const stored = JSON.parse(
        localStorage.getItem(FAVORITES_STORAGE_KEY) || "[]"
      );
      setFavorites(stored);
    } catch (error) {
      console.error("Error loading favorites:", error);
      setFavorites([]);
    }
  }, []);

  // Save to memory whenever favorites change
  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch (error) {
      console.error("Error saving favorites:", error);
    }
  }, [favorites]);

  const addToFavorites = useCallback((nameItem) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (fav) => fav.name === nameItem.name && fav.type === nameItem.type
      );
      if (exists) return prev;

      return [...prev, { ...nameItem, id: Date.now() }];
    });
  }, []);

  const removeFromFavorites = useCallback((nameItem) => {
    setFavorites((prev) =>
      prev.filter(
        (fav) => !(fav.name === nameItem.name && fav.type === nameItem.type)
      )
    );
  }, []);

  const toggleFavorite = useCallback((nameItem) => {
    setFavorites((prev) => {
      const exists = prev.some(
        (fav) => fav.name === nameItem.name && fav.type === nameItem.type
      );

      if (exists) {
        return prev.filter(
          (fav) => !(fav.name === nameItem.name && fav.type === nameItem.type)
        );
      } else {
        return [...prev, { ...nameItem, id: Date.now() }];
      }
    });
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  const isFavorite = useCallback(
    (nameItem) => {
      return favorites.some(
        (fav) => fav.name === nameItem.name && fav.type === nameItem.type
      );
    },
    [favorites]
  );

  const getFavoritesByType = useCallback(
    (type) => {
      return favorites.filter((fav) => fav.type === type);
    },
    [favorites]
  );

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    clearFavorites,
    isFavorite,
    getFavoritesByType,
  };
}
