import { NavLink } from "react-router-dom";
const NavbarPopup = ({ navbarList }) => {
  return (
    <>
      {navbarList.map((navbar) => {
        return (
          <li key={navbar.id}>
            <NavLink className="navlink" to={navbar.link}>
              {navbar.label}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavbarPopup;
