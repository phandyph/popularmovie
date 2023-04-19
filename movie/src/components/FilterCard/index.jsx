import CardActions from "@mui/material/CardActions";
import "./FilterCard.css";
import GenresDisplay from "../Features/GenresDisplay";
import genres from "../../data/Genres.json";
import ExpandMore from "../ExpandMore";
import { useState } from "react";

const FilterCard = ({ isChecked, onClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="eachActionCard">
      <CardActions
        disableSpacing
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <span className="filterWord">Filters</span>
        <ExpandMore expand={expanded} aria-label="show more"></ExpandMore>
      </CardActions>
      <GenresDisplay
        genres={genres}
        expanded={expanded}
        isChecked={isChecked}
        onClick={onClick}
      />
    </div>
  );
};

export default FilterCard;
