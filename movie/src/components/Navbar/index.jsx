import { BrowserRouter as Router } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import mobileList from "../../data/Mobile.json";
import tvShow from "../../data/TvShow.json";
import more from "../../data/More.json";
import popularPeople from "../../data/PopularPeople.json";
import NavbarPopup from "../Features/NavbarPopup";
import DehazeIcon from "@mui/icons-material/Dehaze";
import HumbergerNavbar from "../HumbergerNavbar";
import useIsOnMobile from "../../hooks/useIsOnMobile";
import { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";
const MAIN_NAV_MENU = [
  { label: "Movie", component: mobileList },
  { label: "TVShows", component: tvShow },
  { label: "People", component: popularPeople },
  { label: "More", component: more },
];
const USER_PREFERENES_NAV_MENU = [
  { label: "EN" },
  { label: "JoinTMDB" },
  { label: <SearchIcon /> },
];

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
      <div className="navHight">
        <div className="navbar nav">
          <img className="logo" src={LOGO} alt="Logo of navbar" />

          <ul className="mainNavMenu">
            {MAIN_NAV_MENU.map((nav, i) => {
              return (
                <div key={i} class="dropdown">
                  <button class="dropbtn">{nav.label}</button>
                  <div class="dropdownContent">
                    <NavbarPopup navbarList={nav.component} />
                  </div>
                </div>
              );
            })}
          </ul>
          <ul className="userPreferencesNavMenu">
            {USER_PREFERENES_NAV_MENU.map((menu, i) => {
              return (
                <li key={i} className="liNav">
                  {menu.label}
                </li>
              );
            })}
            <li
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
              className={isHumbergerIcon ? "showItems" : "hideItems"}
            >
              <DehazeIcon />
            </li>
            <li>
              <HumbergerNavbar
                mainNavMenu={MAIN_NAV_MENU}
                userPreferencesMenu={USER_PREFERENES_NAV_MENU}
                onMobile={isMenuOpen}
              />
            </li>
          </ul>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
