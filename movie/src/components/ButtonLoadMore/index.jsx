import "./ButtonLoadMore.css";
const ButtonLoadMore = ({ onClick, fourIncreasement, moviesDisplay }) => {
  return (
    <button
      disabled={fourIncreasement > moviesDisplay}
      onClick={() => onClick()}
      className="loadMoreBtn"
      type="submit"
    >
      Load More
    </button>
  );
};

export default ButtonLoadMore;
