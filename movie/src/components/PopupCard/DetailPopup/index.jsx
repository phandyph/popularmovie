import { Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./DetailPopup.css";
const DetailPopup = ({ handleClose }) => {
  return (
    <Grid className="detailPopup" onClick={handleClose} fullWidth>
      <Typography>Want to rate or add this item to a list?</Typography>
      <Grid className="card">
        <button className="labelBtn">Login</button>
        <ArrowForwardIosIcon />
      </Grid>
      <Typography>Not a member?</Typography>
      <Grid className="card">
        <button className="labelBtn">Sign up and join the community</button>
        <ArrowForwardIosIcon />
      </Grid>
    </Grid>
  );
};

export default DetailPopup;
