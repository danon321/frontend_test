import Logo from "../../components/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <p className="header__text">
        Zadanie <strong>rekrutacyjne</strong>
      </p>
    </header>
  );
};

export default Header;
