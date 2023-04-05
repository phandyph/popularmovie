import "./ButtonLoadMore.css";
const ButtonLoadMore = ({ loadMoreFunctionAndData }) => {
  return (
    <button
      disabled={
        loadMoreFunctionAndData.fourMoviesLength >
        loadMoreFunctionAndData.amountItemsDisplay
      }
      onClick={loadMoreFunctionAndData.onClick}
      className="loadMoreBtn"
      type="submit"
    >
      Load More
    </button>
  );
};

export default ButtonLoadMore;
