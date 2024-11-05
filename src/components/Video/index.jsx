import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myVideo from "./Mern.mp4";
import myPhoto from "./mern.jpeg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const VideoComponent = () => {
  return (
    <div className="video-container">
      <div className="title-and-link">
        <p className="actual-project-title">E-CommMERN</p>
        <a
          href="https://github.com/Karlito8888/E-CommMERN"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Voir le code source de E-CommMERN sur GitHub`}
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "#70d7f7" }}
            size="xl"
            aria-hidden="true"
          />
          <span className="sr-only">Voir le code sur GitHub</span>
        </a>
      </div>
      <video
        controls
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        poster={myPhoto}
      >
        <source src={myVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoComponent;
