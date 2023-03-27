import { Box } from "@mui/material";
import FilterPopup from "../FilterPopup";
import Collapse from "@mui/material/Collapse";
import "./GenresDisplay.css";
import { useState } from "react";

const GenresDisplay = ({ genres, expanded, onClick }) => {
  const [genreList, setGenreList] = useState([]);
  let genresSelected = [...genreList];

  const isGenreSelected = (genre) =>
    genreList.includes(genre) ? "ableGenre" : "disableGenre";

  const handleClickFilter = (genre) => {
    if (genre && !genreList.includes(genre)) {
      genresSelected = [...genreList, genre];
    } else {
      genresSelected.splice(genreList.indexOf(genre), 1);
    }

    setGenreList(genresSelected);
    onClick?.(genresSelected);
  };

  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <hr />
      <Box className="genreBox">
        {genres.map((genre) => {
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
export default GenresDisplay;
