import "./HumbergerNavbar.css";
import NavbarPopup from "../Features/NavbarPopup";

const HumbergerNavbar = ({ mainNavMenu, userPreferencesMenu, onMobile }) => {
  return (
    <div className={onMobile ? "showMobileNavbar" : "hideMobileNavbar"}>
      <div className="hamburgerMenu">
        {mainNavMenu.map((nav, i) => {
          return (
            <div key={i} class="dropdownBuger">
              <button class="dropbtnBuger">{nav.label}</button>
              <div class="dropdownContentBuger">
                <NavbarPopup navbarList={nav.component} />
              </div>
            </div>
          );
        })}

        {userPreferencesMenu.map((menu, i) => {
          return (
            <div key={i} class="dropdownBuger">
              <button class="dropbtnBuger">{menu.label}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HumbergerNavbar;
