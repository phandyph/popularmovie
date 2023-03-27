import { BrowserRouter as Router } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import mobileList from "../Json/Mobile.json";
import tvShow from "../Json/TvShow.json";
import more from "../Json/More.json";
import NavbarPopup from "../PopupCard/NavbarPopup/Index";
import "./Navbar.css";
const logo = "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <ul className="leftNav">
          <img
            className="logo"
            src={logo}
            alt=""
          />
          <li className="w3-dropdown-hover w3-mobile liNav">
            <span>Movie</span>
            <NavbarPopup navbarList={mobileList} />
          </li>

          <li className="w3-dropdown-hover w3-mobile liNav">
            <span>TVShows</span>
            <NavbarPopup navbarList={tvShow} />
            <li className="liEachNav w3-bar-item w3-button w3-mobile"></li>
          </li>

          <li className="w3-dropdown-hover w3-mobile liNav">
            <span>People</span>
            <ul className="w3-dropdown-content listLi w3-bar-block w3-dark-white">
              <li className="liEachNav w3-bar-item w3-button w3-mobile">
                PopularPeople
              </li>
            </ul>
          </li>

          <li className="w3-dropdown-hover w3-mobile liNav">
            <span>More</span>
            <NavbarPopup navbarList={more} />
          </li>
        </ul>

        <ul className="rightNav">
          <li className="liNav">
            <AddIcon />
          </li>
          <li className="liNav">EN</li>
          <li className="liNav">JoinTMDB</li>
          <li className="liNav search">
            <SearchIcon />
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Navbar;
