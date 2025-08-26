// Theme configuration for Baby & Brand Name Generator
// This file contains all theme-related constants, color schemes, and styling configurations

// Color Palette
export const colors = {
  // Primary Colors
  primary: {
    50: "#f0f4ff",
    100: "#e0e9ff",
    200: "#c7d6ff",
    300: "#a5b8ff",
    400: "#8290ff",
    500: "#667eea", // Main primary color
    600: "#5a6fd8",
    700: "#4c5fc5",
    800: "#3f4fb0",
    900: "#334199",
  },

  // Secondary Colors (Purple gradient)
  secondary: {
    50: "#f5f0ff",
    100: "#ede0ff",
    200: "#dcc6ff",
    300: "#c49eff",
    400: "#a66bff",
    500: "#764ba2", // Main secondary color
    600: "#6b4391",
    700: "#5e3b80",
    800: "#51336f",
    900: "#442b5e",
  },

  // Neutral Colors
  neutral: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  // Semantic Colors
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
  },

  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
  },

  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
  },

  info: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
  },
};

// Cultural Theme Colors
export const culturalThemes = {
  islamic: {
    primary: "#2E8B57", // Sea Green - represents nature and peace
    secondary: "#DAA520", // Goldenrod - represents prosperity
    accent: "#8B4513", // Saddle Brown - represents earth
    background: "linear-gradient(135deg, #2E8B57 0%, #DAA520 100%)",
    textPrimary: "#1a4a35",
    textSecondary: "#2d5016",
  },

  hindu: {
    primary: "#FF6347", // Tomato - represents energy and devotion
    secondary: "#FFD700", // Gold - represents purity and knowledge
    accent: "#8B008B", // Dark Magenta - represents spirituality
    background: "linear-gradient(135deg, #FF6347 0%, #FFD700 100%)",
    textPrimary: "#8b2635",
    textSecondary: "#8b6914",
  },

  buddhist: {
    primary: "#FF4500", // Orange Red - represents enlightenment
    secondary: "#FFD700", // Gold - represents wisdom
    accent: "#8B0000", // Dark Red - represents compassion
    background: "linear-gradient(135deg, #FF4500 0%, #FFD700 100%)",
    textPrimary: "#8b2500",
    textSecondary: "#8b6914",
  },

  modern: {
    primary: "#667eea",
    secondary: "#764ba2",
    accent: "#f093fb",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textPrimary: "#2c3e50",
    textSecondary: "#34495e",
  },
};

// Typography Configuration
export const typography = {
  fontFamily: {
    primary: "'Inter', 'Segoe UI', 'Roboto', sans-serif",
    arabic: "'Noto Sans Arabic', 'Inter', sans-serif",
    urdu: "'Noto Nastaliq Urdu', 'Inter', sans-serif",
    heading: "'Poppins', 'Inter', sans-serif",
  },

  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    base: "1rem", // 16px
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
    "6xl": "3.75rem", // 60px
  },

  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// Spacing System
export const spacing = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
  32: "8rem", // 128px
};

// Border Radius
export const borderRadius = {
  none: "0",
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};

// Box Shadow
export const boxShadow = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  glass: "0 8px 32px rgba(31, 38, 135, 0.37)",
  card: "0 4px 20px rgba(0, 0, 0, 0.08)",
  cardHover: "0 8px 30px rgba(0, 0, 0, 0.12)",
};

// Breakpoints for Responsive Design
export const breakpoints = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

