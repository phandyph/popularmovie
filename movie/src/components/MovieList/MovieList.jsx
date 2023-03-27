import "./MovieList.css";
import Navbar from "../Navbar/Index";
import MainContainer from "../MainContainer/Index";
import movies from "../Json/Movies.json";

const MovieList = () => {
  return (
    <div className="movie">
      <div className="navHight">
        <Navbar />
      </div>
      <div className="allContent">
        <h3 className="title">Popular Movie</h3>
        <MainContainer movies={movies} />
      </div>
    </div>
  );
};

export default MovieList;
