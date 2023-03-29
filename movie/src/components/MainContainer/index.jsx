import { useState } from "react";
import ActionContainer from "../ActionContainer";
import CardContainer from "../CardContainer";
import "./MainContainer.css";
import movies from "../Json/Movies.json";

const MainContainer = () => {
  const [movieList, setMovieList] = useState(movies);
  const starterIndex = 0;
  const fourLength = 4;
  const [fourMoviesLength, setFourMoviesLength] = useState(fourLength);

  // moviesDisplay, I just need it to compare to disable load more button.
  const moviesDisplay = movieList.slice(starterIndex, fourMoviesLength).length;

  const onGetMoviesAfterDoAction = (moviesFromSorting) => {
    setMovieList(moviesFromSorting);
  };

  const onLoadMore = () => {
    setFourMoviesLength(fourMoviesLength + fourLength);
  };

  return (
    <div className="body">
      <ActionContainer movies={movies} onSearch={onGetMoviesAfterDoAction} />
      <CardContainer
        onClick={onLoadMore}
        fourMoviesLength={fourMoviesLength}
        moviesDisplay={moviesDisplay}
        // Here is movieList to display on card, that's why I start to splice it from here.
        movies={movieList.slice(starterIndex, fourMoviesLength)}
      />
    </div>
  );
};

export default MainContainer;
