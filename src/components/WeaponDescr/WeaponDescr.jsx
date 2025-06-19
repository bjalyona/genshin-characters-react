import { GenshinContext } from "../../context/GenshinContext";
import { useContext } from "react";

export default function WeaponDescr(){
    const { selectedWeapon } = useContext(GenshinContext);
      const weapTitle = selectedWeapon.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    return (
        <>
      <h1>{weapTitle}</h1>
      <div class="character_descr">
        <img
          src={`https://genshin.jmp.blue/weapons/${selectedWeapon.name}/icon`}
        />
        <div className="character_info">
          <div>
            <h2>{selectedWeapon.name}</h2>
            <p>{selectedWeapon.description}</p>

          </div>
        </div>

      </div>
    </>

    )
}