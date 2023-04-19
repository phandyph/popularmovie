import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./DetailPopup.css";
const DetailPopup = ({ handleClose }) => {
  return (
    <button className="detailPopup" onClick={handleClose}>
      <p className="titleButton">Want to rate or add this item to a list?</p>
      <button className="btnCard">
        <span className="paragraph brownText">Login</span>
        <KeyboardArrowRightIcon />
      </button>
      <hr />
      <p className="titleButton">Not a member?</p>
      <button className="btnCard">
        <span className="paragraph brownText">
          Sign up and join the community
        </span>
        <KeyboardArrowRightIcon />
      </button>
    </button>
  );
};

export default DetailPopup;
