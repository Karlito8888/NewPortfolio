import Logo from "../../components/Logo";
import { GithubLink, LinkedInLink } from "../../components/NavLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <p>© Charles BOURGAULT 2024</p>
      <div className="footer-navlinks">
      <GithubLink />
      <LinkedInLink />
      </div>
    </footer>
  );
};

export default Footer;
