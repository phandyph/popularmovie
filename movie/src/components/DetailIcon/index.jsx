import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Menu } from "@mui/material";
import "./DetailIcon.css";
import DetailPopup from "../Features/DetailPopup";

const DetailIcon = ({ id, handleClose, open, handleClick, anchorEl }) => {
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={(e) => handleClick(e, id)}
      >
        <MoreHorizIcon />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <DetailPopup handleClose={handleClose} />
      </Menu>
    </div>
  );
};

export default DetailIcon;
