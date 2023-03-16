import "./Leftbody.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Leftbody = () => {
  return (
    <div className="left-body">
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <Box className="list" sx={{ minWidth: 120 }}>
              <span>Sort Results By</span>
              <FormControl fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  defaultValue="Popularity Descending"
                >
                  <div className="left-side-container">
                    <MenuItem value={"Popularity Descending"}>
                      Popularity Descending
                    </MenuItem>
                    <MenuItem value={"Popularity Ascending"}>
                      Popularity Ascending
                    </MenuItem>
                    <MenuItem value={"Rating Descending"}>
                      Rating Descending
                    </MenuItem>
                    <MenuItem value={"Rating Ascending"}>
                      Rating Ascending
                    </MenuItem>
                    <MenuItem value={"Release Data Descending"}>
                      Release Data Descending
                    </MenuItem>
                    <MenuItem value={"Release Data Acending"}>
                      Release Data Acending
                    </MenuItem>
                    <MenuItem value={"Release Data Acending"}>
                      Release Data Acending
                    </MenuItem>
                    <MenuItem value={"Title (A-Z)"}>Title (A-Z)</MenuItem>
                  </div>
                </Select>
              </FormControl>
            </Box>
          </Select>
        </FormControl>
      </Box>

      <Box className="mt" sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <div className="left-side-container">
              <MenuItem value={'Search All release'}>Search All release</MenuItem>
              <MenuItem value={'Genres'}>Click on Genres to click on it.</MenuItem>
            </div>
          </Select>
        </FormControl>
      </Box>

      <ul className="search-place">
        <input className="search" type="text" placeholder="Search Title" />
      </ul>
    </div>
  );
};

export default Leftbody;
