import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
import Popular from "../../pages/Popular";
import NowPlaying from "../../pages/NowPlaying";
import TopRated from "../../pages/TopRated";
import UpComing from "../../pages/UpComing";
import PopularTv from "../../pages/PopularTv";
import AiringToday from "../../pages/AiringToday";
import OnTv from "../../pages/OnTv";
import TopRate from "../../pages/TopRate";
import PopularPeople from "../../pages/PopularPeople";
import Discussion from "../../pages/Discussion";
import Leaderboard from "../../pages/LeaderBoard";
import Support from "../../pages/Support";
import ApiMore from "../../pages/ApiMore";
import AboutTmdb from "../../pages/AboutTmdb";
import ContactUs from "../../pages/ContactUs";
import SupportForums from "../../pages/SupportForums";
import ApiBasic from "../../pages/ApiBasic";
import SystemStatus from "../../pages/SystemStatus";
import ContributionBible from "../../pages/ContributionBible";
import AddNewMovie from "../../pages/AddNewMovie";
import AddNewTvShow from "../../pages/AddNewTvShow";
import Guidlines from "../../pages/GuideLines";
import Discussions from "../../pages/Discussions";
import LeaderBoardCommunity from "../../pages/LeaderBoardCommunity";
import Twitter from "../../pages/Twitter";
import TermsOfUse from "../../pages/TermsOfUse";
import ApiTermsOfUse from "../../pages/ApiTermsOfUse";
import PrivacyPolicy from "../../pages/PrivacyPolicy";

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
              <li>
                <NavLink className="navlink" to="/popularpeople">
                  PopularPeople
                </NavLink>
              </li>
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

      <Routes>
        <Route path="/" element={<Popular />}></Route>
        <Route path="/nowplaying" element={<NowPlaying />}></Route>
        <Route path="/upcoming" element={<UpComing />}></Route>
        <Route path="/toprated" element={<TopRated />}></Route>
        <Route path="/popular" element={<PopularTv />}></Route>
        <Route path="/airingtoday" element={<AiringToday />}></Route>
        <Route path="/ontv" element={<OnTv />}></Route>
        <Route path="/toprate" element={<TopRate />}></Route>
        <Route path="/popularpeople" element={<PopularPeople />}></Route>
        <Route path="/discussion" element={<Discussion />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/api" element={<ApiMore />}></Route>

        <Route path="/abouttmdb" element={<AboutTmdb />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/supportforums" element={<SupportForums />}></Route>
        <Route path="/apibasic" element={<ApiBasic />}></Route>
        <Route path="/systemstatus" element={<SystemStatus />}></Route>
        <Route
          path="/contributionbible"
          element={<ContributionBible />}
        ></Route>
        <Route path="/addnewmovie" element={<AddNewMovie />}></Route>
        <Route path="/addnewtvshow" element={<AddNewTvShow />}></Route>
        <Route path="/guidelines" element={<Guidlines />}></Route>
        <Route path="/discussions" element={<Discussions />}></Route>
        <Route
          path="/leaderboardcommunity"
          element={<LeaderBoardCommunity />}
        ></Route>
        <Route path="/twitter" element={<Twitter />}></Route>
        <Route path="/termsofuse" element={<TermsOfUse />}></Route>
        <Route path="/apitermsofuse" element={<ApiTermsOfUse />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
      </Routes>
    </Router>
  );
};

export default Navbar;
