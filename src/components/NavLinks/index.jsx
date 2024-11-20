import Github from "./Github.svg";
import LinkedIn from "./Linkedin.svg";
import SquareCv from "./SquareCv.svg";

export const CvLink = ({ onClick }) => (
  <li role="none" className="link-item">
    <a
      href="./CV_Charles_BOURGAULT.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="CV_Charles_BOURGAULT.pdf"
      aria-label="Télécharger le CV de Charles BOURGAULT"
      className="link-cv"
      onClick={onClick}
      role="menuitem"
    >
      <img 
        src={SquareCv} 
        className="logo-cv" 
        alt="" 
        aria-hidden="true"
      />
      <span className="sr-only">Télécharger mon CV</span>
    </a>
  </li>
);

export const GithubLink = () => (
  <li role="none" className="link-item">
    <a
      href="https://github.com/Karlito8888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visitez mon profil GitHub"
      className="github-icon"
      role="menuitem"
    >
      <img 
        src={Github} 
        className="logo-github" 
        alt="" 
        aria-hidden="true"
      />
      <span className="sr-only">Voir mon profil GitHub</span>
    </a>
  </li>
);

export const LinkedInLink = () => (
  <li role="none" className="link-item">
    <a
      href="https://www.linkedin.com/in/charles-bourgault-407694300/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visitez mon profil LinkedIn"
      className="linkedin-icon"
      role="menuitem"
    >
      <img 
        src={LinkedIn} 
        className="logo-linkedin" 
        alt="" 
        aria-hidden="true"
      />
      <span className="sr-only">Voir mon profil LinkedIn</span>
    </a>
  </li>
);
