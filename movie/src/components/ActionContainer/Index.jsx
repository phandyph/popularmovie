import "./ActionContainer.css";
import SortCard from "../SortCard/Index";
import FilterCard from "../FilterCard/Index";

import { sort } from "../../util/sort";
import { useState } from "react";

const ActionContainer = ({ movies, onSearch }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortByOption, setSortByOption] = useState("");

  const handleSortByOption = (option) => {
    setSortByOption(option);
  };

  const handleClickFilter = (selected) => {
    setSelectedGenres(selected);
  };

  // compareGenres is used to get movie after compare genres which I clicked and genres of movies.
  const compareGenres = () => {
    // However I don't select (selectGenres), it still return value (movies.)
    if (selectedGenres.length === 0) return movies;
    // When I clicked, I can get value to put in array (genresClicked)
    const genresClicked = movies.filter((item) => {
      return selectedGenres.find((arr) => item.genres.includes(arr));
    });
    return genresClicked;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let movieAfterFilterOrSort = compareGenres();
    sort({ sortByOption, list: movieAfterFilterOrSort });

    // Here, I transfer data from child component (ActionContainer.jsx) to parent component (MainContainer.jsx)
    onSearch?.([...movieAfterFilterOrSort]);
  };

  return (
    <div className="actionContainer">
      <SortCard onClick={handleSortByOption} />
      <FilterCard onClick={handleClickFilter} />
      <button type="button" className="btnSearch" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};

export default ActionContainer;
