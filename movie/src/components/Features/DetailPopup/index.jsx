import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./DetailPopup.css";
const DetailPopup = ({ handleClose }) => {
  return (
    <div className="detailPopup" onClick={handleClose}>
      <p className="bold">Want to rate or add this item to a list?</p>
      <button className="btnCard">
        <span className="paragraph">Login</span>
        <KeyboardArrowRightIcon />
      </button>
      <hr />
      <p className="bold">Not a member?</p>
      <button className="btnCard">
        <span className="paragraph">Sign up and join the community</span>
        <KeyboardArrowRightIcon />
      </button>
    </div>
  );
};

export default DetailPopup;
