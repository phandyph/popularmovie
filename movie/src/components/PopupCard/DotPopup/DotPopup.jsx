import { Button, Grid, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./DotPopup.css";
const DotPopup = ({ handleClose }) => {
  return (
    <Grid className="cardPopup" onClick={handleClose} fullWidth>
      <Typography>Want to rate or add this item to a list?</Typography>
      <Grid className="btn">
        <Button sx={{ color: "gray", fontWeight: "bold" }} className="labelBtn">
          Login
        </Button>
        <ArrowForwardIosIcon />
      </Grid>
      <Typography>Not a member?</Typography>
      <Grid className="btn">
        <Button sx={{ color: "gray", fontWeight: "bold" }} className="labelBtn">
          Sign up and join the community
        </Button>
        <ArrowForwardIosIcon />
      </Grid>
    </Grid>
  );
};

export default DotPopup;
