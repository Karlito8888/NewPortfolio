import { useState } from "react";
import {
  Css,
  Django,
  Express,
  Figma,
  Flask,
  Github,
  Html,
  Javascript,
  Linux,
  MaterialUi,
  MongoDB,
  Next,
  NodeJs,
  Postman,
  Pycharm,
  Python,
  React,
  Redux,
  Responsive,
  Sass,
  Slack,
  SqLite,
  Tailwind,
  VsCode,
  Vite,
} from "./skills-svg";
import SkillsCategory from "../../components/SkillsCategory";


const Skills = () => {
  // Organiser les compétences par catégories
  const [frontendSkills] = useState([
    { icon: <Html />, label: "HTML5" },
    { icon: <Css />, label: "CSS3" },
    { icon: <Sass />, label: "SASS" },
    { icon: <Javascript />, label: "JavaScript" },
    { icon: <React />, label: "React" },
    { icon: <Redux />, label: "Redux" },
    { icon: <Next />, label: "Next.js" },
    { icon: <Vite />, label: "Vite" },
    { icon: <Tailwind />, label: "Tailwind" },
    { icon: <MaterialUi />, label: "Material-UI" },
    { icon: <Responsive />, label: "UX/UI" },
  ]);

  const [backendSkills] = useState([
    { icon: <NodeJs />, label: "Node.js" },
    { icon: <Express />, label: "Express.js" },
    { icon: <MongoDB />, label: "MongoDB" },
    { icon: <Python />, label: "Python" },
    { icon: <Django />, label: "Django" },
    { icon: <Flask />, label: "Flask" },
    { icon: <SqLite />, label: "SQLite" },
  ]);

  const [otherSkills] = useState([
    { icon: <VsCode />, label: "VS Code" },
    { icon: <Pycharm />, label: "PyCharm" },
    { icon: <Github />, label: "GitHub" },
    { icon: <Postman />, label: "Postman" },
    { icon: <Figma />, label: "Figma" },
    { icon: <Slack />, label: "Slack" },
    { icon: <Linux />, label: "Linux" },
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


