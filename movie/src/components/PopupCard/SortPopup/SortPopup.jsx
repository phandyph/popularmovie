import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

const SortCard = ({ sortOption, onClick }) => {
  const [selected, setSelected] = useState("Popularity Descending");

  const handleOnChange = (option) => {
    setSelected(option.target.value);
    /**
     * onClick get from ActionContainer.jsx
     * .? have value or don't, it work as normal.
     *  we no need ?. if we sure that it is not empty.
     */
    onClick?.(option.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          id="demo-simple-select"
          MenuProps={{ MenuListProps: { disablePadding: true } }}
          value={selected}
          onChange={handleOnChange}
        >
          {sortOption.map((option) => {
            return (
              <MenuItem key={option.id} value={option.label}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortCard;
