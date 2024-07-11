import Button from "../../components/Button";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__special-text">
        <span>css</span> <span>is</span> <span>awesome</span>
      </p>
      <p className="footer__company title title--lines">nabthat</p>
      <Button secoundary className="footer__button footer__button--arrow">
        <span>Pokaż</span>
      </Button>
    </footer>
  );
};

export default Footer;
