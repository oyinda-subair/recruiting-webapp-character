import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";

function App() {
  const defaultValues = {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  };
  const [num, setNum] = useState(0);

  const [requirement, setRequirement] = useState(false);
  const [classStat, setClassStat] = useState({});

  const [attributes, setAttributes] = useState(defaultValues);
  const [modifiers, setModifiers] = useState({});

  const handleAttributes = (attrName, direction) => {
    switch (attrName) {
      case "strength":
        const value =
          direction == "up"
            ? attributes["strength"] + 1
            : attributes["strength"] - 1;
        setAttributes({ ...attributes, strength: value });
        setModifiers({ ...modifiers, strenght: getPoints(value) });
        break;
      case "dexterity":
        const dexterity =
          direction == "up"
            ? attributes["dexterity"] + 1
            : attributes["dexterity"] - 1;
        setAttributes({
          ...attributes,
          dexterity: dexterity,
        });
        setModifiers({ ...modifiers, dexterity: getPoints(dexterity) });
        break;
      case "constitution":
        const newConstitution =
          direction == "up"
            ? attributes["constitution"] + 1
            : attributes["constitution"] - 1;
        setAttributes({
          ...attributes,
          constitution: newConstitution,
        });
        setModifiers({
          ...modifiers,
          constitution: getPoints(newConstitution),
        });
        break;
      case "intelligence":
        const newIntelligence =
          direction == "up"
            ? attributes["intelligence"] + 1
            : attributes["intelligence"] - 1;
        setAttributes({
          ...attributes,
          intelligence: newIntelligence,
        });
        setModifiers({
          ...modifiers,
          intelligence: getPoints(newIntelligence),
        });
        break;
      case "wisdom":
        const newWisdom =
          direction == "up"
            ? attributes["wisdom"] + 1
            : attributes["wisdom"] - 1;
        setAttributes({ ...attributes, wisdom: newWisdom });
        setModifiers({ ...modifiers, wisdom: getPoints(newWisdom) });
        break;
      case "charisma":
        const newCharisma =
          direction == "up"
            ? attributes["charisma"] + 1
            : attributes["charisma"] - 1;
        setAttributes({ ...attributes, charisma: newCharisma });
        setModifiers({ ...modifiers, charisma: getPoints(newCharisma) });
        break;

      default:
        break;
    }
  };

  const showRequiredStat = (name) => {
    setRequirement(true);
    setClassStat(CLASS_LIST[name]);
    return CLASS_LIST[name];
  };

  const getPoints = (value) => {
    let point;
    if (value >= 10) {
      const over = value - 10;
      point = Math.round(over / 2);
      return point;
    }

    if (value < 10) {
      const over = 10 - value;
      const point = Math.round(over / 2);
      return -point;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Coding Exercise</h1>
      </header>
      <section className="App-section">
        <div>
          Value:
          {num}
          <button onClick={() => setNum(num + 1)}>+</button>
          <button>-</button>
        </div>
        <div id="grid">
          <div id="item1">
            <h2>Attributes</h2>
            <div>
              Strength: {attributes.strength} (Modifier: {modifiers.strenght})
              <button onClick={() => handleAttributes("strength", "up")}>
                +
              </button>
              <button onClick={() => handleAttributes("strength", "down")}>
                -
              </button>
            </div>
            <div>
              Dexterity: {attributes.dexterity} (Modifier: {modifiers.dexterity}
              )
              <button onClick={() => handleAttributes("dexterity", "up")}>
                +
              </button>
              <button onClick={() => handleAttributes("dexterity", "down")}>
                -
              </button>
            </div>
            <div>
              Constitution: {attributes.constitution} (Modifier:{" "}
              {modifiers.constitution})
              <button onClick={() => handleAttributes("constitution", "up")}>
                +
              </button>
              <button onClick={() => handleAttributes("constitution", "down")}>
                -
              </button>
            </div>
            <div>
              Intelligence: {attributes.intelligence} (Modifier:{" "}
              {modifiers.intelligence})
              <button onClick={() => handleAttributes("intelligence", "up")}>
                +
              </button>
              <button onClick={() => handleAttributes("intelligence", "down")}>
                -
              </button>
            </div>
            <div>
              Wisdom: {attributes.wisdom} (Modifier: {modifiers.wisdom})
              <button onClick={() => handleAttributes("wisdom", "up")}>
                +
              </button>
              <button onClick={() => handleAttributes("wisdom", "down")}>
                -
              </button>
            </div>
            <div>
              Charisma: {attributes.charisma} (Modifier: {modifiers.charisma})
              <button onClick={() => handleAttributes("charisma", "up")}>
                +
              </button>
              <button onClick={() => handleAttributes("charisma", "down")}>
                -
              </button>
            </div>
          </div>
          <div id="item2">
            <h2>Classes</h2>
            {Object.keys(CLASS_LIST).map((cl, i) => {
              return (
                <span key={i} onClick={() => showRequiredStat(cl)}>
                  {cl}
                  <br />
                </span>
              );
            })}
          </div>
          {requirement && (
            <div id="item3">
              <h2>Minimum required statistics</h2>
              {Object.keys(classStat).map((cl, i) => {
                return (
                  <span key={i}>
                    {cl}: {classStat[cl]}
                    <br />
                  </span>
                );
              })}
              <div className="requirement_view">
                <button onClick={() => setRequirement(false)}>
                  Close Requirement View
                </button>
              </div>
            </div>
          )}
          <div id="item4">
            <h2>Skills</h2>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
