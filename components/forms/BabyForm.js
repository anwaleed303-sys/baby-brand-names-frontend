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
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Chip,
  Button,
  Divider,
} from "@mui/material";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { useLanguage } from "../../context/LanguageContext";
import { RELIGIONS, KEYWORDS } from "../../utils/constants";

export default function BabyForm({ onGenerate, loading }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    gender: "",
    religion: "",
    origin: "",
    keywords: [],
    meaning: "",
    startsWith: "",
    endsWith: "",
  });

  const [generatedNames, setGeneratedNames] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // ✅ GET LANGUAGE CONTEXT
  const {
    language,
    prepareFormDataForAPI,
    validateAPIResponse,
    getAPILanguage,
  } = useLanguage();

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      console.log("🚀 Starting generation with UI language:", language);
      console.log("📋 Original form data:", formData);

      // ✅ STEP 1: Add current language to form data
      const formDataWithLanguage = {
        ...formData,
        language: language, // This will be 'en', 'ur', or 'ar'
      };

      console.log("📝 Form data with language:", formDataWithLanguage);

      // ✅ STEP 2: Prepare for API using language context
      const apiPayload = prepareFormDataForAPI(formDataWithLanguage);
      console.log("📤 Final API payload:", apiPayload);

      // ✅ STEP 3: Call API with language context
      const response = await nameService.generateNames("baby", apiPayload, {
        prepareFormDataForAPI,
        validateAPIResponse,
      });

      // ✅ STEP 4: Validate and set response
      const validatedResponse = validateAPIResponse(response);
      setGeneratedNames(validatedResponse);

      console.log("✅ Generation completed successfully");
      console.log("📊 Generated names:", validatedResponse?.length || 0);
    } catch (error) {
      console.error("❌ Generation failed:", error);
      // Handle error appropriately
    } finally {
      setIsGenerating(false);
    }
  };

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
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
    if (!formData.gender || !formData.religion) {
      return;
    }
    onGenerate(formData);
  };

  const canSubmit = formData.gender && formData.religion && !loading;

  return (
    <Box
      sx={
        {
          // backgroundColor: "red",
        }
      }
      component="form"
      onSubmit={handleSubmit}
    >
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
        <ChildCareIcon />
        {t("babyNamePreferences")}
      </Typography>

      {/* Gender Selection */}
      <FormControl component="fieldset" fullWidth sx={{ mb: 3 }}>
        <FormLabel
          component="legend"
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: 500,
            mb: 1,
            "&.Mui-focused": {
              color: "rgba(255, 255, 255, 0.9)", // prevent primary on focus
            },
          }}
        >
          {t("gender")} *
        </FormLabel>

        <RadioGroup
          row
          value={formData.gender}
          onChange={handleInputChange("gender")}
        >
          <FormControlLabel
            value="boy"
            control={
              <Radio
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-checked": {
                    color: "white", // ✅ selected radio color white
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
                {t("boy")}
              </Typography>
            }
          />
          <FormControlLabel
            value="girl"
            control={
              <Radio
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
                {t("girl")}
              </Typography>
            }
          />
          <FormControlLabel
            value="unisex"
            control={
              <Radio
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  "&.Mui-checked": {
                    color: "white",
                  },
                }}
              />
            }
            label={
              <Typography sx={{ color: "rgba(255, 255, 255, 0.9)" }}>
                {t("unisex")}
              </Typography>
            }
          />
        </RadioGroup>
      </FormControl>

      {/* Religion/Culture Selection */}
      <FormControl fullWidth sx={{ mb: 3 }}>
        <InputLabel
          sx={{
            color: "rgba(255, 255, 255, 0.7)",
            "&.Mui-focused": {
              color: "rgba(255, 255, 255, 0.7)", // focused state bhi same rahe
            },
            "&.MuiFormLabel-filled": {
              color: "rgba(255, 255, 255, 0.7)", // jab value select ho tab bhi same
            },
          }}
        >
          {t("religionCulture")} *
        </InputLabel>
        <Select
          value={formData.religion}
          onChange={handleInputChange("religion")}
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
          {RELIGIONS.map((religion) => (
            <MenuItem key={religion.value} value={religion.value}>
              {religion.icon} {t(religion.label)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Origin/Region */}
      <TextField
        fullWidth
        label={t("specificOrigin")}
        placeholder={t("originPlaceholder")}
        value={formData.origin}
        onChange={handleInputChange("origin")}
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
          {t("preferredMeanings")}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
          {KEYWORDS.baby.map((keyword) => (
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
                  ? "rgba(240, 147, 251, 0.8)"
                  : "transparent",
                "&:hover": {
                  backgroundColor: formData.keywords.includes(keyword)
                    ? "rgba(240, 147, 251, 1)"
                    : "rgba(255, 255, 255, 0.1)",
                },
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
        {t("advancedOptions")} ({t("optional")})
      </Typography>

      <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          label={t("startsWith")}
          placeholder="A, B, C..."
          value={formData.startsWith}
          onChange={handleInputChange("startsWith")}
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
        <TextField
          fullWidth
          label={t("endsWith")}
          placeholder="...a, ...i, ...n"
          value={formData.endsWith}
          onChange={handleInputChange("endsWith")}
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
      </Box>

      <TextField
        fullWidth
        multiline
        rows={2}
        label={t("specificMeaning")}
        placeholder={t("meaningPlaceholder")}
        value={formData.meaning}
        onChange={handleInputChange("meaning")}
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

      <Button
        type="submit"
        fullWidth
        variant="contained"
        disabled={!canSubmit}
        startIcon={<AutoAwesomeIcon />}
        sx={{
          py: 2,
          background: canSubmit
            ? "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
            : "rgba(255, 255, 255, 0.3)",
          fontWeight: 600,
          fontSize: "1.1rem",
          borderRadius: 3,
          textTransform: "none",
          "&:hover": {
            background: canSubmit
              ? "linear-gradient(135deg, #f5576c 0%, #f093fb 100%)"
              : "rgba(255, 255, 255, 0.3)",
          },
          "&:disabled": {
            color: "rgba(255, 255, 255, 0.5)",
          },
        }}
      >
        {loading ? t("generating") + "..." : t("BabyNames")}
      </Button>
    </Box>
  );
}
