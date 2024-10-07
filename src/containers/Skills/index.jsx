import { useState } from "react";
import SkillsCategory from "../../components/SkillsCategory";

const Skills = () => {
  // Organiser les compétences par catégories
  const [frontendSkills] = useState([
    { label: "HTML5" },
    { label: "CSS3" },
    { label: "SASS" },
    { label: "JavaScript" },
    { label: "React" },
    { label: "Redux" },
    { label: "Next.js" },
    { label: "Vite" },
    { label: "Tailwind" },
    { label: "Material-UI" },
    { label: "UX/UI" },
  ]);

  const [backendSkills] = useState([
    { label: "Node.js" },
    { label: "Express.js" },
    { label: "MongoDB" },
    { label: "Python" },
    { label: "Django" },
    { label: "Flask" },
    { label: "SQLite" },
  ]);

  const [otherSkills] = useState([
    { label: "VS Code" },
    { label: "PyCharm" },
    { label: "GitHub" },
    { label: "Postman" },
    { label: "Figma" },
    { label: "Slack" },
    { label: "Linux" },
  ]);

  return (
    <section
      className="skills-container"
      id="compétences"
      aria-labelledby="skills-heading"
    >
      <h2 id="skills-heading">Mes Compétences</h2>

      <SkillsCategory title="Frontend" skills={frontendSkills} />
      <SkillsCategory title="Backend" skills={backendSkills} />
      <SkillsCategory title="Others" skills={otherSkills} />
    </section>
  );
};

export default Skills;

