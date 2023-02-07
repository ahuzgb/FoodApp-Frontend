import "../components/footer.css";
import Logo from "./images/beanie-logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <img src={Logo} alt="logo" style={{ width: "200px" }} />
    </div>
  );
};

export default Footer;
