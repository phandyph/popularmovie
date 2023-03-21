import "./ActionContainer.css";
import SortCard from "../SortCard/SortCard";
import FilterCard from "../FilterCard/FilterCard";
import { Button } from "@mui/material";
const ActionContainer = ({ movies }) => {
  return (
    <div className="action_container">
      <SortCard />
      <FilterCard />
      <Button
        style={{
          fontWeight: "bold",
          fontSize: "1rem",
          padding: "12px",
          backgroundColor: "rgb(229, 232, 235)",
          color: "black",
          boxShadow:
            "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
          borderRadius: "10px",
        }}
        sx={{ width: 1 }}
      >
        Search
      </Button>
    </div>
  );
};

export default ActionContainer;
