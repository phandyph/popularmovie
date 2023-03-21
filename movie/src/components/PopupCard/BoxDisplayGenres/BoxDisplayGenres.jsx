import { Box } from "@mui/material";
import FilterPopup from "../FilterPopup/FilterPopup";
import Collapse from "@mui/material/Collapse";
const BoxDisplayGenres = ({ genres, expanded }) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <hr />
      <Box className="genreBox">
        {genres.map((genre) => {
          return (
            <FilterPopup className="filterItem" key={genre.id}>
              {genre.label}
            </FilterPopup>
          );
        })}
      </Box>
    </Collapse>
  );
};
export default BoxDisplayGenres;
