import "./CardContainer.css";
import Card from "../Card";
import ButtonLoadMore from "../ButtonLoadMore";
const CardContainer = ({
  movies,
  onClick,
  moviesDisplay,
  fourIncreasement,
}) => {
  return (
    <div className="cardContainer">
      <Card movies={movies} />
      <br />
      <br />
      <ButtonLoadMore
        moviesDisplay={moviesDisplay}
        fourIncreasement={fourIncreasement}
        onClick={onClick}
      />
    </div>
  );
};
export default CardContainer;
