const NavbarPopup = ({ navbarList }) => {
  return (
    <>
      {navbarList.map((navbar) => {
        return <li key={navbar.id}>{navbar.label}</li>;
      })}
    </>
  );
};

export default NavbarPopup;
