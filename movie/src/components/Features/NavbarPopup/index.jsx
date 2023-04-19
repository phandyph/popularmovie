import { NavLink } from "react-router-dom";
const NavbarPopup = ({ navbarList }) => {
  return (
    <>
      {navbarList.map((navbar) => {
        return (
          <li key={navbar.id}>
            <NavLink
              activeclassname="active"
              reloadDocument
              className="navlink"
              exact="true"
              to={navbar.link}
            >
              {navbar.label}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};

export default NavbarPopup;
