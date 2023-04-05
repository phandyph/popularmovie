import "./Card.css";
import Grid from "@mui/material/Grid";
import { Item } from "semantic-ui-react";
import DetailIcon from "../DetailIcon";
const IMAGE_URL =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80";

const Card = ({ movies }) => {
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => {
        return (
          <Grid className="grid" key={movie.id} item xs={6} md={6} lg={3}>
            <div className="myCard">
              <Item className="moreDetail">
                <DetailIcon />
              </Item>
              <Item>
                <img src={IMAGE_URL} alt="" />
              </Item>
              <Item className="description">
                <Item className="voteAverage">{movie.vote_average}</Item>
                <p className="bold">{movie.title}</p>
                <p className="paragraph">Date: {movie.release_date}</p>
                <p className="paragraph">Rate: {movie.vote_average}</p>
                <p className="paragraph">Popularity: {movie.popularity}</p>
              </Item>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Card;
