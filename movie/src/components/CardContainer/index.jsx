import "./CardContainer.css";
import Card from "../Card/Card";

const CardContainer = ({ movies }) => {
  return (
    <div className="cardContainer">
      <Card movies={movies} />
    </div>
  );
};
export default CardContainer;
