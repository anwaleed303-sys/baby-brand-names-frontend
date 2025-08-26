"use client";

import { Button as MuiButton } from "@mui/material";

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  size = "medium",
  gradient,
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  startIcon,
  endIcon,
  sx = {},
  ...props
}) {
  const getGradientStyles = () => {
    const gradients = {
      primary: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      baby: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      brand: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      success: "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
      warning: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
      error: "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)",
    };

    if (gradient && gradients[gradient]) {
      return {
        background: gradients[gradient],
        "&:hover": {
          background: gradients[gradient],
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
        },
        "&:active": {
          transform: "translateY(0)",
        },
      };
    }

    return {};
  };

  const buttonSx = {
    textTransform: "none",
    borderRadius: 2,
    fontWeight: 600,
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:before": gradient && {
      content: '""',
      position: "absolute",
      top: 0,
      left: "-100%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
      transition: "left 0.5s",
    },
    "&:hover:before": gradient && {
      left: "100%",
    },
    ...getGradientStyles(),
    ...sx,
  };

  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled || loading}
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={buttonSx}
      {...props}
    >
      {loading ? "Loading..." : children}
    </MuiButton>
  );
}
