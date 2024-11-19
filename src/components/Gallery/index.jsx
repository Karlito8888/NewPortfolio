import { useState, useEffect, useCallback } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SLIDE_INTERVAL = 4000;

const Gallery = ({ projects = [], isHovered }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasProjects = projects.length > 0;

  const changeSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!hasProjects || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [projects.length, isHovered, hasProjects]);

  if (!hasProjects) {
    return (
      <p role="alert" className="no-projects">
        Aucun projet trouvé...
      </p>
    );
  }

  const currentProject = projects[currentSlide];

  return (
    <div role="region" aria-label="Galerie de projets">
      <div className="gallery-container">
        <div 
          className="carousel-container"
          aria-live="polite"
        >
          <img
            className="carousel-img active"
            src={currentProject.img}
            alt={`${currentProject.title} - Capture d'écran du projet`}
            loading="lazy"
          />
        </div>
        <div className="title-links">
          <h3 id={`project-${currentProject.title.toLowerCase().replace(/\s+/g, '-')}`}>
            {currentProject.title}
          </h3>
          <div className="project-links">
            <a
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-labelledby={`project-${currentProject.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="project-link"
            >
              <FontAwesomeIcon
                icon={faLink}
                style={{ color: "#70d7f7" }}
                size="lg"
                aria-hidden="true"
              />
              <span className="sr-only">Voir le projet</span>
            </a>
            <a
              href={currentProject.link2}
              target="_blank"
              rel="noopener noreferrer"
              aria-labelledby={`project-${currentProject.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="github-link"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "#70d7f7" }}
                size="lg"
                aria-hidden="true"
              />
              <span className="sr-only">Voir le code sur GitHub</span>
            </a>
          </div>
        </div>
        <p>{currentProject.infos}</p>
      </div>
      <div 
        className="dots-container"
        role="tablist"
        aria-label="Navigation des projets"
      >
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => changeSlide(index)}
            aria-label={`Voir le projet ${projects[index].title}`}
            aria-selected={currentSlide === index}
            role="tab"
            type="button"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
