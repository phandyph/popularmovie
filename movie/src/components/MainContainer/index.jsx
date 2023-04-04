import { useState } from "react";
import ActionContainer from "../ActionContainer";
import CardContainer from "../CardContainer";
import "./MainContainer.css";
import movies from "../../data/Movies.json";
import ActionButton from "../ActionButton";
const START_INDEX = 0;
const ITEMS_PER_PAGE = 4;

const MainContainer = () => {
  const [movieList, setMovieList] = useState(movies);
  const [fourMoviesLength, setFourMoviesLength] = useState(ITEMS_PER_PAGE);
  const amountMoviesDisplay = movieList.slice(
    START_INDEX,
    fourMoviesLength
  ).length;

  const onGetMoviesAfterDoAction = (moviesFromSorting) => {
    setMovieList(moviesFromSorting);
  };

  const onLoadMore = () => {
    setFourMoviesLength(fourMoviesLength + ITEMS_PER_PAGE);
  };

  return (
    <>
      {/* actionBtn instead of actionCard */}
      <ActionButton movies={movies} onSearch={onGetMoviesAfterDoAction} />

      <div className="actionAndCardContainer">
        <ActionContainer movies={movies} onSearch={onGetMoviesAfterDoAction} />
        <CardContainer
          itemForCardContainer={{
            items: movieList.slice(START_INDEX, fourMoviesLength),
            fourItems: fourMoviesLength,
            amountItemsDisplay: amountMoviesDisplay,
          }}
          onClick={onLoadMore}
        />
      </div>
    </>
  );
};

export default MainContainer;
