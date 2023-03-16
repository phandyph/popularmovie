import "./Rightbody.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Rightbody = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "left",
    color: theme.palette.text.secondary,
  }));
  return (
    <div className="right-body">
      <Box sx={{ flexGrow: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs>
            <Item className="mycard">
              <div className="image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                  alt=""
                />
              </div>
              <div className="description">
                <p className="bold">Novel: is better than phone. Trust Me!</p>
                <p>Dec 07, 2022</p>
              </div>
            </Item>
          </Grid>

          <Grid item xs>
            <Item className="mycard">
              <div className="image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                  alt=""
                />
              </div>
              <div className="description">
                <p className="bold">Novel: is better than phone. Trust Me!</p>
                <p>Dec 07, 2022</p>
              </div>
            </Item>
          </Grid>

          <Grid item xs>
            <Item className="mycard">
              <div className="image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                  alt=""
                />
              </div>
              <div className="description">
                <p className="bold">Novel: is better than phone. Trust Me!</p>
                <p>Dec 07, 2022</p>
              </div>
            </Item>
          </Grid>

          <Grid item xs>
            <Item className="mycard">
              <div className="image">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                  alt=""
                />
              </div>
              <div className="description">
                <p className="bold">Novel: is better than phone. Trust Me!</p>
                <p>Dec 07, 2022</p>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Rightbody;
