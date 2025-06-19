import { GenshinContext } from "../../context/GenshinContext";
import { useContext } from "react";
import './CharacterCard.css'

export default function CharacterCard({ character}) {
  const { setSelectedCharacter, setSelectedWeapon, activePage } = useContext(GenshinContext);

  const charTitle = character.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return (
    <div
      className="card_container"
      onClick={() => 
        activePage=='characters' ?
        (setSelectedCharacter(character)) :
        setSelectedWeapon(character)
        }
    >
      <div className="character_card">
        <h2>{charTitle}</h2>
      <img src={`https://genshin.jmp.blue/${activePage}/${character.name}/icon`} />
      </div>
    </div>
  );
}
