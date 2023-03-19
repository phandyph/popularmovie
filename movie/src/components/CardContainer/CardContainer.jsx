import "./CardContainer.css";
import Card from "./Card/Card";

const CardContainer = ({movies}) => {
  return (
    <div className="card_container">
      <Card
        movies={movies}
      />
    </div>
  );
};
export default CardContainer;
