import { useState } from "react";
import ActionContainer from "../ActionContainer";
import CardContainer from "../CardContainer";
import "./MainContainer.css";
import movies from "../Json/Movies.json";

const MainContainer = () => {
  const [movieList, setMovieList] = useState(movies);
  // fourIncreasement, I use it for set default 4 to display 4 movies and increase 4 when click on add more button.
  const [fourIncreasement, setFourIncreasement] = useState(4);
  // moviesDisplay, I just need it to compare to disable load more button.
  const moviesDisplay = movieList.slice(0, fourIncreasement).length;

  const onGetMoviesAfterDoAction = (moviesFromSorting) => {
    setMovieList(moviesFromSorting);
  };

  const onLoadMore = () => {
    setFourIncreasement(fourIncreasement + 4);
  };

  return (
    <div className="body">
      <ActionContainer movies={movies} onSearch={onGetMoviesAfterDoAction} />
      <CardContainer
        onClick={onLoadMore}
        fourIncreasement={fourIncreasement}
        moviesDisplay={moviesDisplay}
        // Here is movieList to display on card, that's why I start to splice it from here.
        movies={movieList.slice(0, fourIncreasement)}
      />
    </div>
  );
};

export default MainContainer;
