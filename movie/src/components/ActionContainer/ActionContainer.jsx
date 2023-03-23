import "./ActionContainer.css";
import SortCard from "../SortCard/SortCard";
import FilterCard from "../FilterCard/FilterCard";
import { useState } from "react";

const ActionContainer = ({ movies, onSearch }) => {
  /**
   * setSelectedGenres: store genres which we click at BoxDisplayGenres.jsx.
   * setSortByOption: store option which we choose at SortPopup.jsx.
   */
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
    switch (sortByOption) {
      case "Popularity Ascending":
        movieAfterFilterOrSort = movieAfterFilterOrSort.sort((a, b) =>
          a.popularity > b.popularity ? 1 : -1
        );
        break;

      case "Rating Descending":
        movieAfterFilterOrSort = movieAfterFilterOrSort.sort((a, b) =>
          a.vote_average < b.vote_average ? 1 : -1
        );
        break;

      case "Rating Ascending":
        movieAfterFilterOrSort = movieAfterFilterOrSort.sort((a, b) =>
          a.vote_average > b.vote_average ? 1 : -1
        );
        break;

      case "Release Date Descending":
        movieAfterFilterOrSort = movieAfterFilterOrSort.sort((a, b) =>
          new Date(a.release_date) < new Date(b.release_date) ? 1 : -1
        );
        break;

      case "Release Date Ascending":
        movieAfterFilterOrSort = movieAfterFilterOrSort.sort((a, b) =>
          new Date(a.release_date) > new Date(b.release_date) ? 1 : -1
        );
        break;

      case "Title (A-Z)":
        movieAfterFilterOrSort = movieAfterFilterOrSort.sort((a, b) =>
          a.title > b.title ? 1 : -1
        );
        break;

      case "Title (Z-A)":
        movieAfterFilterOrSort = movieAfterFilterOrSort.sort((a, b) =>
          a.title < b.title ? 1 : -1
        );
        break;

      default:
        movieAfterFilterOrSort = movieAfterFilterOrSort.sort((a, b) =>
          a.popularity < b.popularity ? 1 : -1
        );
        break;
    }
    // Here, I transfer data from child component (ActionContainer.jsx) to parent component (MainContainer.jsx)
    onSearch?.([...movieAfterFilterOrSort]);
  };

  return (
    <div className="action_container">
      {/* onClick word is easy for use to know that we need onClick, not onChange, onMouse, ... */}
      <SortCard onClick={handleSortByOption} />
      <FilterCard onClick={handleClickFilter} />
      <button type="button" className="btnSearch" onClick={handleSubmit}>
        Search
      </button>
      {/* </form> */}
    </div>
  );
};

export default ActionContainer;
