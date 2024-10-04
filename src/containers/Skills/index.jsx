import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faFigma,
  faHtml5,
  faNode,
  faPython,
  faReact,
  faSass,
  faSlack,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [listSkills] = useState([
    { icon: faHtml5, label: "HTML5" },
    { icon: faCss3Alt, label: "CSS3" },
    { icon: faSass, label: "SASS" },
    { icon: faSquareJs, label: "JavaScript" },
    { icon: faReact, label: "React" },
    { icon: faPython, label: "Python" },
    { icon: faNode, label: "Node.js" },
    { icon: faFigma, label: "Figma" },
    { icon: faSlack, label: "Slack" },
  ]);

  return (
    <section
      className="skills-container"
      id="compétences"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading">Mes Compétences</h2>
      <div className="skills-list" role="list">
        {listSkills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            role="listitem"
            aria-label={skill.label}
          >
            <FontAwesomeIcon icon={skill.icon} size="3x" aria-hidden="true" />
            <span className="skill-label">{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