// Component Themes
export const componentThemes = {
  button: {
    primary: {
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
      hover: {
        transform: "translateY(-2px)",
        boxShadow: "0 8px 25px rgba(102, 126, 234, 0.4)",
      },
    },
    secondary: {
      background: "#f8f9fa",
      color: "#495057",
      border: "2px solid #dee2e6",
      hover: {
        background: "#e9ecef",
        borderColor: "#adb5bd",
      },
    },
    outline: {
      background: "transparent",
      color: "#667eea",
      border: "2px solid #667eea",
      hover: {
        background: "#667eea",
        color: "white",
      },
    },
  },

  card: {
    default: {
      background: "#ffffff",
      borderRadius: borderRadius["2xl"],
      boxShadow: boxShadow.card,
      border: "1px solid rgba(0, 0, 0, 0.05)",
      hover: {
        transform: "translateY(-2px)",
        boxShadow: boxShadow.cardHover,
      },
    },
    glass: {
      background: "rgba(255, 255, 255, 0.15)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: borderRadius["2xl"],
      boxShadow: boxShadow.glass,
    },
    name: {
      background: "linear-gradient(135deg, #fff 0%, #f8f9ff 100%)",
      borderLeft: "4px solid #667eea",
      position: "relative",
      overflow: "hidden",
    },
  },

  form: {
    container: {
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: borderRadius["3xl"],
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      padding: spacing[10],
    },
    input: {
      padding: `${spacing[3]} ${spacing[4]}`,
      border: "2px solid #e1e8ed",
      borderRadius: borderRadius.lg,
      fontSize: typography.fontSize.base,
      transition: "all 0.3s ease",
      background: "#fff",
      focus: {
        borderColor: "#667eea",
        boxShadow: "0 0 0 3px rgba(102, 126, 234, 0.1)",
      },
    },
  },

  modal: {
    overlay: {
      background: "rgba(0, 0, 0, 0.6)",
      backdropFilter: "blur(4px)",
      zIndex: 1000,
    },
    content: {
      background: "white",
      borderRadius: borderRadius["3xl"],
      boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
      maxWidth: "500px",
      width: "100%",
      maxHeight: "80vh",
      overflow: "auto",
    },
  },
};

// Animation Configurations
export const animations = {
  duration: {
    fast: "0.15s",
    normal: "0.3s",
    slow: "0.6s",
  },

  easing: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },

  keyframes: {
    fadeIn: {
      from: { opacity: 0, transform: "translateY(20px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    slideUp: {
      from: { opacity: 0, transform: "translateY(30px)" },
      to: { opacity: 1, transform: "translateY(0)" },
    },
    spin: {
      from: { transform: "rotate(0deg)" },
      to: { transform: "rotate(360deg)" },
    },
    pulse: {
      "0%, 100%": { opacity: 1 },
      "50%": { opacity: 0.5 },
    },
    bounce: {
      "0%, 20%, 53%, 80%, 100%": { transform: "translateY(0)" },
      "40%, 43%": { transform: "translateY(-30px)" },
      "70%": { transform: "translateY(-15px)" },
      "90%": { transform: "translateY(-4px)" },
    },
  },
};

// Layout Configuration
export const layout = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: `0 ${spacing[4]}`,
  },

  header: {
    height: "70px",
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },

  footer: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(10px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.2)",
    padding: `${spacing[8]} 0`,
    marginTop: spacing[12],
  },

  section: {
    padding: `${spacing[8]} 0`,
    minHeight: "calc(100vh - 140px)",
  },
};

// Grid System
export const grid = {
  columns: 12,
  gutter: spacing[6],
  breakpoints,

  container: {
    xs: "100%",
    sm: "540px",
    md: "720px",
    lg: "960px",
    xl: "1140px",
    xxl: "1320px",
  },
};

// Language-specific configurations
export const languageConfig = {
  english: {
    direction: "ltr",
    fontFamily: typography.fontFamily.primary,
    textAlign: "left",
  },

  arabic: {
    direction: "rtl",
    fontFamily: typography.fontFamily.arabic,
    textAlign: "right",
    fontSize: {
      adjustment: "1.1", // Slightly larger for better readability
    },
  },

  urdu: {
    direction: "rtl",
    fontFamily: typography.fontFamily.urdu,
    textAlign: "right",
    fontSize: {
      adjustment: "1.1",
    },
  },
};

