import "./SearchContainer.css";
import SearchForm from "../Features/SearchForm";
import ItemsToDisplay from "../Features/ItemToDisplay";
import movies from "../../data/Movies.json";
import { useState } from "react";
const SearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const moviesToDisplay = movies;

  console.log("searchTerm: ", searchTerm);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <SearchForm searchTerm={searchTerm} handleChange={handleChange} />
      <ItemsToDisplay moviesToDisplay={moviesToDisplay} />
    </>
  );
};
export default SearchContainer;
