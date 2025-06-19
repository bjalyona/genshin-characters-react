import { useContext } from "react";
import { GenshinContext } from "../../context/GenshinContext";
import "./CharacterDescr.css";

export default function CharacterDescr() {
  const { selectedCharacter } = useContext(GenshinContext);
  const charTitle = selectedCharacter.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <>
      <h1>{charTitle}</h1>
      <div className="character_descr">
        <img
          src={`https://genshin.jmp.blue/characters/${selectedCharacter.name}/card`}
        />
        <div className="character_info">
          <div>
            <h2>{selectedCharacter.title}</h2>
            <p>{selectedCharacter.description}</p>
            <ul>
              <li>{selectedCharacter.vision}</li>
              <li>{selectedCharacter.weapon}</li>
              <li>{selectedCharacter.nation}</li>
            </ul>
          </div>
        </div>
        {/* <button onClick={() => setSelectedCharacter(null)}>Назад</button> */}
      </div>
    </>
  );
}
