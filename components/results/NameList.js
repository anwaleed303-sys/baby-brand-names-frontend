"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  Paper,
  Fade,
} from "@mui/material";
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  Favorite as FavoriteIcon,
  Star as StarIcon,
  Public as PublicIcon,
} from "@mui/icons-material";
import NameCard from "./NameCard";
import { useLanguage } from "../../context/LanguageContext";

export default function NameList({ names, type }) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [filterBy, setFilterBy] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique values for filtering
  const origins = [
    ...new Set(names.map((name) => name.origin).filter(Boolean)),
  ];
  const categories = [
    ...new Set(names.map((name) => name.category).filter(Boolean)),
  ];

  // Filter and sort names
  const filteredNames = names.filter((name) => {
    const matchesSearch =
      name.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      name.meaning.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterBy === "all" ||
      name.origin === filterBy ||
      name.category === filterBy;

    return matchesSearch && matchesFilter;
  });

  const sortedNames = [...filteredNames].sort((a, b) => {
    switch (sortBy) {
      case "alphabetical":
        return a.name.localeCompare(b.name);
      case "length":
        return a.name.length - b.name.length;
      case "popularity":
        const popularityOrder = {
          "Very Popular": 3,
          Popular: 2,
          Moderate: 1,
          Unique: 0,
        };
        return (
          (popularityOrder[b.popularity] || 0) -
          (popularityOrder[a.popularity] || 0)
        );
      default:
        return 0;
    }
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSortBy("default");
    setFilterBy("all");
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <StarIcon sx={{ color: type === "baby" ? "#f093fb" : "#4facfe" }} />
            {sortedNames.length} {t("namesGenerated")}
          </Typography>

          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            onClick={() => setShowFilters(!showFilters)}
            sx={{
              color: "white",
              borderColor: "rgba(255, 255, 255, 0.3)",
              "&:hover": {
                borderColor: "rgba(255, 255, 255, 0.5)",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
              },
            }}
          >
            {t("filters")}
          </Button>
        </Box>

        {/* Filters */}
        <Fade in={showFilters}>
          <Paper
            className="glass"
            sx={{
              p: 3,
              mb: 3,
              display: showFilters ? "block" : "none",
              backgroundColor: "transparent",
            }}
          >
            <Grid container spacing={3}>
              {/* Search */}
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  placeholder={t("searchNames")}
                  value={searchTerm}
                  onChange={handleSearchChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchIcon
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: 18,
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      color: "white",
                      "& fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        borderWidth: "1px !important",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "rgba(255, 255, 255, 0.7)",
                      },
                      backgroundColor: "transparent",
                    },
                  }}
                />
              </Grid>

              {/* Sort */}
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    }}
                  >
                    {t("sortBy")}
                  </InputLabel>
                  <Select
                    value={sortBy}
                    onChange={handleSortChange}
                    sx={{
                      color: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                    }}
                  >
                    <MenuItem value="default">{t("default")}</MenuItem>
                    <MenuItem value="alphabetical">
                      {t("alphabetical")}
                    </MenuItem>
                    <MenuItem value="length">{t("nameLength")}</MenuItem>
                    <MenuItem value="popularity">{t("popularity")}</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Filter */}
              <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                  <InputLabel
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      "&.Mui-focused": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    }}
                  >
                    {t("filterBy")}
                  </InputLabel>
                  <Select
                    value={filterBy}
                    onChange={handleFilterChange}
                    sx={{
                      color: "white",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.3)",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.5)",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "transparent",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "white",
                      },
                    }}
                  >
                    <MenuItem value="all">{t("all")}</MenuItem>
                    {origins.map((origin) => (
                      <MenuItem key={origin} value={origin}>
                        {origin}
                      </MenuItem>
                    ))}
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Clear */}
              <Grid item xs={12} md={2}>
                <Button
                  fullWidth
                  variant="outlined"
                  onClick={clearFilters}
                  sx={{
                    height: "56px",
                    color: "rgba(255, 255, 255, 0.7)",
                    borderColor: "transparent",
                    "&:hover": {
                      borderColor: "rgba(255, 255, 255, 0.5)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    },
                  }}
                >
                  {t("clear")}
                </Button>
              </Grid>
            </Grid>

            {/* Active Filters */}
            {(searchTerm || filterBy !== "all" || sortBy !== "default") && (
              <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}>
                {searchTerm && (
                  <Chip
                    label={`${t("search")}: ${searchTerm}`}
                    onDelete={() => setSearchTerm("")}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      "& .MuiChip-deleteIcon": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    }}
                  />
                )}
                {filterBy !== "all" && (
                  <Chip
                    label={`${t("filter")}: ${filterBy}`}
                    onDelete={() => setFilterBy("all")}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      "& .MuiChip-deleteIcon": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    }}
                  />
                )}
                {sortBy !== "default" && (
                  <Chip
                    label={`${t("sort")}: ${t(sortBy)}`}
                    onDelete={() => setSortBy("default")}
                    size="small"
                    sx={{
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      "& .MuiChip-deleteIcon": {
                        color: "rgba(255, 255, 255, 0.7)",
                      },
                    }}
                  />
                )}
              </Box>
            )}
          </Paper>
        </Fade>
      </Box>

      {/* Results */}
      {sortedNames.length === 0 ? (
        <Paper
          className="glass"
          sx={{
            p: 6,
            textAlign: "center",
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              mb: 1,
            }}
          >
            {t("noNamesFound")}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
          >
            {t("tryDifferentFilters")}
          </Typography>
        </Paper>
      ) : (
        <Grid
          container
          spacing={3}
          // sx={{
          //   // Ensure equal height rows using flexbox
          //   "& .MuiGrid-item": {
          //     display: "flex",
          //     flexDirection: "column",
          //   },
          // }}
        >
          {sortedNames.map((name, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              lg={4}
              xl={4}
              key={`${name.name}-${name.meaning}-${index}`}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Fade in timeout={300 + index * 50} style={{ flex: 1 }}>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <NameCard
                    name={name}
                    type={type}
                    cardId={`${name.name}-${index}`}
                  />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
