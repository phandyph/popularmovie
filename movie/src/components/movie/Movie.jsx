import "./Movie.css";
import Navbar from "../navbar/Navbar";
import Body from "../body/Body";
const Movie = () => {
  return (
    <div className="movie">
      <div className="nav-hight">
        <Navbar />
      </div>
      <div className="all-content">
        <h3 className="title">Popular Movie</h3>
        <Body />
      </div>
    </div>
  );
};

export default Movie;


