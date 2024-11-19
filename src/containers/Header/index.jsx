import { memo } from 'react';
import DarkMode from "../../components/DarkMode";
import Logo from "../../components/Logo";
import Navbar from "../../components/Navbar";

const Header = () => {
  return (
    <header 
      className="header-container" 
      id="header"
      role="banner"
    >
      <div 
        className="logo"
        role="banner"
        aria-labelledby="main-title job-title"
      >
        <h1 
          id="main-title" 
          className="sr-only"
        >
          Bienvenue sur le site portfolio de Charles BOURGAULT
        </h1>
        <h2 
          id="job-title" 
          className="sr-only"
        >
          Développeur Web et Data Analyst
        </h2>
        <Logo />
      </div>
        <DarkMode />
        <Navbar />
    </header>
  );
};

export default memo(Header);
