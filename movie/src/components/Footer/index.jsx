import "./Footer.css";
import Basic from "../../data/Basic.json";
import GetInvolved from "../../data/GetInvolved.json";
import Community from "../../data/Community.json";
import Legal from "../../data/Legel.json";

import NavbarPopup from "../Features/NavbarPopup";
const FOOTER_LOGO =
  "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="imgAndBtn">
        <div>
          <img className="footerLogo" src={FOOTER_LOGO} alt="" />
        </div>
        <button className="btnFooter">JOIN THE COMMUNITY</button>
      </div>

      <div className="footerNav">
        <div className="eachFooterNav">
          <h3 className="footerTitle">THE BASICS</h3>
          <ul>
            <NavbarPopup navbarList={Basic} />
          </ul>
        </div>

        <div className="eachFooterNav">
          <h3 className="footerTitle">GET INVOLVED</h3>
          <ul>
            <NavbarPopup navbarList={GetInvolved} />
          </ul>
        </div>

        <div className="eachFooterNav">
          <h3 className="footerTitle">COMMUNITY</h3>
          <ul>
            <NavbarPopup navbarList={Community} />
          </ul>
        </div>

        <div className="eachFooterNav">
          <h3 className="footerTitle">LEGAL</h3>
          <ul>
            <NavbarPopup navbarList={Legal} />
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
