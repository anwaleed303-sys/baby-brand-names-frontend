"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
  Collapse,
  Divider,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Language as LanguageIcon,
  Public as PublicIcon,
  Star as StarIcon,
  ContentCopy as ContentCopyIcon,
} from "@mui/icons-material";
import { useFavorites } from "../../hooks/useFavorites";
import { useLanguage } from "../../context/LanguageContext";

export default function NameCard({ name, type }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const { favorites, toggleFavorite } = useFavorites();
  const { t } = useLanguage();

  const isFavorite = favorites.some(
    (fav) => fav.name === name.name && fav.type === type
  );

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    toggleFavorite({ ...name, type });
  };

  const handleCopy = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(name.name);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const getGradient = () => {
    if (type === "baby") {
      return "linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(245, 87, 108, 0.1) 100%)";
    } else {
      return "linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)";
    }
  };

  const getAccentColor = () => {
    return type === "baby" ? "#f093fb" : "#4facfe";
  };

  return (
    <Card
      className="glass card-hover"
      // Remove any onClick={handleExpandClick} or onClick handlers here
      sx={{
        background: getGradient(),
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        // Remove cursor: "pointer"
        transition: "all 0.3s ease",
        minHeight: {
          xs: "280px",
          sm: "300px",
          md: "320px",
          lg: "340px",
        },
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: `0 8px 25px ${getAccentColor()}30`,
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2, sm: 3 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Header - Fixed height section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
            minHeight: {
              xs: "80px",
              sm: "90px",
              md: "100px",
            },
          }}
        >
          <Box sx={{ flex: 1, mr: 2, minWidth: 0 }}>
            <Tooltip title={name.name} arrow>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: {
                    xs: "1.1rem",
                    sm: "1.25rem",
                    md: "1.4rem",
                  },
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "block",
                  lineHeight: 1.2,
                }}
              >
                {name.name}
              </Typography>
            </Tooltip>

            {name.pronunciation && (
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontStyle: "italic",
                  mb: 1,
                  fontSize: { xs: "0.75rem", sm: "0.8rem" },
                }}
              >
                /{name.pronunciation}/
              </Typography>
            )}

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.9)",
                fontWeight: 500,
                lineHeight: 1.4,
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                // Use clamp to limit lines
                display: "-webkit-box",
                WebkitLineClamp: expanded ? "none" : 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {name.meaning}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.5,
              minWidth: "40px",
            }}
          >
            <Tooltip title={copied ? t("copied") : t("copyName")}>
              <IconButton
                onClick={handleCopy}
                sx={{
                  color: copied ? getAccentColor() : "rgba(255, 255, 255, 0.7)",
                  "&:hover": { color: getAccentColor() },
                  p: { xs: 0.5, sm: 1 },
                }}
                size="small"
              >
                <ContentCopyIcon
                  sx={{ fontSize: { xs: "18px", sm: "20px" } }}
                />
              </IconButton>
            </Tooltip>

            <Tooltip
              title={
                isFavorite ? t("removeFromFavorites") : t("addToFavorites")
              }
            >
              <IconButton
                onClick={handleFavoriteClick}
                sx={{
                  color: isFavorite ? "#ff6b6b" : "rgba(255, 255, 255, 0.7)",
                  "&:hover": { color: "#ff6b6b" },
                  p: { xs: 0.5, sm: 1 },
                }}
                size="small"
              >
                {isFavorite ? (
                  <FavoriteIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
                ) : (
                  <FavoriteBorderIcon
                    sx={{ fontSize: { xs: "18px", sm: "20px" } }}
                  />
                )}
              </IconButton>
            </Tooltip>

            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                handleExpandClick();
              }}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
                p: { xs: 0.5, sm: 1 },
              }}
              size="small"
            >
              <ExpandMoreIcon sx={{ fontSize: { xs: "18px", sm: "20px" } }} />
            </IconButton>
          </Box>
        </Box>

        {/* Tags - Flexible height section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mb: 2,
            minHeight: "32px", // Ensure space even without tags
          }}
        >
          {name.origin && (
            <Chip
              icon={<PublicIcon sx={{ fontSize: "16px !important" }} />}
              label={name.origin}
              size="small"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: { xs: "0.7rem", sm: "0.75rem" },
                height: "26px",
              }}
            />
          )}
          {name.category && (
            <Chip
              label={name.category}
              size="small"
              sx={{
                backgroundColor: `${getAccentColor()}20`,
                color: "white",
                border: `1px solid ${getAccentColor()}40`,
                fontSize: { xs: "0.7rem", sm: "0.75rem" },
                height: "26px",
              }}
            />
          )}
          {name.popularity && (
            <Chip
              icon={<StarIcon sx={{ fontSize: "16px !important" }} />}
              label={name.popularity}
              size="small"
              sx={{
                backgroundColor: "rgba(255, 193, 7, 0.2)",
                color: "white",
                border: "1px solid rgba(255, 193, 7, 0.4)",
                fontSize: { xs: "0.7rem", sm: "0.75rem" },
                height: "26px",
              }}
            />
          )}
        </Box>

        {/* Expandable Content */}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ my: 2, borderColor: "rgba(255, 255, 255, 0.1)" }} />

          {/* Detailed Information */}
          <Box sx={{ space: 2 }}>
            {name.description && (
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  }}
                >
                  {name.description}
                </Typography>
              </Box>
            )}

            {name.culturalSignificance && (
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: getAccentColor(),
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  }}
                >
                  {t("culturalSignificance")}:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.75rem", sm: "0.8rem" },
                  }}
                >
                  {name.culturalSignificance}
                </Typography>
              </Box>
            )}

            {name.historicalFigures && name.historicalFigures.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: getAccentColor(),
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  }}
                >
                  {t("famousPeople")}:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: { xs: "0.75rem", sm: "0.8rem" },
                  }}
                >
                  {name.historicalFigures.join(", ")}
                </Typography>
              </Box>
            )}

            {name.variations && name.variations.length > 0 && (
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: getAccentColor(),
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  }}
                >
                  {t("variations")}:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {name.variations.map((variation, index) => (
                    <Chip
                      key={index}
                      label={variation}
                      size="small"
                      variant="outlined"
                      sx={{
                        color: "rgba(255, 255, 255, 0.8)",
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        fontSize: { xs: "0.65rem", sm: "0.7rem" },
                        height: "22px",
                      }}
                    />
                  ))}
                </Box>
              </Box>
            )}

            {type === "brand" && name.domainAvailable !== undefined && (
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: getAccentColor(),
                    fontWeight: 600,
                    mb: 1,
                    fontSize: { xs: "0.8rem", sm: "0.85rem" },
                  }}
                >
                  {t("domainAvailability")}:
                </Typography>
                <Chip
                  label={name.domainAvailable ? t("available") : t("taken")}
                  size="small"
                  sx={{
                    backgroundColor: name.domainAvailable
                      ? "rgba(76, 175, 80, 0.2)"
                      : "rgba(244, 67, 54, 0.2)",
                    color: "white",
                    border: name.domainAvailable
                      ? "1px solid rgba(76, 175, 80, 0.4)"
                      : "1px solid rgba(244, 67, 54, 0.4)",
                    fontSize: { xs: "0.7rem", sm: "0.75rem" },
                  }}
                />
              </Box>
            )}
          </Box>
        </Collapse>

        {/* Spacer to push content up when collapsed */}
        {!expanded && <Box sx={{ flex: 1 }} />}
      </CardContent>
    </Card>
  );
}
