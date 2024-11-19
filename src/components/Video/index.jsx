import { useState, useCallback, memo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import myVideo from "./Mern.mp4";
import myPhoto from "./mern.jpeg";

const VideoComponent = () => {
  const [isVideoError, setIsVideoError] = useState(false);

  const handleVideoError = useCallback(() => {
    setIsVideoError(true);
  }, []);

  return (
    <div 
      className="video-container"
      role="region"
      aria-label="Démonstration du projet E-CommMERN"
    >
      <div 
        className="title-and-link"
        role="heading"
        aria-level="3"
      >
        <p className="actual-project-title">E-CommMERN</p>
        <a
          href="https://github.com/Karlito8888/E-CommMERN"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          aria-label="Voir le code source de E-CommMERN sur GitHub"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="github-icon"
            size="xl"
            aria-hidden="true"
            title="GitHub"
          />
          <span className="sr-only">Voir le code sur GitHub</span>
        </a>
      </div>
      {!isVideoError ? (
        <video
          controls
          autoPlay
          muted
          loop
          preload="metadata"
          playsInline
          poster={myPhoto}
          onError={handleVideoError}
          aria-label="Démonstration vidéo du projet E-CommMERN"
        >
          <source 
            src={myVideo} 
            type="video/mp4" 
          />
          <track 
            kind="captions" 
            srcLang="fr" 
            label="Français"
          />
          <p>
            Votre navigateur ne prend pas en charge la lecture de vidéos.
            Vous pouvez <a href={myVideo}>télécharger la vidéo</a> pour la visionner.
          </p>
        </video>
      ) : (
        <img
          src={myPhoto}
          alt="Capture d'écran du projet E-CommMERN"
          className="fallback-image"
        />
      )}
    </div>
  );
};

export default memo(VideoComponent);
