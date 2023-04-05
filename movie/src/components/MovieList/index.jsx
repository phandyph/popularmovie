import "./MovieList.css";
import Navbar from "../Navbar";
import MainContainer from "../MainContainer";
import movies from "../../data/Movies.json";
// search bar should keep here.

const MovieList = () => {
  return (
    <div className="movie">
      <div className="navHight">
        <Navbar />
      </div>
      <div className="topIntro">
        <h3 className="pageTitle">Popular Movie</h3>
      </div>

      <MainContainer movies={movies} />
    </div>
  );
};

export default MovieList;
