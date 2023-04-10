import "./ButtonLoadMore.css";
const ButtonLoadMore = ({ loadMoreFunctionAndData, onClick }) => {
  return (
    <button
      className="loadMoreBtn"
      onClick={() => onClick()}
      type="button"
      disabled={
        loadMoreFunctionAndData.fourMoviesLength >
        loadMoreFunctionAndData.amountItemsDisplay
      }
    >
      <p>Load More</p>
    </button>
  );
};
export default ButtonLoadMore;
