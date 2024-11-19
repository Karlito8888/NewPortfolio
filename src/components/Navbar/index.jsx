import { useMemo, useState, useEffect, useCallback } from "react";
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

const MOBILE_BREAKPOINT = 760;
const NAVLINKS_BREAKPOINT = 600;

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("A propos");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(window.innerWidth < NAVLINKS_BREAKPOINT);
  const [showMenuIcon, setShowMenuIcon] = useState(window.innerWidth < MOBILE_BREAKPOINT);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth >= MOBILE_BREAKPOINT && window.innerWidth < 1000
  );

  const listnav = useMemo(
    () => [
      { name: "A propos", icon: faUser },
      { name: "Projets", icon: faLaptopCode },
      { name: "Parcours", icon: faGraduationCap },
      { name: "Contact", icon: faEnvelope },
    ],
    []
  );

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setIsMobile(width >= MOBILE_BREAKPOINT && width < 1000);
    setShowMenuIcon(width < MOBILE_BREAKPOINT);
    setShowNavLinks(width < NAVLINKS_BREAKPOINT);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleTabClick = useCallback((item) => {
    setActiveTab(item.name || item);
    setIsMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <>
      <div className="navbar">
        <nav 
          role="navigation" 
          aria-label="Navigation principale"
        >
          <ul role="menu" aria-label="Navigation principale">
            {listnav.map((item) => (
              <NavItem
                key={item.name}
                item={item}
                onClick={() => handleTabClick(item)}
                isMobile={isMobile}
                isActive={activeTab === item.name}
                aria-current={activeTab === item.name ? "page" : undefined}
              />
            ))}
            {!showNavLinks && (
              <>
                <CvLink 
                  onClick={() => handleTabClick("CV")} 
                  aria-current={activeTab === "CV" ? "page" : undefined}
                />
                <GithubLink />
                <LinkedInLink />
              </>
            )}
            {showMenuIcon && (
              <div className="menu-icon">
                <button
                  onClick={toggleMenu}
                  className="menu-button"
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-menu"
                  aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                  <FontAwesomeIcon
                    icon={isMenuOpen ? faTimes : faBars}
                    size="xl"
                    className="menu-icon"
                    aria-hidden="true"
                  />
                </button>
              </div>
            )}
          </ul>
        </nav>
      </div>

      <div 
        id="mobile-menu"
        className={`dropdown-nav ${isMenuOpen ? "active" : ""}`}
        hidden={!isMenuOpen}
      >
        <nav 
          aria-label="Menu mobile"
          role="navigation"
        >
          <div className="listnav-container">
            <ul role="menu" aria-label="Menu de navigation mobile">
              {listnav.map((item) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={activeTab === item.name}
                  onClick={() => handleTabClick(item)}
                  isMobile={isMobile}
                  aria-current={activeTab === item.name ? "page" : undefined}
                />
              ))}
            </ul>
          </div>

          <div className="navlinks-container">
            <ul role="menu" aria-label="Liens sociaux">
              {showNavLinks && (
                <>
                  <CvLink 
                    onClick={() => handleTabClick("CV")} 
                    aria-current={activeTab === "CV" ? "page" : undefined}
                  />
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
