import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./SortCard.css";
import { useState } from "react";
import sortOption from "../Json/SortOption.json";
import ExpandMore from "../ExpandMore/ExpandMore";
import SortPopup from "../PopupCard/SortPopup/SortPopup";

const SortCard = ({ onClick }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="cardTest">
      <CardActions
        className="card"
        disableSpacing
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <span className="typeSort">Sort</span>

        <ExpandMore
          expand={expanded}
          Typography
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ArrowForwardIosIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <hr />
        <CardContent>
          <Typography paragraph>Sort Results By</Typography>
          <SortPopup
            sortOption={sortOption}
            value={"Popularity Descending"}
            onClick={onClick}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default SortCard;
