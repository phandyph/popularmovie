import "./SearchForm.css";

const SearchForm = ({ searchTerm, handleChange }) => {
  return (
    <div>
      <input
        value={searchTerm}
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};
export default SearchForm;
