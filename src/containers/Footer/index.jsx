import { memo } from 'react';
import Logo from "../../components/Logo";
import { GithubLink, LinkedInLink } from "../../components/NavLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="footer"
      role="contentinfo"
      aria-label="Pied de page"
    >
      <Logo />
      <p>
        <span aria-label="Copyright">©</span>
        {` Charles BOURGAULT ${currentYear}`}
      </p>
      <div 
        className="footer-navlinks"
        role="navigation"
        aria-label="Liens sociaux"
      >
        <nav>
          <ul role="list">
            <GithubLink />
            <LinkedInLink />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default memo(Footer);
