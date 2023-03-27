import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./FilterCard.css";
import BoxDisplayGenres from "../PopupCard/BoxDisplayGenres/BoxDisplayGenres";
import genres from "../Json/Genres.json";
import ExpandMore from "../ExpandMore/ExpandMore";
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
        <span className="filter">Filters</span>
        <ExpandMore expand={expanded} aria-label="show more">
          <ArrowForwardIosIcon />
        </ExpandMore>
      </CardActions>
      <BoxDisplayGenres
        genres={genres}
        expanded={expanded}
        isChecked={isChecked}
        onClick={onClick}
      />
    </Card>
  );
};

export default FilterCard;
