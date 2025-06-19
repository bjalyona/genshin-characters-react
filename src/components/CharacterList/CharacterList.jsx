import { useContext } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import { GenshinContext } from "../../context/GenshinContext";
import CharacterFilter from "../CharacterFilter/CharacterFilter";
import './CharacterList.css'

export default function CharacterList() {
  const {filteredCharacters, filteredWeapons, activePage} = useContext(GenshinContext);
  return (
    <div className="character_content_container">
      <CharacterFilter />
      <div className="character_cards_container">
        {activePage == 'characters' ? (
          filteredCharacters.map((char) => (
          <CharacterCard  key={char.name} character={char}></CharacterCard>
        ))
        ): (
          filteredWeapons.map((char) => (
          <CharacterCard key={char.name} character={char}></CharacterCard>
        ))
        )}
        {}
      </div>
    </div>
  );
}
