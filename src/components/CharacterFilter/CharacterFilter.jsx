import { useContext, useEffect, useState } from "react";
import { GenshinContext } from "../../context/GenshinContext";
import "./CharacterFilter.css";

const visionTypes = [
  "Pyro",
  "Hydro",
  "Anemo",
  "Electro",
  "Geo",
  "Cryo",
  "Dendro",
];

const weaponTypes = ["Sword", "Claymore", "Bow", "Polearm", "Catalyst"];

export default function CharacterFilter() {
  const { characters, setFilteredCharacters, weapons, setFilteredWeapons, activePage} =
    useContext(GenshinContext);
  const [selected, setSelected] = useState(["all"]);

  useEffect(() => {
    let filtered;
    if (selected.includes("all") || selected.length === 0) {
      activePage == "characters" ? (filtered = characters) : (filtered = weapons);
    } else {
      activePage == "characters"
        ? (filtered = characters.filter((char) =>
            selected.includes(char.vision)
          ))
        : (filtered = weapons.filter((weap) => selected.includes(weap.type)));
    }
    activePage == "characters" ? setFilteredCharacters(filtered) : setFilteredWeapons(filtered);
  }, [selected, characters, setFilteredCharacters, weapons, setFilteredWeapons]);

  const handleCheckboxChange = (value) => {
    if (value === "all") {
      setSelected(["all"]);
    } else {
      setSelected((prev) => {
        const withoutAll = prev.filter((val) => val !== "all");
        return prev.includes(value)
          ? withoutAll.filter((val) => val !== value)
          : [...withoutAll, value];
      });
    }
  };

  return (
    <div className="filter_container">
      <h2>Filter:</h2>
      <div className="vision_filter">
        <div>
          <label>
            <input
              type="checkbox"
              value="all"
              checked={selected.includes("all")}
              onChange={() => handleCheckboxChange("all")}
            />
            All
          </label>
        </div>
        {activePage == "characters" ? (visionTypes.map((vision) => (
          <div key={vision}>
            <label>
              <input
                type="checkbox"
                value={vision}
                checked={selected.includes(vision)}
                onChange={() => handleCheckboxChange(vision)}
              />
              {vision}
            </label>
          </div>
        ))):
        ((weaponTypes.map((weap) => (
          <div key={weap}>
            <label>
              <input
                type="checkbox"
                value={weap}
                checked={selected.includes(weap)}
                onChange={() => handleCheckboxChange(weap)}
              />
              {weap}
            </label>
          </div>
        ))))
        }
      </div>
    </div>
  );
}
