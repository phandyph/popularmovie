import "./CardContainer.css";
import Card from "../Card";
import ButtonLoadMore from "../ButtonLoadMore";

const CardContainer = ({ onClick, itemForCardContainer }) => {
  return (
    <div className="cardContainer">
      <Card movies={itemForCardContainer.items} />
      <ButtonLoadMore
        loadMoreFunctionAndData={{
          amountItemsDisplay: itemForCardContainer.amountItemsDisplay,
          fourMoviesLength: itemForCardContainer.fourItems,
        }}

        onClick ={ onClick}
      />
    </div>
  );
};
export default CardContainer;
