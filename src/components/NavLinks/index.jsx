import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CvLink = ({ onClick }) => (
  <li>
    <a
      href="./CV_Charles_BOURGAULT.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="CV_Charles_BOURGAULT.pdf"
      aria-label="CV"
      className="link-cv"
      onClick={onClick}
    >
      CV <FontAwesomeIcon icon={faDownload} size="sm" />
    </a>
  </li>
);

export const GithubLink = () => (
  <li>
    <a
      href="https://github.com/Karlito8888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className="github-icon"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </li>
);

export const LinkedInLink = () => (
  <li>
    <a
      href="https://www.linkedin.com/in/charles-bourgault-407694300/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className="linkedin-icon"
    >
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
  </li>
);
