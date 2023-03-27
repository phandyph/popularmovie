import { useState } from "react";
import ActionContainer from "../ActionContainer";
import CardContainer from "../CardContainer";
import "./MainContainer.css";
import movies from "../Json/Movies.json";

const MainContainer = () => {
  const [movieList, setMovieList] = useState(movies);
  const handleOnGetMoviesAfterDoAction = (moviesFromSorting) => {
    setMovieList(moviesFromSorting);
  };

  return (
    <div className="body">
      <ActionContainer
        movies={movies}
        onSearch={handleOnGetMoviesAfterDoAction}
      />
      <CardContainer movies={movieList} />
    </div>
  );
};

export default MainContainer;
