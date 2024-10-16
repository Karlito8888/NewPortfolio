import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({ item, isActive, onClick, isMobile }) => {
  return (
    <li className="navbar-item">
      <a
        href={`#${
          item.name === "À propos" ? "a-propos" : item.name.toLowerCase()
        }`}
        aria-label={item.name}
        className={isActive ? "active" : ""}
        onClick={onClick}
      >
        {isMobile ? (
          <FontAwesomeIcon
            icon={item.icon}
            size="lg"
            className="icon"
            aria-hidden="true"
          />
        ) : (
          <span className="text">{item.name}</span>
        )}
      </a>
    </li>
  );
};

export default NavItem;

