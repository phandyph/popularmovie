import "./Card.css";
import Grid from "@mui/material/Grid";
import { Item } from "semantic-ui-react";
import DetailIcon from "../DetailIcon";
import months from "../../data/Month.json";
import { useState, useCallback } from "react";
import CircularProgress from "@mui/material/CircularProgress";
const IMAGE_URL =
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80";

const Card = ({ movies }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const movieList = [...movies];
  const [cardId, setCardId] = useState(0);

  // use on format
  const dateFormatted = useCallback((_date) => {
    const date = new Date(_date);
    const monthName = months[date.getMonth()];
    return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  }, []);

  const voteAverageAsPercent = useCallback((voteAverage) => {
    return voteAverage * 10;
  }, []);

  // use on button
  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    movieList.forEach((mo) => {
      if (mo.id === id) {
        setCardId(mo.id);
      }
    });
  };

  const handleClose = () => {
    setAnchorEl(false);
    setCardId(0);
  };

  // use on style.
  const isCircleColor = (voteAverage) =>
    voteAverage > 80 ? "success" : "warning";

  const isCardClicked = (idCard, idClick) =>
    idCard === idClick ? "blur" : "none";

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
                <div className="description">
                  <div className="voteAverage">
                    <CircularProgress
                      color={isCircleColor(
                        voteAverageAsPercent(movie.vote_average)
                      )}
                      variant="determinate"
                      value={voteAverageAsPercent(movie.vote_average)}
                    />
                    <span className="voteAverageNum">
                      {voteAverageAsPercent(movie.vote_average)}%
                    </span>
                  </div>

                  <p className="bold paragraph">{movie.title}</p>
                  <p className="paragraph">
                    {dateFormatted(movie.release_date)}
                  </p>
                </div>
              </div>
              <div className={isCardClicked(cardId, movie.id)}></div>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Card;
