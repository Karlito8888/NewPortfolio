import { useState } from "react";
import Chrome from "./skills-svg/chrome.svg";
import Css from "./skills-svg/css.svg";
import Django from "./skills-svg/django.svg";
import Express from "./skills-svg/express.svg";
import Figma from "./skills-svg/figma.svg";
import Flask from "./skills-svg/flask.svg";
import Github from "./skills-svg/github.svg";
import Html from "./skills-svg/html.svg";
import Javascript from "./skills-svg/js.svg";
import MaterialUi from "./skills-svg/material-ui.svg";
import MongoDB from "./skills-svg/mongodb.svg";
import Firefox from "./skills-svg/mozilla-firefox.svg";
import Next from "./skills-svg/next.svg";
import NodeJs from "./skills-svg/nodejs.svg";
import Postman from "./skills-svg/postman.svg";
import Pycharm from "./skills-svg/pycharm.svg";
import Python from "./skills-svg/python.svg";
import React from "./skills-svg/react.svg";
import Redux from "./skills-svg/redux.svg";
import Responsive from "./skills-svg/responsive.svg";
import Sass from "./skills-svg/sass.svg";
import Slack from "./skills-svg/slack.svg";
import SqLite from "./skills-svg/sqlite.svg";
import Tailwind from "./skills-svg/tailwind.svg";
import VsCode from "./skills-svg/visual-studio-code.svg";
import Vite from "./skills-svg/vite.svg";
import SkillsCategory from "../../components/SkillsCategory";

const Skills = () => {
  // Organiser les compétences par catégories
  const [frontendSkills] = useState([
    { icon: Html, label: "HTML5" },
    { icon: Css, label: "CSS3" },
    { icon: Sass, label: "SASS" },
    { icon: Javascript, label: "JavaScript" },
    { icon: React, label: "React" },
    { icon: Redux, label: "Redux" },
    { icon: Next, label: "Next.js" },
    { icon: Vite, label: "Vite" },
    { icon: Tailwind, label: "Tailwind" },
    { icon: MaterialUi, label: "Material-UI" },
    { icon: Responsive, label: "UX/UI" },
  ]);

  const [backendSkills] = useState([
    { icon: NodeJs, label: "Node.js" },
    { icon: Express, label: "Express.js" },
    { icon: MongoDB, label: "MongoDB" },
    { icon: Python, label: "Python" },
    { icon: Django, label: "Django" },
    { icon: Flask, label: "Flask" },
    { icon: SqLite, label: "SQLite" },
  ]);

  const [otherSkills] = useState([
    { icon: VsCode, label: "VS Code" },
    { icon: Pycharm, label: "PyCharm" },
    { icon: Github, label: "GitHub" },
    { icon: Postman, label: "Postman" },
    { icon: Chrome, label: "Chrome" },
    { icon: Firefox, label: "Firefox" },
    { icon: Figma, label: "Figma" },
    { icon: Slack, label: "Slack" },
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


