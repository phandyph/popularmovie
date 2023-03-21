import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Menu } from "@mui/material";
import "./DotIcon.css";
import DotPopup from "../../PopupCard/DotPopup/DotPopup";

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // I use style here because it is style prop.
        PaperProps={{
          style: {
            width: "17%",
            padding: "10px",
            minWidth: "120px",
            magin: "auto",
          },
        }}
      >
        <DotPopup handleClose={handleClose} />
      </Menu>
    </div>
  );
}
