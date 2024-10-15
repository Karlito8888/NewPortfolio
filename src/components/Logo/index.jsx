import { faC } from "@fortawesome/free-solid-svg-icons";
import { faB } from "@fortawesome/free-solid-svg-icons/faB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo = () => {
  return (
    <div className="logo-content">
      <FontAwesomeIcon icon={faC} />
      <FontAwesomeIcon icon={faB} />
    </div>
  );
};

export default Logo;
