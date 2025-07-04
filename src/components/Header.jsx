import Globe from "../assets/images/globe.png";
import "../assets/css/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={Globe} alt="Globe png" className="logo" />
      <h1 className="logo-text">My travel journal.</h1>
    </header>
  );
}

export default Header;
