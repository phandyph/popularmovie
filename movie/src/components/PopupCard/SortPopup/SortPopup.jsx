import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const SortCard = ({ sortOption, selected, handleChange }) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          className="select"
          value={selected}
          inputProps={{ MenuProps: { disableScrollLock: true } }}
          id="demo-simple-select"
          MenuProps={{ MenuListProps: { disablePadding: true } }}
          onChange={handleChange}
        >
          {sortOption.map((option) => {
            return (
              <MenuItem key={option.id} value={option.value}>
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
