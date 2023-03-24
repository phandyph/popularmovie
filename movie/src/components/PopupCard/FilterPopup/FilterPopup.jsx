import { Box } from "@mui/material";
import PropTypes from "prop-types";

const FilterPopup = (props) => {
  const { sx, ...other } = props;

  return (
    <Box
      className="box"
      /**
       * sx here important on display each genre.
       * If no sx, each genre doesn't display.
       */
      sx={{
        p: 0.5,
        m: 0.5,
        ...sx,
      }}
      {...other}
    />
  );
};

FilterPopup.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default FilterPopup;
