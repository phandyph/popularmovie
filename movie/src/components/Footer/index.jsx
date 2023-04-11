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
    { title: "THE BASICS", navs: Basic },
    { title: "GET INVOLVED", navs: GetInvolved },
    { title: "COMMUNITY", navs: Community },
    { title: "LEGAL", navs: Legal },
  ];
  return (
    <div className="footer">
      <div className="imgAndBtn">
        <div>
          <img className="footerLogo" src={FOOTER_LOGO} alt="footerLogo" />
        </div>
        <button className="btnFooter">JOIN THE COMMUNITY</button>
      </div>

      <div className="footerNav">
        {eachFooterData.map((data,i) => {
          return (
            <div key={i} className="eachFooterNav">
              <h3 className="footerTitle">{data.title}</h3>
              <ul>
                <NavbarPopup navbarList={data.navs} />
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Footer;
