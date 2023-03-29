import "./ButtonLoadMore.css";
const ButtonLoadMore = ({ onClick, fourMoviesLength, moviesDisplay }) => {
  return (
    <button
      disabled={fourMoviesLength > moviesDisplay}
      onClick={onClick}
      className="loadMoreBtn"
      type="submit"
    >
      Load More
    </button>
  );
};

export default ButtonLoadMore;
