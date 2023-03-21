import ActionContainer from "../ActionContainer/ActionContainer";
import CardContainer from "../CardContainer/CardContainer";
import "./MainContainer.css";

const MainContainer = ({ movies }) => {
  return (
    <div className="body">
      <ActionContainer movies={movies} />
      <CardContainer movies={movies} />
    </div>
  );
};

export default MainContainer;
