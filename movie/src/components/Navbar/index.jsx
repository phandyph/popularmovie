import { BrowserRouter as Router } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import mobileList from "../../data/Mobile.json";
import tvShow from "../../data/TvShow.json";
import more from "../../data/More.json";
import NavbarPopup from "../Features/NavbarPopup";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HumbergerNavbar from "../HumbergerNavbar";
import useIsOnMobile from "../../hooks/useIsOnMobile";
import { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";
const LOGO =
  "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";

const Navbar = () => {
  const isHumbergerIcon = useIsOnMobile();
  const onMobile = useIsOnMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useEffect when onMobile change value from true to false or false to true.
  useEffect(() => {
    if (!onMobile) {
      setIsMenuOpen(false);
    }
  }, [onMobile]);

  return (
    <Router>
      <div className="navbar">
        <img className="logo" src={LOGO} alt="" />

        <ul className="leftNav">
          <div class="dropdown">
            <button class="dropbtn">Movie</button>
            <div class="dropdownContent">
              <NavbarPopup navbarList={mobileList} />
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">TVShows</button>
            <div class="dropdownContent">
              <NavbarPopup navbarList={tvShow} />
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">People</button>
            <div class="dropdownContent">
              <li>PopularPeople</li>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn">More</button>
            <div class="dropdownContent">
              <NavbarPopup navbarList={more} />
            </div>
          </div>
        </ul>

        <ul className="rightNav">
          <li className="liNav">EN</li>
          <li className="liNav">JoinTMDB</li>
          <li className="liNav">
            <SearchIcon />
          </li>
          <li
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className={isHumbergerIcon ? "showItems" : "hideItems"}
          >
            <DehazeIcon />
          </li>
          <li>
            <HumbergerNavbar onMobile={isMenuOpen} />
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Navbar;
