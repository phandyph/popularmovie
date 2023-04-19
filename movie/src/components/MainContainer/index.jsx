import { useState } from "react";
import ActionContainer from "../ActionContainer";
import CardContainer from "../CardContainer";
import "./MainContainer.css";
import movies from "../../data/Movies.json";

const START_INDEX = 0;
const ITEMS_PER_PAGE = 4;

const MainContainer = () => {
  const [movieList, setMovieList] = useState(movies);
  const [fourMoviesLength, setFourMoviesLength] = useState(ITEMS_PER_PAGE);
  const totalItem = movieList.slice(
    START_INDEX,
    fourMoviesLength
  ).length;

  const updateMovieList = (moviesFromSorting) => {
    setMovieList(moviesFromSorting);
  };

  const onLoadMore = () => {
    setFourMoviesLength(fourMoviesLength + ITEMS_PER_PAGE);
  };

  return (
    <div>
      <div className="topIntro">
        <h3 className="pageTitle">Popular Movie</h3>
      </div>
      <div className="actionAndCardContainer">
        <ActionContainer movies={movies} onSearch={updateMovieList} />
        <CardContainer
          itemForCardContainer={{
            items: movieList.slice(START_INDEX, fourMoviesLength),
            ItemsPerPage: fourMoviesLength,
            totalItem: totalItem,
          }}
          onClick={onLoadMore}
        />
      </div>
    </div>
  );
};

export default MainContainer;
