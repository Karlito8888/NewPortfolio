import { useMemo, useState } from "react";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("À propos");

  const listnav = useMemo(
    () => ["À propos", "Compétences", "Projets", "Contact"],
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
                href={`#${
                  item === "À propos" ? "a-propos" : item.toLowerCase()
                }`}
                aria-label={item}
                className={activeTab === item ? "active" : ""}
                onClick={() => handleTabClick(item)}
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
