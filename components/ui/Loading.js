"use client";

import { Box, CircularProgress, Typography, Paper } from "@mui/material";
import { AutoAwesome as AutoAwesomeIcon } from "@mui/icons-material";

export default function Loading({ message = "Loading...", size = 60 }) {
  const gradient = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"; // ✅ same as button

  return (
    <Paper
      className="glass"
      sx={{
        p: 4,
        textAlign: "center",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex", mb: 3 }}>
        {/* Background Circular track */}
        <CircularProgress
          size={size}
          thickness={4}
          sx={{
            color: "rgba(255, 255, 255, 0.15)",
          }}
        />
        {/* Animated gradient ring */}
        {/* Animated ring — make stroke white */}
        <CircularProgress
          size={size}
          thickness={4}
          variant="determinate"
          value={25}
          sx={{
            position: "absolute",
            left: 0,
            color: "transparent", // hide default
            "& .MuiCircularProgress-circle, & .MuiCircularProgress-circleDeterminate":
              {
                stroke: "#fff", // ✅ black → white
              },
            animation: "spin 2s linear infinite",
            "@keyframes spin": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        />

        {/* Center Icon */}
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Center Icon — force white */}
          <AutoAwesomeIcon
            htmlColor="#fff"
            sx={{
              fontSize: size * 0.4,
              color: "#fff",
              fill: "#fff",
              animation: "pulse 1.5s ease-in-out infinite alternate",
              "@keyframes pulse": {
                "0%": { opacity: 0.6, transform: "scale(0.8)" },
                "100%": { opacity: 1, transform: "scale(1)" },
              },
            }}
          />
        </Box>
      </Box>

      {/* Gradient Text */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mb: 1,
          background: gradient, // ✅ same gradient as button
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {message}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.7)",
          fontStyle: "italic",
        }}
      >
        AI is crafting perfect names for you...
      </Typography>

      {/* Animated dots */}
      <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 0.5 }}>
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: gradient, // ✅ gradient dots too
              animation: "bounce 1.4s infinite ease-in-out both",
              animationDelay: `${index * 0.16}s`,
              "@keyframes bounce": {
                "0%, 80%, 100%": { transform: "scale(0)" },
                "40%": { transform: "scale(1)" },
              },
            }}
          />
        ))}
      </Box>
    </Paper>
  );
}
