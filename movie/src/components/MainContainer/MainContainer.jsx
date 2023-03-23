import { useState } from "react";
import ActionContainer from "../ActionContainer/ActionContainer";
import CardContainer from "../CardContainer";
import "./MainContainer.css";
import movies from "../Json/movies.json";

const MainContainer = () => {
  const [listMovies, setListMovies] = useState(movies);

  // // Here, I transfer data from child component (ActionContainer.jsx) to parent component (MainContainer.jsx)
  // onSearch?.([...movieAfterFilterOrSort]);
  const handleOnGetMoviesAfterDoAction = (moviesFromSorting) => {
    setListMovies(moviesFromSorting);
  };
 
  return (
    <div className="body">
      {/* onSearch is a props that I can get movies from child. (ActionContainer) */}
      <ActionContainer
        movies={movies}
        onSearch={handleOnGetMoviesAfterDoAction}
      />
      <CardContainer movies={listMovies} />
    </div>
  );
};

export default MainContainer;
