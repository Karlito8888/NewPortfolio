import React, { useState } from "react";
import Gallery from "../../components/Gallery";
import { projectsData } from "../../data/projectsData";
import sassLogo from "../../assets/logos/sass.svg";
import jsLogo from "../../assets/logos/js.svg";
import reactLogo from "../../assets/logos/react.svg";
import gamesLogo from "../../assets/logos/joystick.svg";
import VideoComponent from "../../components/Video";
import ex from "./logos/express.svg";
import react from "./logos/react.svg";
import mdb from "./logos/mongodb.svg";
import njs from "./logos/nodejs.svg";

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const themes = Object.keys(projectsData);
  const logos = {
    sass: sassLogo,
    javascript: jsLogo,
    react: reactLogo,
    games: gamesLogo,
  };

  return (
    <section 
      className="projects-container" 
      id="projets"
      aria-labelledby="projects-heading"
    >
      <h2 
        id="projects-heading" 
        className="projects-title"
      >
        Mes projets
      </h2>
      <div 
        className="last-project"
        role="article"
        aria-labelledby="current-project-title"
      >
        <p 
          id="current-project-title"
          className="last-project-title"
        >
          Mon projet en cours...
        </p>
        <VideoComponent />
        <div 
          className="last-project-logos"
          role="group"
          aria-label="Technologies utilisées"
        >
          <img src={mdb} className="logo-mongoDB" alt="MongoDB - Base de données NoSQL" />
          <img src={ex} className="logo-express" alt="Express.js - Framework backend Node.js" />
          <img src={react} className="logo-react" alt="React - Bibliothèque frontend JavaScript" />
          <img src={njs} className="logo-NodeJS" alt="Node.js - Environnement d'exécution JavaScript" />
        </div>
        <div 
          className="last-project-description"
          role="article"
          aria-label="Description détaillée du projet en cours"
        >
          <p>
            À la suite de ma formation en tant qu'intégrateur Web, je me lance
            dans un projet fullstack utilisant la stack <strong>MERN</strong>...
            MongoDB, Express, React, Node.js... Ce projet me permet
            d'approfondir mes connaissances techniques et d'explorer le
            fonctionnement du back-end.
          </p>
          <br />
          <p>
            Dans le cadre de ce projet, j'ai choisi de créer un site e-commerce,
            un secteur en pleine expansion. En développant ma propre plateforme,
            j'ai l'opportunité d'apprendre les différentes facettes du commerce
            en ligne et de comprendre les coulisses de cette activité dynamique.
          </p>
          <br />
          <p>
            Ce projet m'offre également la possibilité de me familiariser avec{" "}
            <strong>Redux</strong>, en particulier avec{" "}
            <strong>RTK Query</strong>, ce qui m'aide à gérer efficacement
            l'état de mon application. J'utilise l'API FakeStoreAPI.com pour
            simuler des données et enrichir l'expérience utilisateur.
          </p>
          <br />
          <p id="features-heading">Parmi les fonctionnalités que je mets en place :</p>
          <ul 
            role="list"
            aria-labelledby="features-heading"
          >
            <li role="listitem">
              Un système d'authentification robuste utilisant des tokens{" "}
              <strong>JWT</strong>, garantissant la sécurité des utilisateurs.
            </li>
            <li role="listitem">
              La gestion des utilisateurs, des paniers et des commandes, pour
              offrir une expérience d'achat fluide.
            </li>
            <li role="listitem">
              Des options de paiement intégrées via <strong>Stripe</strong>,
              assurant des transactions sécurisées.
            </li>
            <li role="listitem">
              Un tableau de bord administrateur permettant de créer et de
              mettre à jour facilement des produits.
            </li>
          </ul>
          <br />
          <p>
            Ce projet représente non seulement un défi technique, mais aussi une
            opportunité d'apprentissage précieuse. Je suis enthousiaste à l'idée
            de continuer à développer mes compétences et de voir mon projet
            évoluer.
          </p>
        </div>
        <p 
          className="others-projects-title"
          id="other-projects-heading"
        >
          ... et mes autres projets ! *
        </p>
      </div>
      <div 
        className="projects-content"
        role="list"
        aria-labelledby="other-projects-heading"
      >
        {themes.map((theme) => (
          <div
            key={theme}
            className="project-card"
            role="listitem"
            aria-label={`Projets ${theme}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={logos[theme]}
              alt={`Technologies utilisées : ${theme}`}
              className="theme-logo"
            />
            <Gallery projects={projectsData[theme]} isHovered={isHovered} />
          </div>
        ))}
      </div>
      <p 
        className="p-bottom"
        role="note"
        aria-label="Note sur la compatibilité"
      >
        * Tous ces projets sont 100% Responsives.
      </p>
    </section>
  );
};

export default Projects;
