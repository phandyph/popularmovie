const NavbarPopup = ({ navbarList }) => {
  return (
    <ul className="w3-dropdown-content listLi w3-bar-block w3-dark-white">
      {navbarList.map((navbar) => {
        return (
          <li
            key={navbar.id}
            className="liEachNav w3-bar-item w3-button w3-mobile"
          >
            {navbar.label}
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarPopup;
