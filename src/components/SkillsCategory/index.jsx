import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const SkillsCategory = ({ title, skills }) => {
  const sliderRef = useRef(null);
  const scrollSpeed = 1; // Vitesse du défilement, ajuste cette valeur pour changer la vitesse
  const scrollDirection = title === "Backend" ? -1 : 1; // Sens du défilement

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId;

    // Fonction pour démarrer le défilement
    const startScrolling = () => {
      const scrollStep = () => {
        // Si on atteint la fin du slider, on ramène le défilement à la moitié pour l'effet infini
        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0; // Revenir au début pour l'effet de boucle infinie
        } else if (slider.scrollLeft <= 0 && scrollDirection === -1) {
          slider.scrollLeft = slider.scrollWidth / 2; // Retour au bout si on défile dans l'autre sens
        }

        // Effectue le défilement avec la vitesse et la direction spécifiée
        slider.scrollLeft += scrollSpeed * scrollDirection; // Défilement constant
        animationFrameId = requestAnimationFrame(scrollStep); // Demande le prochain cadre d'animation
      };

      scrollStep(); // Démarre l'animation
    };

    // Fonction pour arrêter le défilement
    const stopScrolling = () => {
      cancelAnimationFrame(animationFrameId); // Annule l'animation
    };

    // Ajout des événements au survol pour arrêter et relancer le défilement
    slider.addEventListener("mouseenter", stopScrolling);
    slider.addEventListener("mouseleave", startScrolling);

    // Démarre le défilement initial
    startScrolling();

    return () => {
      // Nettoyage des événements et de l'animation
      cancelAnimationFrame(animationFrameId);
      slider.removeEventListener("mouseenter", stopScrolling);
      slider.removeEventListener("mouseleave", startScrolling);
    };
  }, [scrollDirection]); // Dépend uniquement de `scrollDirection`

  return (
    <div className="skills-category">
      <h3>{title}</h3>
      <div className="skills-list" role="list" ref={sliderRef}>
        {/* Duplique les éléments pour permettre le défilement infini */}
        {[...skills, ...skills].map((skill, index) => {
          const className = `skill-item ${skill.label
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`;
          return (
            <div
              key={index}
              className={className}
              role="listitem"
              aria-label={skill.label}
            >
              <div className="skill-gradient" />
              <span className="skill-label">{skill.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

SkillsCategory.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillsCategory;
