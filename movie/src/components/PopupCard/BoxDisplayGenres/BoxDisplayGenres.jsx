import { Box } from "@mui/material";
import FilterPopup from "../FilterPopup/FilterPopup";
import Collapse from "@mui/material/Collapse";
import "./BoxDisplayGenres.css";
import { useState } from "react";

const BoxDisplayGenres = ({ genres, expanded, onClick }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);

  const isClicked = (genre) =>
    selectedGenres.includes(genre) ? "labelClicked" : "labelUnClick";
  const handleClickFilter = (genre) => {
    var genresClicked = [...selectedGenres];
    if (genre && !selectedGenres.includes(genre)) {
      genresClicked = [...selectedGenres, genre];
    } else {
      genresClicked.splice(selectedGenres.indexOf(genre), 1);
    }
    setSelectedGenres(genresClicked);
    onClick?.(genresClicked);
  };

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <hr />
      <Box className="genreBox">
        {genres.map((genre, i) => {
          return (
            <FilterPopup key={genre.id}>
              <button
                onClick={() => handleClickFilter(genre.label)}
                className={isClicked(genre.label)}
              >
                {genre.label}
              </button>
            </FilterPopup>
          );
        })}
      </Box>
    </Collapse>
  );
};
export default BoxDisplayGenres;
