import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import sortOption from "./SortOption.json";
import "./SortCard.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(91deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      style={{
        marginBottom: "15px",
        boxShadow:
          "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
        borderRadius: "8px",
      }}
      sx={{ maxWidth: 345 }}
    >
      <CardActions
        className="card"
        disableSpacing
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <Typography style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
          Sort
        </Typography>
        <ExpandMore expand={expanded} aria-label="show more">
          <ArrowForwardIosIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <hr />
        <CardContent>
          <Typography paragraph>Sort Results By</Typography>
          <Typography>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <NativeSelect
                  style={{
                    backgroundColor: "rgb(229, 232, 235)",
                    borderRadius: "5px",
                    padding: "5px",
                    border: "none",
                  }}
                >
                  {sortOption.map((option) => {
                    return (
                      <option style={{ padding: "10px" }}>
                        {option.label}
                      </option>
                    );
                  })}
                </NativeSelect>
              </FormControl>
            </Box>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
