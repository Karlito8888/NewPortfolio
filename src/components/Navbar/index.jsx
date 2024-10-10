import { useMemo, useState, useEffect } from "react";
import NavItem from "../NavItem";
import { CvLink, GithubLink, LinkedInLink } from "../NavLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptopCode,
  faGraduationCap,
  faEnvelope,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("À propos");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(window.innerWidth < 600);
  const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth < 760);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= 760 && window.innerWidth < 1000
  );

  const listnav = useMemo(
    () => [
      { name: "À propos", icon: faUser },
      { name: "Projets", icon: faLaptopCode },
      { name: "Parcours", icon: faGraduationCap },
      { name: "Contact", icon: faEnvelope },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 760 && window.innerWidth < 1000);
      setShowMenuIcon(window.innerWidth < 760);
      setShowNavLinks(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (item) => {
    setActiveTab(item.name || item);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <nav>
          <ul>
            {listnav.map((item) => (
              <NavItem
                key={item.name || item}
                item={item}
                isActive={activeTab === item.name}
                onClick={() => handleTabClick(item)}
                isMobile={isMobile}
              />
            ))}
            {!showNavLinks && (
              <>
                <CvLink onClick={() => handleTabClick("CV")} />
                <GithubLink />
                <LinkedInLink />
              </>
            )}
            {showMenuIcon && (
              <div className="menu-icon">
                <FontAwesomeIcon
                  icon={isMenuOpen ? faTimes : faBars}
                  size="2xl"
                  onClick={toggleMenu}
                  className="menu-icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            )}
          </ul>
        </nav>
      </div>

      {/* L'état actif de la dropdown-nav */}
      <div className={`dropdown-nav ${isMenuOpen ? "active" : ""}`}>
        <nav>
          <div className="listnav-container">
            <ul>
              {listnav.map((item) => (
                <NavItem
                  key={item.name || item}
                  item={item}
                  isActive={activeTab === item.name}
                  onClick={() => handleTabClick(item)}
                  isMobile={isMobile}
                />
              ))}
            </ul>
          </div>

          <div className="navlinks-container">
            <ul>
              {showNavLinks && (
                <>
                  <CvLink onClick={() => handleTabClick("CV")} />
                  <GithubLink />
                  <LinkedInLink />
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;


