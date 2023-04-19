import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const DisplayPageViaRoute = ({ routes }) => {
  return (
    <Router>
      <Routes>
        {routes.map((page, i) => {
          return (
            <Route key={i} path={page.path} element={page.element}></Route>
          );
        })}
      </Routes>
    </Router>
  );
};

export default DisplayPageViaRoute;
