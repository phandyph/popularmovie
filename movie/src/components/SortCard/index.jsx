import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import "./SortCard.css";
import { useState } from "react";
import sortOption from "../../data/SortOption.json";
import ExpandMore from "../ExpandMore";
import SortPopup from "../Features/SortPopup";

const SortCard = ({ onClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="eachActionCard">
      <CardActions
        disableSpacing
        expand={isExpanded}
        onClick={handleExpandClick}
        aria-expanded={isExpanded}
        aria-label="show more"
      >
        <span className="typeSort">Sort</span>

        <ExpandMore
          expand={isExpanded}
          Typography
          onClick={handleExpandClick}
          aria-expanded={isExpanded}
          aria-label="show more"
        >
        </ExpandMore>
      </CardActions>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit>
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
    </div>
  );
};
export default SortCard;
