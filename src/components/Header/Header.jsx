import { useContext } from "react";
import { GenshinContext } from "../../context/GenshinContext";
import "./Header.css";

export default function Header() {
  const { setActivePage, setSelectedCharacter, setSelectedWeapon } = useContext(GenshinContext);
  const setPage = function (pageName) {
    setActivePage(pageName);
    setSelectedCharacter(null);
    setSelectedWeapon(null);
  };

  return (
    <div className="navbar">
      <div className="container">
        <h4 classList="navbar_title">Genshin Characters</h4>
        <ul className="site_sections">
          <li
            className="sections_item characters"
            onClick={() => setPage("characters")}
          >
            All characters
          </li>
          <li
            className="sections_item weapons"
            onClick={() => {
              setPage("weapons");

            }}
          >
            Weapons
          </li>
        </ul>
      </div>
    </div>
  );
}
