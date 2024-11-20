import { memo, useCallback, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const NavItem = ({ 
  item, 
  onClick = () => {}, 
  isMobile = false, 
  isActive = false 
}) => {
  const href = useMemo(() => {
    const name = item.name.toLowerCase();
    return `#${name === "a propos" ? "a-propos" : name}`;
  }, [item.name]);

  const handleClick = useCallback((e) => {
    e.preventDefault();
    onClick?.(item);
  }, [onClick, item]);

  return (
    <li className="navbar-item">
      <a
        href={href}
        onClick={handleClick}
        className={isActive ? "active" : ""}
        aria-label={item.name}
        aria-current={isActive ? "page" : undefined}
      >
        {isMobile ? (
          <FontAwesomeIcon
            icon={item.icon}
            size="lg"
            className="icon"
            aria-hidden="true"
            title={item.name}
          />
        ) : (
          <span className="text">{item.name}</span>
        )}
      </a>
    </li>
  );
};

NavItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  isMobile: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default memo(NavItem);
