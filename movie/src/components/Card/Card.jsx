import "./Card.css";
import Grid from "@mui/material/Grid";
import { Item } from "semantic-ui-react";
import DotIcon from "../Icons/DotIcon/DotIcon";
const IMAGE_URL =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80";

// Here, I am using movies from json. Not movies from sort
const Card = ({ movies }) => {
  console.log("Movies: ", movies);
  return (
    <Grid container spacing={3}>
      {movies.map((movie, i) => {
        return (
          <Grid className="grid" key={movie.id} item xs={12} md={6} lg={3}>
            <Grid className="myCard">
              <Item className="moreDetail">
                <DotIcon />
              </Item>
              <Item>
                <img src={IMAGE_URL} alt="" />
              </Item>
              <Item className="description">
                <Item className="voteAverage">{movie.vote_average}</Item>
                <p className="bold">{movie.title}</p>
                <p>Date: {movie.release_date}</p>
                <p>Rate: {movie.vote_average}</p>
                <p>Popularity: {movie.popularity}</p>
              </Item>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Card;