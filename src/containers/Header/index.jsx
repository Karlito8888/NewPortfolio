import DarkMode from "../../components/DarkMode";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";

const Header = () => {
  return (
    <header className="header-container" id="header">
      <div className="logo">
        <h1 className="sr-only">
          Bienvenue sur le site portfolio de Charles BOURGAULT
        </h1>
        <h2 className="sr-only">Développeur Web et Data Analyst</h2>
        <Logo />
      </div>
      <DarkMode />
      <Navbar />
    </header>
  );
};

export default Header;
