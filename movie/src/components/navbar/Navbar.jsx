import {
  NavLink,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <ul className="left-nav">
          <ul className="logo-container">
            <li className="logo">TMDB</li>
            <li className="logo-color"></li>
          </ul>
          <li className="w3-dropdown-hover w3-mobile li-nav">
            Movie
            <ul className="w3-dropdown-content list-li w3-bar-block w3-dark-white">
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Popular
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Now Playing
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Upcoming
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Top Rated
              </li>
            </ul>
          </li>
          <li className="w3-dropdown-hover w3-mobile li-nav">
            TV Shows
            <ul className="w3-dropdown-content list-li w3-bar-block w3-dark-white">
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Popular
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Airing Today
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                On TV
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Top Rate
              </li>
            </ul>
          </li>

          <li className="w3-dropdown-hover w3-mobile li-nav">
            People
            <ul className="w3-dropdown-content list-li w3-bar-block w3-dark-white">
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Popular People
              </li>
            </ul>
          </li>
          <li className="w3-dropdown-hover w3-mobile li-nav">
            More
            <ul className="w3-dropdown-content list-li w3-bar-block w3-dark-white">
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Discussion
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Leaderboard
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                Support
              </li>
              <li className="li-eachNav w3-bar-item w3-button w3-mobile">
                API
              </li>
            </ul>
          </li>
        </ul>

        <ul className="right-nav">
          <li className="li-nav">
            <FaPlus />
          </li>
          <li className="li-nav">EN</li>
          <li className="li-nav">Login</li>
          <li className="li-nav">Join TMDB</li>
          <li className="li-nav">
            <FaSearch />
          </li>
        </ul>
      </div>
    </Router>
  );
};

export default Navbar;
