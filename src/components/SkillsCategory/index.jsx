import PropTypes from "prop-types"; // Importation de PropTypes

const SkillsCategory = ({ title, skills }) => {
  return (
    <div className="skills-category">
      <h3>{title}</h3>
      <div className="skills-list" role="list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            role="listitem"
            aria-label={skill.label}
          >
            <img src={skill.icon} alt={skill.label} />
            <span className="skill-label">{skill.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Validation des props
SkillsCategory.propTypes = {
  title: PropTypes.string.isRequired, // 'title' doit être une string et est requis
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired, // 'icon' doit être une string et est requis
      label: PropTypes.string.isRequired, // 'label' doit être une string et est requis
    })
  ).isRequired, // 'skills' doit être un tableau d'objets et est requis
};

export default SkillsCategory;
