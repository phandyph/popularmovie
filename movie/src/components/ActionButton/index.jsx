import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState, Fragment } from "react";
import ActionContainer from "../ActionContainer";

const ActionButton = ({ movies, onGetMoviesAfterDoAction }) => {
  const [state, setState] = useState({
    "Action Card": false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    > 
      Here is actionContainer
      <div>
      <ActionContainer movies={movies} onSearch={onGetMoviesAfterDoAction} />
      </div>
    </Box>
  );

  return (
    <div>
      {["Action Card"].map((anchor) => (
        <Fragment key={anchor}>
          <button className="actionBtn" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
};

export default ActionButton;
