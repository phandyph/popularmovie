import "./Card.css";
import Grid from "@mui/material/Grid";
import { Item } from "semantic-ui-react";
import DetailIcon from "../DetailIcon";
import months from "../../data/Month.json";
import { useState } from "react";
const IMAGE_URL =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80";

const Card = ({ movies }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const newMovies = [...movies];
  const [idCardClicked, setIdCardClicked] = useState(0);

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    newMovies.forEach((mo) => {
      if (mo.id === id) {
        setIdCardClicked(mo.id);
      }
    });
  };

  const handleClose = () => {
    setAnchorEl(false);
    setIdCardClicked(0);
  };

  const isCheckOnCard = (idCard, idClick) =>
    idCard === idClick ? "blur" : "none";

  // Set date format
  const formatDate = (newDate) => {
    const d = new Date(newDate);
    const year = d.getFullYear();
    const date = d.getDate();
    const monthIndex = d.getMonth();
    const monthName = months[monthIndex];
    const formatted = `${monthName} ${date} ${","} ${year}`;
    return formatted.toString();
  };

  return (
    <Grid container spacing={4}>
      {movies.map((movie) => {
        return (
          <Grid key={movie.id} item xs={6} md={6} lg={3}>
            <div className="myCard">
              <div>
                <Item className="moreDetail">
                  <DetailIcon
                    id={movie.id}
                    handleClick={handleClick}
                    handleClose={handleClose}
                    open={open}
                    anchorEl={anchorEl}
                  />
                </Item>
                <Item>
                  <img src={IMAGE_URL} alt="" />
                </Item>
                <Item className="description">
                  <Item className="voteAverage">{movie.vote_average}</Item>
                  <p className="bold paragraph">{movie.title}</p>
                  <p className="paragraph">{formatDate(movie.release_date)}</p>
                </Item>
              </div>
              <div className={isCheckOnCard(idCardClicked, movie.id)}></div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Card;
