import './Card.css';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FaEllipsisH } from "react-icons/fa";

const Card = ({
    movies
}) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        textAlign: "left",
        color: theme.palette.text.secondary,
    }));

    return (
        <Grid container spacing={3}>
                {movies.map((movie, i)=>{
                    return (
                        <Grid key={movie.id} item xs={6} lg={3}>
                            <Item className="my-card">
                                <div className='more-detail'>
                                    <FaEllipsisH/>
                                </div>
                                <div className="image">
                                    <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8&w=1000&q=80" alt=""/>
                                </div>
                                <div className="description">
                                    <p className="bold">{movie.title}</p>
                                    <p>{movie.release_date}</p>
                                </div>
                            </Item>
                        </Grid>
                    )
                })}
        </Grid>
    )
}

export default Card;