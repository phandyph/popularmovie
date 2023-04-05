import "./SearchContainer.css";
import SearchForm from "../Features/SearchForm";
import ItemsToDisplay from "../Features/ItemToDisplay";
import movies from "../../data/Movies.json";
import { useState } from "react";
const SearchContainer = ({isShowSearchContainer}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const moviesToDisplay = movies;

  console.log("searchTerm: ", searchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className={isShowSearchContainer ? "showSearchContainer" : "hideSearchContainer"}>
      <SearchForm searchTerm={searchTerm} handleChange={handleChange} />
      <ItemsToDisplay moviesToDisplay={moviesToDisplay} />
    </div>
  );
};
export default SearchContainer;
