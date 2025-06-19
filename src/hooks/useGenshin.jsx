import { useContext, useEffect } from "react";
import { GenshinContext } from "../context/GenshinContext";

export const useGenshin = () => {
  const { setCharacters, setFilteredCharacters, setWeapons, setFilteredWeapons} = useContext(GenshinContext);

  useEffect(() => {
    
    const fetchCharacters = async () => {
      let allCharacters = [];
      const response = await fetch("https://genshin.jmp.blue/characters");
      const characters = await response.json();
      const characterPromises = characters.map(async (name) => {
        try {
          const response = await fetch(
            `https://genshin.jmp.blue/characters/${name}`
          );
          const data = await response.json();
          data.name = name;
          return  { ...data, name };
        } catch (err) {
          console.error(err);
          return null;
        }
      });
      allCharacters = await Promise.all(characterPromises);
      console.log(allCharacters);
      setCharacters(allCharacters);
      setFilteredCharacters(allCharacters);  

    };
    fetchCharacters();
    
  }, [setCharacters, setFilteredCharacters]);

  useEffect(() => {
    
    const fetchWeapons = async () => {
      let allWeapons = [];
      const response = await fetch("https://genshin.jmp.blue/weapons");
      const weapons = await response.json();
      const weaponPromises = weapons.map(async (name) => {
        try {
          const response = await fetch(
            `https://genshin.jmp.blue/weapons/${name}`
          );
          const data = await response.json();
          data.name = name;
          return  { ...data, name };
        } catch (err) {
          console.error(err);
          return null;
        }
      });
      allWeapons = await Promise.all(weaponPromises);
      console.log(allWeapons);
      setWeapons(allWeapons);
      setFilteredWeapons(allWeapons);  

    };
    fetchWeapons();
    
  }, [setWeapons, setFilteredWeapons]);
};
