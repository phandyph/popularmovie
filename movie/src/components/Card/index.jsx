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

  // // Set vote_average be %
  // const percentage = (voteAverage) => {
  //   return voteAverage * 10;
  // };

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
                  <Item className="voteAverage">
                    {/* <svg viewBox="0 0 64 64" className="pie">
                      <circle r="40%" cx="50%" cy="50%" stroke="green" />
                      <text
                        fill="#FFFFFF"
                        font-width="bold"
                        font-size="20"
                        x="20"
                        y="40"
                      >
                        {percentage(movie.vote_average)}
                      </text>
                    </svg> */}

                    <div className="outer_ring">
                      <div
                        className="user_score_chart 5e55ba97a93d2500134fa1ee"
                        data-percent="73.0"
                      >
                        <div className="percent">
                          <span className="icon icon-r73">{movie.vote_average}</span>
                        </div>
                        <canvas height="34" width="34"></canvas>
                      </div>
                    </div>
                  </Item>
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