// Theme modes
export const themeModes = {
  light: {
    background: {
      primary: "#ffffff",
      secondary: "#f8f9fa",
      accent: colors.neutral[50],
    },
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[600],
      accent: colors.neutral[500],
    },
    border: {
      primary: colors.neutral[200],
      secondary: colors.neutral[100],
    },
  },

  dark: {
    background: {
      primary: colors.neutral[900],
      secondary: colors.neutral[800],
      accent: colors.neutral[700],
    },
    text: {
      primary: colors.neutral[50],
      secondary: colors.neutral[300],
      accent: colors.neutral[400],
    },
    border: {
      primary: colors.neutral[700],
      secondary: colors.neutral[800],
    },
  },
};

// Loading states configuration
export const loadingStates = {
  spinner: {
    size: {
      sm: "20px",
      md: "40px",
      lg: "60px",
    },
    color: colors.primary[500],
    thickness: "4px",
  },

  skeleton: {
    baseColor: colors.neutral[200],
    highlightColor: colors.neutral[100],
    animationDuration: "1.5s",
  },

  dots: {
    size: "8px",
    color: colors.primary[500],
    spacing: "4px",
  },
};

// Toast/Alert configuration
export const alertConfig = {
  success: {
    background: colors.success[50],
    border: colors.success[200],
    text: colors.success[700],
    icon: "✓",
  },

  error: {
    background: colors.error[50],
    border: colors.error[200],
    text: colors.error[700],
    icon: "✕",
  },

  warning: {
    background: colors.warning[50],
    border: colors.warning[200],
    text: colors.warning[700],
    icon: "⚠",
  },

  info: {
    background: colors.info[50],
    border: colors.info[200],
    text: colors.info[700],
    icon: "ℹ",
  },
};

