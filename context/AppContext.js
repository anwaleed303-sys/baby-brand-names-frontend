  "use client";

  import { createContext, useContext, useReducer, useCallback } from "react";

  // Initial state
  const initialState = {
    user: null,
    preferences: {
      theme: "dark",
      notifications: true,
      autoSave: true,
    },
    ui: {
      sidebarOpen: false,
      loading: false,
      errors: [],
    },
    data: {
      recentSearches: [],
      savedFilters: [],
    },
  };

  // Action types
  const ActionTypes = {
    SET_USER: "SET_USER",
    UPDATE_PREFERENCES: "UPDATE_PREFERENCES",
    TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR",
    SET_LOADING: "SET_LOADING",
    ADD_ERROR: "ADD_ERROR",
    REMOVE_ERROR: "REMOVE_ERROR",
    CLEAR_ERRORS: "CLEAR_ERRORS",
    ADD_RECENT_SEARCH: "ADD_RECENT_SEARCH",
    CLEAR_RECENT_SEARCHES: "CLEAR_RECENT_SEARCHES",
    SAVE_FILTER: "SAVE_FILTER",
    REMOVE_SAVED_FILTER: "REMOVE_SAVED_FILTER",
  };

  // Reducer
  function appReducer(state, action) {
    switch (action.type) {
      case ActionTypes.SET_USER:
        return {
          ...state,
          user: action.payload,
        };

      case ActionTypes.UPDATE_PREFERENCES:
        return {
          ...state,
          preferences: {
            ...state.preferences,
            ...action.payload,
          },
        };

      case ActionTypes.TOGGLE_SIDEBAR:
        return {
          ...state,
          ui: {
            ...state.ui,
            sidebarOpen: !state.ui.sidebarOpen,
          },
        };

      case ActionTypes.SET_LOADING:
        return {
          ...state,
          ui: {
            ...state.ui,
            loading: action.payload,
          },
        };

      case ActionTypes.ADD_ERROR:
        return {
          ...state,
          ui: {
            ...state.ui,
            errors: [
              ...state.ui.errors,
              {
                id: Date.now(),
                message: action.payload.message,
                type: action.payload.type || "error",
                timestamp: new Date().toISOString(),
              },
            ],
          },
        };

      case ActionTypes.REMOVE_ERROR:
        return {
          ...state,
          ui: {
            ...state.ui,
            errors: state.ui.errors.filter(
              (error) => error.id !== action.payload
            ),
          },
        };

      case ActionTypes.CLEAR_ERRORS:
        return {
          ...state,
          ui: {
            ...state.ui,
            errors: [],
          },
        };

      case ActionTypes.ADD_RECENT_SEARCH:
        const newSearch = {
          id: Date.now(),
          query: action.payload.query,
          type: action.payload.type,
          timestamp: new Date().toISOString(),
        };

        return {
          ...state,
          data: {
            ...state.data,
            recentSearches: [newSearch, ...state.data.recentSearches.slice(0, 9)], // Keep last 10
          },
        };

      case ActionTypes.CLEAR_RECENT_SEARCHES:
        return {
          ...state,
          data: {
            ...state.data,
            recentSearches: [],
          },
        };

      case ActionTypes.SAVE_FILTER:
        const newFilter = {
          id: Date.now(),
          name: action.payload.name,
          filters: action.payload.filters,
          type: action.payload.type,
          timestamp: new Date().toISOString(),
        };

        return {
          ...state,
          data: {
            ...state.data,
            savedFilters: [newFilter, ...state.data.savedFilters.slice(0, 4)], // Keep last 5
          },
        };

      case ActionTypes.REMOVE_SAVED_FILTER:
        return {
          ...state,
          data: {
            ...state.data,
            savedFilters: state.data.savedFilters.filter(
              (filter) => filter.id !== action.payload
            ),
          },
        };

      default:
        return state;
    }
  }

  // Context
  const AppContext = createContext(undefined);

  // Provider
  export function AppProvider({ children }) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    // Actions
    const actions = {
      setUser: useCallback((user) => {
        dispatch({ type: ActionTypes.SET_USER, payload: user });
      }, []),

      updatePreferences: useCallback((preferences) => {
        dispatch({ type: ActionTypes.UPDATE_PREFERENCES, payload: preferences });
      }, []),

      toggleSidebar: useCallback(() => {
        dispatch({ type: ActionTypes.TOGGLE_SIDEBAR });
      }, []),

      setLoading: useCallback((loading) => {
        dispatch({ type: ActionTypes.SET_LOADING, payload: loading });
      }, []),

      addError: useCallback((message, type = "error") => {
        dispatch({ type: ActionTypes.ADD_ERROR, payload: { message, type } });
      }, []),

      removeError: useCallback((errorId) => {
        dispatch({ type: ActionTypes.REMOVE_ERROR, payload: errorId });
      }, []),

      clearErrors: useCallback(() => {
        dispatch({ type: ActionTypes.CLEAR_ERRORS });
      }, []),

      addRecentSearch: useCallback((query, type) => {
        dispatch({
          type: ActionTypes.ADD_RECENT_SEARCH,
          payload: { query, type },
        });
      }, []),

      clearRecentSearches: useCallback(() => {
        dispatch({ type: ActionTypes.CLEAR_RECENT_SEARCHES });
      }, []),

      saveFilter: useCallback((name, filters, type) => {
        dispatch({
          type: ActionTypes.SAVE_FILTER,
          payload: { name, filters, type },
        });
      }, []),

      removeSavedFilter: useCallback((filterId) => {
        dispatch({ type: ActionTypes.REMOVE_SAVED_FILTER, payload: filterId });
      }, []),
    };

    const value = {
      ...state,
      ...actions,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  }

  // Hook
  export function useApp() {
    const context = useContext(AppContext);
    if (context === undefined) {
      throw new Error("useApp must be used within an AppProvider");
    }
    return context;
  }
