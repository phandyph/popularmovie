import "./CardContainer.css";
import Card from "../Card";
import ButtonLoadMore from "../ButtonLoadMore";
const CardContainer = ({
  movies,
  onClick,
  moviesDisplay,
  fourMoviesLength,
}) => {
  return (
    <div className="cardContainer">
      <Card movies={movies} />
      <ButtonLoadMore
        moviesDisplay={moviesDisplay}
        fourMoviesLength={fourMoviesLength}
        onClick={onClick}
      />
    </div>
  );
};
export default CardContainer;
