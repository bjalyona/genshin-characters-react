import "./App.css";
import Header from "./components/Header/Header";
import CharacterList from "./components/CharacterList/CharacterList";
import { useContext } from "react";
import CharacterDescr from "./components/CharacterDescr/CharacterDescr";
import { GenshinContext, GenshinProvider } from "./context/GenshinContext";
import { useGenshin } from "./hooks/useGenshin";
import WeaponDescr from "./components/WeaponDescr/WeaponDescr";

function App() {
  const { selectedCharacter, activePage, selectedWeapon } = useContext(GenshinContext);

  useGenshin();

  return (
    <>
      <Header></Header>
      {activePage == "characters" ? (
        selectedCharacter ? (
          <CharacterDescr></CharacterDescr>
        ) : (
          <div className="characters_container">
            <h1>All Characters</h1>
            <CharacterList type={'character'}></CharacterList>
          </div>
        )
    
      ) : selectedWeapon ? (
        <WeaponDescr></WeaponDescr>
      ) : (
        <div className="weapons_container">
            <h1>All Weapons</h1>
            <CharacterList type={'weapon'}></CharacterList>
          </div>
      )}
    </>
  );
}

export default App;
