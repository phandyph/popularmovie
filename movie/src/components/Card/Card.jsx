import "./Card.css";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { Item } from "semantic-ui-react";
import DotIcon from "../Icons/DotIcon/DotIcon";
const IMAGE_URL =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80";

const Card = ({ movies }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        {movies.map((movie, i) => {
          return (
            <Grid className="grid" key={movie.id} item xs={12} md={6} lg={3}>
              <Grid className="my-card">
                <Item className="more-detail">
                  <DotIcon />
                </Item>
                <Item className="image">
                  <img src={IMAGE_URL} alt="" />
                </Item>
                <Item className="description">
                  <Item className="runTime">100</Item>
                  <p className="bold">{movie.title}</p>
                  <p>{movie.release_date}</p>
                </Item>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Card;
