import "./App.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import movies from "./data/Movies.json";
import Footer from "./components/Footer";
import DisplayPageViaRoute from "./components/DisplayPageViaRoute";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import UpComing from "./pages/UpComing";
import PopularTv from "./pages/PopularTv";
import AiringToday from "./pages/AiringToday";
import OnTv from "./pages/OnTv";
import TopRate from "./pages/TopRate";
import PopularPeople from "./pages/PopularPeople";
import Discussion from "./pages/Discussion";
import Leaderboard from "./pages/LeaderBoard";
import Support from "./pages/Support";
import ApiMore from "./pages/ApiMore";
import AboutTmdb from "./pages/AboutTmdb";
import ContactUs from "./pages/ContactUs";
import SupportForums from "./pages/SupportForums";
import ApiBasic from "./pages/ApiBasic";
import SystemStatus from "./pages/SystemStatus";
import ContributionBible from "./pages/ContributionBible";
import AddNewMovie from "./pages/AddNewMovie";
import AddNewTvShow from "./pages/AddNewTvShow";
import Guidlines from "./pages/GuideLines";
import Discussions from "./pages/Discussions";
import LeaderBoardCommunity from "./pages/LeaderBoardCommunity";
import Twitter from "./pages/Twitter";
import TermsOfUse from "./pages/TermsOfUse";
import ApiTermsOfUse from "./pages/ApiTermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  const pagesRouters = [
    { path: "/", element: <MainContainer movies={movies} /> },
    { path: "/nowplaying", element: <NowPlaying /> },
    { path: "/upcoming", element: <UpComing /> },
    { path: "/toprated", element: <TopRated /> },
    { path: "/popular", element: <PopularTv /> },
    { path: "/airingtoday", element: <AiringToday /> },
    { path: "/ontv", element: <OnTv /> },
    { path: "/toprate", element: <TopRate /> },
    { path: "/popularpeople", element: <PopularPeople /> },
    { path: "/discussion", element: <Discussion /> },
    { path: "/leaderboard", element: <Leaderboard /> },
    { path: "/support", element: <Support /> },
    { path: "/api", element: <ApiMore /> },
    { path: "/abouttmdb", element: <AboutTmdb /> },
    { path: "/contactus", element: <ContactUs /> },
    { path: "/supportforums", element: <SupportForums /> },
    { path: "/apibasic", element: <ApiBasic /> },
    { path: "/systemstatus", element: <SystemStatus /> },
    { path: "/contributionbible", element: <ContributionBible /> },
    { path: "/addnewmovie", element: <AddNewMovie /> },
    { path: "/addnewtvshow", element: <AddNewTvShow /> },
    { path: "/guidelines", element: <Guidlines /> },
    { path: "/discussions", element: <Discussions /> },
    { path: "/leaderboardcommunity", element: <LeaderBoardCommunity /> },
    { path: "/twitter", element: <Twitter /> },
    { path: "/termsofuse", element: <TermsOfUse /> },
    { path: "/apitermsofuse", element: <ApiTermsOfUse /> },
    { path: "/privacypolicy", element: <PrivacyPolicy /> },
  ];
  return (
    <div className="movie">
      <Navbar />
      <DisplayPageViaRoute routes={pagesRouters} />
      <Footer />
    </div>
  );
};

export default App;
