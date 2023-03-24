import { Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./DotPopup.css";
const DotPopup = ({ handleClose }) => {
  return (
    <Grid className="cardPopup" onClick={handleClose} fullWidth>
      <Typography>Want to rate or add this item to a list?</Typography>
      <Grid className="btn">
        <button className="labelBtn">Login</button>
        <ArrowForwardIosIcon />
      </Grid>
      <Typography>Not a member?</Typography>
      <Grid className="btn">
        <button className="labelBtn">Sign up and join the community</button>
        <ArrowForwardIosIcon />
      </Grid>
    </Grid>
  );
};

export default DotPopup;
