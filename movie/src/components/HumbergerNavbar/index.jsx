import "./HumbergerNavbar.css";
import NavbarPopup from "../Features/NavbarPopup";
import mobileList from "../../data/Mobile.json";
import tvShow from "../../data/TvShow.json";
import more from "../../data/More.json";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

const HumbergerNavbar = ({ onMobile }) => {
  return (
    <div className={onMobile ? "showMobileNavbar" : "hideMobileNavbar"}>
      <div className="hamburgerMenu">
        <div class="dropdownBuger">
          <button class="dropbtnBuger">Movie</button>
          <div class="dropdownContentBuger">
            <NavbarPopup navbarList={mobileList} />
          </div>
        </div>

        <div class="dropdownBuger">
          <button class="dropbtnBuger">TVShows</button>
          <div class="dropdownContentBuger">
            <NavbarPopup navbarList={tvShow} />
          </div>
        </div>

        <div class="dropdownBuger">
          <button class="dropbtnBuger">People</button>
          <div class="dropdownContentBuger">
            <li>PopularPeople</li>
          </div>
        </div>

        <div class="dropdownBuger">
          <button class="dropbtnBuger">More</button>
          <div class="dropdownContentBuger">
            <NavbarPopup navbarList={more} />
          </div>
        </div>

        <div class="dropdownBuger">
          <button class="dropbtnBuger">
            <AddIcon />
          </button>
        </div>

        <div class="dropdownBuger">
          <button class="dropbtnBuger">EN</button>
        </div>

        <div class="dropdownBuger">
          <button class="dropbtnBuger">JoinTMDB</button>
        </div>

        <div class="dropdownBuger">
          <button class="dropbtnBuger">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
export default HumbergerNavbar;
