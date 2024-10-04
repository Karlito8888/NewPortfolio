import { useMemo, useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Accueil");

  const listnav = useMemo(
    () => ["Accueil", "Compétences", "Projets", "Contact"],
    []
  );

  const handleTabClick = (item) => {
    setActiveTab(item);
  };

  return (
    <div className="navbar">
      <nav>
        <ul>
          {listnav.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                aria-label={item}
                className={activeTab === item ? "active" : ""} // Ajoute une classe si l'onglet est actif
                onClick={() => handleTabClick(item)} // Gère le clic sur l'onglet
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
