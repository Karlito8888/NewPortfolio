import React, { useState } from "react";
import Gallery from "../../components/Gallery";
import { projectsData } from "../../data/projectsData";
import sassLogo from "../../assets/logos/sass.svg";
import jsLogo from "../../assets/logos/js.svg";
import reactLogo from "../../assets/logos/react.svg";
import gamesLogo from "../../assets/logos/joystick.svg";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false); // Gérer l'état ici
  const themes = Object.keys(projectsData);
  const logos = {
    sass: sassLogo,
    javascript: jsLogo,
    react: reactLogo,
    games: gamesLogo,
  };

  return (
    <section className="projects-container" id="projets">
      <h2 className="projects-title">Mes projets</h2>
      <div className="projects-content">
        {themes.map((theme) => (
          <div
            key={theme}
            className="project-card"
            onMouseEnter={() => setIsHovered(true)} // Déclencher au survol
            onMouseLeave={() => setIsHovered(false)} // Arrêter après survol
          >
            <img
              src={logos[theme]}
              alt={`${theme} logo`}
              className="theme-logo"
            />
            <Gallery projects={projectsData[theme]} isHovered={isHovered} />{" "}
            {/* Passer l'état */}
          </div>
        ))}
      </div>
      <p className="p-bottom">* Tous ces projets sont 100% Responsives.</p>
    </section>
  );
};

export default Projects;