// Material-UI Theme Configuration (serializable object only)
export const muiThemeConfig = {
  palette: {
    mode: "light",
    primary: {
      main: colors.primary[500],
      light: colors.primary[300],
      dark: colors.primary[700],
      contrastText: "#ffffff",
    },
    secondary: {
      main: colors.secondary[500],
      light: colors.secondary[300],
      dark: colors.secondary[700],
      contrastText: "#ffffff",
    },
    error: {
      main: colors.error[500],
      light: colors.error[300],
      dark: colors.error[700],
    },
    warning: {
      main: colors.warning[500],
      light: colors.warning[300],
      dark: colors.warning[700],
    },
    info: {
      main: colors.info[500],
      light: colors.info[300],
      dark: colors.info[700],
    },
    success: {
      main: colors.success[500],
      light: colors.success[300],
      dark: colors.success[700],
    },
    grey: colors.neutral,
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[600],
      disabled: colors.neutral[400],
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    divider: colors.neutral[200],
  },
  typography: {
    fontFamily: typography.fontFamily.primary,
    fontSize: 16,
    h1: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.bold,
      fontSize: typography.fontSize["5xl"],
      lineHeight: typography.lineHeight.tight,
    },
    h2: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.bold,
      fontSize: typography.fontSize["4xl"],
      lineHeight: typography.lineHeight.tight,
    },
    h3: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.semibold,
      fontSize: typography.fontSize["3xl"],
      lineHeight: typography.lineHeight.tight,
    },
    h4: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.semibold,
      fontSize: typography.fontSize["2xl"],
      lineHeight: typography.lineHeight.normal,
    },
    h5: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.medium,
      fontSize: typography.fontSize.xl,
      lineHeight: typography.lineHeight.normal,
    },
    h6: {
      fontFamily: typography.fontFamily.heading,
      fontWeight: typography.fontWeight.medium,
      fontSize: typography.fontSize.lg,
      lineHeight: typography.lineHeight.normal,
    },
    body1: {
      fontSize: typography.fontSize.base,
      lineHeight: typography.lineHeight.normal,
    },
    body2: {
      fontSize: typography.fontSize.sm,
      lineHeight: typography.lineHeight.normal,
    },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: typography.fontWeight.medium,
          borderRadius: borderRadius.lg,
          padding: `${spacing[3]} ${spacing[6]}`,
          transition: "all 0.3s ease",
          boxShadow: "none",
          "&:hover": {
            transform: "translateY(-1px)",
            boxShadow: boxShadow.md,
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.secondary[500]} 100%)`,
          "&:hover": {
            background: `linear-gradient(135deg, ${colors.primary[600]} 0%, ${colors.secondary[600]} 100%)`,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius["2xl"],
          boxShadow: boxShadow.card,
          border: "1px solid rgba(0, 0, 0, 0.05)",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: boxShadow.cardHover,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: borderRadius.lg,
            backgroundColor: "#fff",
            "& fieldset": {
              borderColor: colors.neutral[200],
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: colors.neutral[300],
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.primary[500],
              boxShadow: `0 0 0 3px rgba(102, 126, 234, 0.1)`,
            },
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: typography.fontFamily.primary,
          backgroundColor: "#ffffff",
        },
        "*": {
          boxSizing: "border-box",
        },
        "html, body": {
          margin: 0,
          padding: 0,
          minHeight: "100vh",
        },
      },
    },
  },
};

// Utility functions
export const getCulturalTheme = (culture) => {
  return culturalThemes[culture] || culturalThemes.modern;
};

export const generateCSSVariables = (theme) => {
  const cssVars = {};

  // Convert colors to CSS variables
  Object.entries(theme.colors || colors).forEach(([key, value]) => {
    if (typeof value === "object") {
      Object.entries(value).forEach(([shade, color]) => {
        cssVars[`--color-${key}-${shade}`] = color;
      });
    } else {
      cssVars[`--color-${key}`] = value;
    }
  });

  // Convert spacing to CSS variables
  Object.entries(spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });

  // Convert typography to CSS variables
  Object.entries(typography.fontSize).forEach(([key, value]) => {
    cssVars[`--font-size-${key}`] = value;
  });

  return cssVars;
};

export const applyRTLStyles = (language) => {
  const config = languageConfig[language];
  if (!config) return {};

  return {
    direction: config.direction,
    fontFamily: config.fontFamily,
    textAlign: config.textAlign,
    fontSize: config.fontSize?.adjustment
      ? `calc(1rem * ${config.fontSize.adjustment})`
      : "1rem",
  };
};

export const generateResponsiveStyles = (styles) => {
  const responsiveStyles = {};

  Object.entries(breakpoints).forEach(([breakpoint, value]) => {
    if (styles[breakpoint]) {
      responsiveStyles[`@media (min-width: ${value})`] = styles[breakpoint];
    }
  });

  return responsiveStyles;
};

export const createGradient = (color1, color2, direction = "135deg") => {
  return `linear-gradient(${direction}, ${color1} 0%, ${color2} 100%)`;
};

export const getContrastRatio = (color1, color2) => {
  // This is a simplified implementation
  // In a real application, you'd use a proper color contrast library
  const getLuminance = (color) => {
    // Simple luminance calculation
    const rgb = parseInt(color.replace("#", ""), 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  };

  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);

  return (Math.max(lum1, lum2) + 0.05) / (Math.min(lum1, lum2) + 0.05);
};

export const generateHoverStyles = (baseStyles, hoverModifications = {}) => {
  return {
    ...baseStyles,
    transition: animations.duration.normal,
    cursor: "pointer",
    "&:hover": {
      ...hoverModifications,
    },
  };
};

// Export default theme configuration
export const defaultTheme = {
  colors,
  culturalThemes,
  typography,
  spacing,
  borderRadius,
  boxShadow,
  breakpoints,
  componentThemes,
  animations,
  layout,
  grid,
  languageConfig,
  themeModes,
  loadingStates,
  alertConfig,
};

export default defaultTheme;
