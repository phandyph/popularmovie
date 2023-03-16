import Leftbody from "../leftbody/Leftbody";
import Rightbody from "../rightbody/Rightbody";
import "./Body.css";

const Body = () => {
  return (
    <div className="body">
      <Leftbody />
      <Rightbody />
    </div>
  );
};

export default Body;
