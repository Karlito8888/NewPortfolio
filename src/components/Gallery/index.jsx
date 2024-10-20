import { useState, useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = ({ projects = [], isHovered }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const hasProjects = projects.length > 0;

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
      }, 4000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [projects.length, isHovered]);

  if (!hasProjects) {
    return <p>Aucun projet trouvé...</p>;
  }

  return (
    <>
      <div className="gallery-container">
        <div className="carousel-container">
          <img
            className={`carousel-img active`}
            src={projects[currentSlide].img}
            alt={`Slide ${currentSlide + 1} - ${projects[currentSlide].title}`}
          />
        </div>
        <div className="title-links">
          <h3>{projects[currentSlide].title}</h3>
          <div className="project-links">
            <a
              href={projects[currentSlide].link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le projet ${projects[currentSlide].title}`}
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
              href={projects[currentSlide].link2}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Voir le code source de ${projects[currentSlide].title} sur GitHub`}
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
        <p>{projects[currentSlide].infos}</p>
      </div>
      <div className="dots-container">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => changeSlide(index)}
            aria-label={`Diapositive ${index + 1}`}
            type="button"
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
