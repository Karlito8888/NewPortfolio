import PropTypes from "prop-types";

const SkillsCategory = ({ title, skills }) => {
  return (
    <div className="skills-category">
      <h3>{title}</h3>
      <div className="skills-list" role="list">
        {skills.map((skill, index) => {
          const className = `skill-item ${skill.label
            .toLowerCase()
            .replace(/\s+/g, "-")}`;
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
      icon: PropTypes.node.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SkillsCategory;

