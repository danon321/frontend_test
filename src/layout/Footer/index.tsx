import Button from "../../components/Button";
import Frame from "../../components/ui/Frame";
import { useUser } from "../../context/UserContext";
import "./Footer.scss";

const Footer = () => {
  const { setUser, resetUser } = useUser();

  function resetSettings() {
    resetUser();
  }

  return (
    <footer className="footer">
      <p className="footer__special-text">
        <span>css</span> <span>is</span> <span>awesome</span>
      </p>
      <p className="footer__company title title--lines">nabthat</p>

      <Button secoundary className="footer__button footer__button--arrow">
        <span>Pokaż</span>
      </Button>
      <Frame className="footer__frame">
        <ul>
          <li onClick={resetSettings}>Zresetuj ustawienia</li>
          <li
            onClick={() =>
              setUser({ firstName: "Daniel", lastName: "Dobroczek" })
            }
          >
            Pokaż dane osobowe
          </li>
        </ul>
      </Frame>
    </footer>
  );
};

export default Footer;
