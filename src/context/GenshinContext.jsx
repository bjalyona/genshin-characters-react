import { createContext } from "react";
import { useState } from "react";

export const GenshinContext = createContext();

export const GenshinProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [weapons, setWeapons] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [activePage, setActivePage] = useState("characters");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [filteredWeapons, setFilteredWeapons] = useState([]);

  return (
    <GenshinContext.Provider
      value={{
        characters,
        setCharacters,
        weapons,
        setWeapons,
        selectedCharacter,
        setSelectedCharacter,
        activePage,
        setActivePage,
        filteredCharacters,
        setFilteredCharacters,
        selectedWeapon,
        setSelectedWeapon,
        filteredWeapons,
        setFilteredWeapons
      }}
    >
      {children}
    </GenshinContext.Provider>
  );
};
