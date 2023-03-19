import "./MovieList.css";
import Navbar from "../Navbar/Navbar";
import MainContainer from "../MainContainer/MainContainer";
import movies from './movies.json';

const MovieList = () => {
  return (
    <div className="movie">
      <div className="nav-hight">
        <Navbar />
      </div>
      <div className="all-content">
        <h3 className="title">Popular Movie</h3>
        <MainContainer 
          movies={movies} 
        />
      </div>
    </div>
  );
};

export default MovieList;

