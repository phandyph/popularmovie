import { Box } from "@mui/material";
import FilterPopup from "../FilterPopup/FilterPopup";
import Collapse from "@mui/material/Collapse";
import "./BoxDisplayGenres.css"
const BoxDisplayGenres = ({ genres, expanded,handleChangeOnFilter}) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <hr />
      <Box className="genreBox">
        {genres.map((genre) => {
          return (
            <FilterPopup onChange = {()=>handleChangeOnFilter(genre.label)} className="filterItem" key={genre.id}>
              {genre.label}
            </FilterPopup>
          );
        })}
      </Box>
    </Collapse>
  );
};
export default BoxDisplayGenres;
