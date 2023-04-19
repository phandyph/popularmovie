import { BrowserRouter as Router } from "react-router-dom";
import "./Footer.css";
import Basic from "../../data/Basic.json";
import GetInvolved from "../../data/GetInvolved.json";
import Community from "../../data/Community.json";
import Legal from "../../data/Legel.json";

import NavbarPopup from "../Features/NavbarPopup";
const FOOTER_LOGO =
  "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";

const Footer = () => {
  const eachFooterData = [
    { title: "THE BASICS", component: Basic },
    { title: "GET INVOLVED", component: GetInvolved },
    { title: "COMMUNITY", component: Community },
    { title: "LEGAL", component: Legal },
  ];
  return (
    <Router>
      <div className="footerContainer">
        <div className="footer">
          <div className="imgAndBtn">
            <div className="footerLogoContainer">
              <img className="footerLogo" src={FOOTER_LOGO} alt="" />
            </div>
            <div>
              <button className="btnFooter">JOIN THE COMMUNITY</button>
            </div>
          </div>
          <div className="footerNav">
            {eachFooterData.map((data, i) => {
              return (
                <div key={i} className="eachFooterNav">
                  <h3 className="footerTitle">{data.title}</h3>
                  <ul>
                    <NavbarPopup navbarList={data.component} />
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Footer;
