"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Button,
  Divider,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  Business as BusinessIcon,
  AutoAwesome as AutoAwesomeIcon,
} from "@mui/icons-material"; // Fixed import
import { useLanguage } from "../../context/LanguageContext";
import { INDUSTRIES, KEYWORDS, BRAND_STYLES } from "../../utils/constants";

export default function BrandForm({ onGenerate, loading }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    industry: "",
    style: "",
    keywords: [],
    description: "",
    targetAudience: "",
    length: "medium",
    checkDomain: true,
    avoidNumbers: true,
  });

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleCheckboxChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.checked,
    }));
  };

  const handleKeywordToggle = (keyword) => {
    setFormData((prev) => ({
      ...prev,
      keywords: prev.keywords.includes(keyword)
        ? prev.keywords.filter((k) => k !== keyword)
        : [...prev.keywords, keyword],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.industry && !formData.description) {
      return;
    }
    onGenerate(formData);
  };

  const canSubmit = (formData.industry || formData.description) && !loading;

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "white",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 3,
        }}
      >
        <BusinessIcon />
        {t("brandPreferences")}
      </Typography>

      {/* Industry Selection */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 500,
            mb: 1,
            "&.Mui-focused": {
              color: "rgba(255, 255, 255, 0.9)", // prevent primary on focus
            },
          }}
        >
          {t("industry")}
        </InputLabel>
        <Select
          value={formData.industry}
          onChange={handleInputChange("industry")}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)", // default border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.5)", // hover border
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent", // focus border transparent
            },
            "& .MuiSvgIcon-root": {
              color: "white", // dropdown arrow color
            },
          }}
        >
          {INDUSTRIES.map((industry) => (
            <MenuItem key={industry.value} value={industry.value}>
              {industry.icon} {t(industry.label)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Brand Style */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 500,
            mb: 1,
            "&.Mui-focused": {
              color: "rgba(255, 255, 255, 0.9)", // prevent primary on focus
            },
          }}
        >
          {t("brandStyle")}
        </InputLabel>
        <Select
          value={formData.style}
          onChange={handleInputChange("style")}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)", // default border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.5)", // hover border
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent", // focus border transparent
            },
            "& .MuiSvgIcon-root": {
              color: "white", // dropdown arrow color
            },
          }}
        >
          {BRAND_STYLES.map((style) => (
            <MenuItem key={style.value} value={style.value}>
              {t(style.label)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Business Description */}
      <TextField
        fullWidth
        multiline
        rows={3}
        label={t("businessDescription")}
        placeholder={t("businessDescriptionPlaceholder")}
        value={formData.description}
        onChange={handleInputChange("description")}
        sx={{
          mb: 3,
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.7)",
            "&.Mui-focused": {
              color: "rgba(255, 255, 255, 0.7)", // focused label color
            },
            "&.MuiFormLabel-filled": {
              color: "rgba(255, 255, 255, 0.7)", // filled state
            },
          },
          "& .MuiOutlinedInput-root": {
            color: "white",
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)", // default border
              borderWidth: "1px", // ✅ fix border width
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.5)", // hover border
              borderWidth: "1px", // ✅ same width on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent", // focus border transparent
              borderWidth: "1px", // ✅ same width on focus
            },
          },
        }}
      />

      {/* Target Audience */}
      <TextField
        fullWidth
        label={t("targetAudience")}
        placeholder={t("targetAudiencePlaceholder")}
        value={formData.targetAudience}
        onChange={handleInputChange("targetAudience")}
        sx={{
          mb: 3,
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.7)",
            "&.Mui-focused": {
              color: "rgba(255, 255, 255, 0.7)", // focused label color
            },
            "&.MuiFormLabel-filled": {
              color: "rgba(255, 255, 255, 0.7)", // filled state
            },
          },
          "& .MuiOutlinedInput-root": {
            color: "white",
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)", // default border
              borderWidth: "1px", // ✅ fix border width
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.5)", // hover border
              borderWidth: "1px", // ✅ same width on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent", // focus border transparent
              borderWidth: "1px", // ✅ same width on focus
            },
          },
        }}
      />

      {/* Keywords */}
      {/* <Box sx={{ mb: 3 }}>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: 500 }}
        >
          {t("brandKeywords")}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {KEYWORDS.brand.map((keyword) => (
            <Chip
              key={keyword}
              label={t(keyword)}
              variant={
                formData.keywords.includes(keyword) ? "filled" : "outlined"
              }
              onClick={() => handleKeywordToggle(keyword)}
              sx={{
                color: formData.keywords.includes(keyword)
                  ? "white"
                  : "rgba(255, 255, 255, 0.8)",
                borderColor: "rgba(255, 255, 255, 0.3)",
                backgroundColor: formData.keywords.includes(keyword)
                  ? "rgba(79, 172, 254, 0.8)"
                  : "transparent",
                "&:hover": {
                  backgroundColor: formData.keywords.includes(keyword)
                    ? "rgba(79, 172, 254, 1)"
                    : "rgba(255, 255, 255, 0.1)",
                  cursor: "pointer",
                },
                transition: "all 0.2s ease-in-out",
              }}
              size="small"
            />
          ))}
        </Box>
      </Box> */}

      <Divider sx={{ my: 3, borderColor: "rgba(255, 255, 255, 0.1)" }} />

      {/* Advanced Options */}
      <Typography
        variant="subtitle2"
        gutterBottom
        sx={{ color: "rgba(255, 255, 255, 0.9)", fontWeight: 500, mb: 2 }}
      >
        {t("advancedOptions")}
      </Typography>

      {/* Name Length */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 500,
            mb: 1,
            "&.Mui-focused": {
              color: "rgba(255, 255, 255, 0.9)", // prevent primary on focus
            },
          }}
        >
          {t("nameLength")}
        </InputLabel>
        <Select
          value={formData.length}
          onChange={handleInputChange("length")}
          sx={{
            color: "white",
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.3)", // default border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(255, 255, 255, 0.5)", // hover border
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent", // focus border transparent
            },
            "& .MuiSvgIcon-root": {
              color: "white", // dropdown arrow color
            },
          }}
        >
          <MenuItem value="short">
            {t("short")} (3-5 {t("letters")})
          </MenuItem>
          <MenuItem value="medium">
            {t("medium")} (6-8 {t("letters")})
          </MenuItem>
          <MenuItem value="long">
            {t("long")} (9+ {t("letters")})
          </MenuItem>
        </Select>
      </FormControl>

      {/* Options */}
      <Box sx={{ mb: 4 }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.checkDomain}
              onChange={handleCheckboxChange("checkDomain")}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-checked": { color: "#4facfe" },
                "&:hover": { backgroundColor: "rgba(79, 172, 254, 0.1)" },
              }}
            />
          }
          label={
            <Typography
              sx={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.9rem" }}
            >
              {t("checkDomainAvailability")}
            </Typography>
          }
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.avoidNumbers}
              onChange={handleCheckboxChange("avoidNumbers")}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-checked": { color: "#4facfe" },
                "&:hover": { backgroundColor: "rgba(79, 172, 254, 0.1)" },
              }}
            />
          }
          label={
            <Typography
              sx={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.9rem" }}
            >
              {t("avoidNumbers")}
            </Typography>
          }
        />
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!canSubmit}
        startIcon={<AutoAwesomeIcon />}
        sx={{
          py: 2,
          background: canSubmit
            ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
            : "rgba(255, 255, 255, 0.3)",
          fontWeight: 600,
          fontSize: "1.1rem",
          borderRadius: 3,
          textTransform: "none",
          boxShadow: canSubmit ? "0 8px 32px rgba(79, 172, 254, 0.3)" : "none",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            background: canSubmit
              ? "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)"
              : "rgba(255, 255, 255, 0.3)",
            transform: canSubmit ? "translateY(-2px)" : "none",
            boxShadow: canSubmit
              ? "0 12px 40px rgba(79, 172, 254, 0.4)"
              : "none",
          },
          "&:disabled": {
            color: "rgba(255, 255, 255, 0.5)",
            cursor: "not-allowed",
          },
          "&:active": {
            transform: canSubmit ? "translateY(0px)" : "none",
          },
        }}
      >
        {loading ? t("generating") + "..." : t("BrandNames")}
      </Button>
    </Box>
  );
}
