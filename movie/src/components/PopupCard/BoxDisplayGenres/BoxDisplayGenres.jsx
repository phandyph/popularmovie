import { Box } from "@mui/material";
import FilterPopup from "../FilterPopup/FilterPopup";
import Collapse from "@mui/material/Collapse";
import "./BoxDisplayGenres.css";
import { useState } from "react";

const BoxDisplayGenres = ({ genres, expanded, onClick }) => {
  const [genreList, setGenreList] = useState([]);
  let genreSelect = [...genreList];

  const isGenreSelected = (genre) =>
    genreList.includes(genre) ? "ableGenre" : "disableGenre";

  const handleClickFilter = (genre) => {
    if (genre && !genreList.includes(genre)) {
      genreSelect = [...genreList, genre];
    } else {
      genreSelect.splice(genreList.indexOf(genre), 1);
    }

    setGenreList(genreSelect);
    onClick?.(genreSelect);
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
                className={isGenreSelected(genre.label)}
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
