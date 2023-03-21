import { BrowserRouter as Router } from "react-router-dom";
import { FaSearch, FaPlus } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const mobileList = [
    { id: 1, label: "Popular" },
    { id: 2, label: "Now Playing" },
    { id: 3, label: "Upcoming" },
    { id: 4, label: "Top Rated" },
  ];

  const tvShow = [
    { id: 1, label: "Popular" },
    { id: 2, label: "Airing Today" },
    { id: 3, label: "On TV" },
    { id: 4, label: "Top Rate" },
  ];

  const more = [
    { id: 1, label: "Discussion" },
    { id: 2, label: "Leaderboard" },
    { id: 3, label: "Support" },
    { id: 4, label: "API" },
  ];

  const other = [
    { id: 1, label: <FaPlus /> },
    { id: 2, label: "EN" },
    { id: 3, label: "JoinTMDB" },
    { id: 4, label: <FaSearch /> },
  ];

  return (
    <Router>
      <div className="navbar">
        <ul className="left-nav">
          <ul className="logo-container">
            <li className="logo">TMDB</li>
            <li className="logo-color"></li>
          </ul>

          <li className="w3-dropdown-hover w3-mobile li-nav">
            <span>Movie</span>
            <ul className="w3-dropdown-content list-li w3-bar-block w3-dark-white">
              {mobileList.map((mobile, i) => {
                return (
                  <li
                    key={mobile.id}
                    className="li-each-nav w3-bar-item w3-button w3-mobile"
                  >
                    {mobile.label}
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="w3-dropdown-hover w3-mobile li-nav">
            <span>TVShows</span>
            <ul className="w3-dropdown-content list-li w3-bar-block w3-dark-white">
              {tvShow.map((tv, i) => {
                return (
                  <li
                    key={tv.id}
                    className="li-each-nav w3-bar-item w3-button w3-mobile"
                  >
                    {tv.label}
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="w3-dropdown-hover w3-mobile li-nav">
            <span>People</span>
            <ul className="w3-dropdown-content list-li w3-bar-block w3-dark-white">
              <li className="li-each-nav w3-bar-item w3-button w3-mobile">
                PopularPeople
              </li>
            </ul>
          </li>
          <li className="w3-dropdown-hover w3-mobile li-nav">
            <span>More</span>
            <ul className="w3-dropdown-content list-li w3-bar-block w3-dark-white">
              {more.map((_more, i) => {
                return (
                  <li
                    key={_more.id}
                    className="li-each-nav w3-bar-item w3-button w3-mobile"
                  >
                    {_more.label}
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>

        <ul className="right-nav">
          {other.map((_other, i) => {
            return (
              <li key={_other.id} className="li-nav">
                {_other.label}
              </li>
            );
          })}
        </ul>
      </div>
    </Router>
  );
};

export default Navbar;
