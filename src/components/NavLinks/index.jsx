import Github from "./Github.svg";
import LinkedIn from "./Linkedin.svg";
import SquareCv from "./SquareCv.svg";

export const CvLink = ({ onClick }) => (
  <li className="link-item">
    <a
      href="./CV_Charles_BOURGAULT.pdf"
      target="_blank"
      rel="noopener noreferrer"
      // download="CV_Charles_BOURGAULT.pdf"
      aria-label="Télécharger le CV de Charles BOURGAULT"
      className="link-cv"
      onClick={onClick}
    >
      <img src={SquareCv} className="logo-cv" alt="logo du cv" />
    </a>
  </li>
);

export const GithubLink = () => (
  <li className="link-item">
    <a
      href="https://github.com/Karlito8888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visitez mon profil GitHub (ouvre un nouvel onglet)"
      className="github-icon"
    >
      <img src={Github} className="logo-github" alt="logo de github" />
    </a>
  </li>
);

export const LinkedInLink = () => (
  <li className="link-item">
    <a
      href="https://www.linkedin.com/in/charles-bourgault-407694300/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visitez mon profil LinkedIn (ouvre un nouvel onglet)"
      className="linkedin-icon"
    >
      <img src={LinkedIn} className="logo-linkedin" alt="logo de linkedin" />
    </a>
  </li>
);
