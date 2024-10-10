import React, { useState, useEffect } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Gallery = ({ projects = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const hasProjects = projects.length > 0;

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      // Le défilement ne fonctionne que si la souris n'est pas sur la carte
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
      }, 4000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [projects.length, isHovered]); // Le défilement s'arrête lorsqu'on survole

  if (!hasProjects) {
    return <p>Aucun projet trouvé...</p>;
  }
  return (
    <div
      className="gallery-container"
      onMouseEnter={() => setIsHovered(true)} // Arrête le défilement
      onMouseLeave={() => setIsHovered(false)} // Reprend le défilement
    >
      <div className="carousel-container">
        <img
          className={`carousel-img active`}
          src={projects[currentSlide].img}
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>
      <div className="title-links">
        <h3>{projects[currentSlide].title}</h3>
        <div className="project-links">
          <a
            href={projects[currentSlide].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLink}
              style={{ color: "#70d7f7" }}
              size="lg"
            />
          </a>
          <a
            href={projects[currentSlide].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#70d7f7" }}
              size="lg"
            />
          </a>
        </div>
      </div>
      <p>{projects[currentSlide].infos}</p>

      {/* Dots pour la navigation */}
      <div className="dots-container">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => changeSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
