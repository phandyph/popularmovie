import "./ActionContainer.css";
import SortCard from "../SortCard";
import FilterCard from "../FilterCard";
import { sort } from "../../util/sort";
import { useState } from "react";

const ActionContainer = ({ movies, onSearch }) => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const handleSortByOption = (option) => {
    setSortOption(option);
  };

  const handleClickFilter = (selected) => {
    setSelectedGenres(selected);
  };

  const genresCompare = () => {
    if (selectedGenres.length === 0) return movies;
    const genresClicked = movies.filter((item) => {
      return selectedGenres.find((arr) => item.genres.includes(arr));
    });

    return genresClicked;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let movieAfterFilterOrSort = genresCompare();
    sort({ sortOption, list: movieAfterFilterOrSort });
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
