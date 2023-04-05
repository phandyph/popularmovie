import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
    <Card className="filterCard">
      <CardActions
        disableSpacing
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <span className="filterWord">Filters</span>
        <ExpandMore expand={expanded} aria-label="show more">
          <ArrowForwardIosIcon />
        </ExpandMore>
      </CardActions>
      <GenresDisplay
        genres={genres}
        expanded={expanded}
        isChecked={isChecked}
        onClick={onClick}
      />
    </Card>
  );
};

export default FilterCard;
