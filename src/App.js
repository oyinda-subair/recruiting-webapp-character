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
  const [modifiers, setModifiers] = useState(defaultValues);

  const handleAttributes = (attrName) => {
    switch (attrName) {
      case "strength":
        setAttributes({ ...attributes, strength: attributes["strength"] + 1 });
        if (attributes["strength"] > 10) {
          const over = attributes["strength"] - 10;
          const point = over / 2;
          setModifiers({ ...modifiers, strenght: point });
        }
        break;
      case "dexterity":
        setAttributes({
          ...attributes,
          dexterity: attributes["dexterity"] + 1,
        });
        break;
      case "constitution":
        setAttributes({
          ...attributes,
          constitution: attributes["constitution"] + 1,
        });
        break;
      case "intelligence":
        setAttributes({
          ...attributes,
          intelligence: attributes["intelligence"] + 1,
        });
        break;
      case "wisdom":
        setAttributes({ ...attributes, wisdom: attributes["wisdom"] + 1 });
        break;
      case "charisma":
        setAttributes({ ...attributes, charisma: attributes["charisma"] + 1 });
        break;

      default:
        break;
    }
  };

  const handleAttributesMinus = (attrName) => {
    switch (attrName) {
      case "strength":
        setAttributes({ ...attributes, strength: attributes["strength"] - 1 });
        break;
      case "dexterity":
        setAttributes({
          ...attributes,
          dexterity: attributes["dexterity"] - 1,
        });
        break;
      case "constitution":
        setAttributes({
          ...attributes,
          constitution: attributes["constitution"] - 1,
        });
        break;
      case "intelligence":
        setAttributes({
          ...attributes,
          intelligence: attributes["intelligence"] - 1,
        });
        break;
      case "wisdom":
        setAttributes({ ...attributes, wisdom: attributes["wisdom"] - 1 });
        break;
      case "charisma":
        setAttributes({ ...attributes, charisma: attributes["charisma"] - 1 });
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
              Strength: {attributes.strength}(Modifier: {modifiers["strength"]})
              <button onClick={() => handleAttributes("strength")}>+</button>
              <button onClick={() => handleAttributesMinus("strength")}>
                -
              </button>
            </div>
            <div>
              Dexterity: {attributes.dexterity}
              <button onClick={() => handleAttributes("dexterity")}>+</button>
              <button onClick={() => handleAttributesMinus("dexterity")}>
                -
              </button>
            </div>
            <div>
              Constitution: {attributes.constitution}
              <button onClick={() => handleAttributes("constitution")}>
                +
              </button>
              <button onClick={() => handleAttributesMinus("constitution")}>
                -
              </button>
            </div>
            <div>
              Intelligence: {attributes.intelligence}
              <button onClick={() => handleAttributes("intelligence")}>
                +
              </button>
              <button onClick={() => handleAttributesMinus("intelligence")}>
                -
              </button>
            </div>
            <div>
              Wisdom: {attributes.wisdom}
              <button onClick={() => handleAttributes("wisdom")}>+</button>
              <button onClick={() => handleAttributesMinus("wisdom")}>-</button>
            </div>
            <div>
              Charisma: {attributes.charisma}
              <button onClick={() => handleAttributes("charisma")}>+</button>
              <button onClick={() => handleAttributesMinus("charisma")}>
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
          <div id="item4"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
