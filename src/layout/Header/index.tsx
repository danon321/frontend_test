import Logo from "../../components/Logo";
import { useUser } from "../../context/UserContext";
import "./Header.scss";

const Header = () => {
  const { user } = useUser();
  const userName = `${user.firstName} ${user.lastName}`;
  return (
    <header className="header">
      <Logo />
      <p className="header__text">
        <span>
          Zadanie <strong>rekrutacyjne</strong>
        </span>
        {userName || <span>{userName}</span>}
      </p>
    </header>
  );
};

export default Header;
