import { useState } from "react";
import "./App.css";
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from "./consts.js";

function App() {
  const [num, setNum] = useState(0);
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  const [showAttrStat, setShowAttrStat] = useState(false);

  const handleShowStat = (e, name) => {
    e.preventdefault();
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
              Strength:
              {strength}
              <button onClick={() => setStrength(strength + 1)}>+</button>
              <button onClick={() => setStrength(strength - 1)}>-</button>
            </div>
            <div>
              Dexterity:
              {dexterity}
              <button onClick={() => setDexterity(dexterity + 1)}>+</button>
              <button onClick={() => setDexterity(dexterity - 1)}>-</button>
            </div>
            <div>
              Constitution:
              {constitution}
              <button onClick={() => setConstitution(constitution + 1)}>
                +
              </button>
              <button onClick={() => setConstitution(constitution - 1)}>
                -
              </button>
            </div>
            <div>
              Intelligence:
              {intelligence}
              <button onClick={() => setIntelligence(intelligence + 1)}>
                +
              </button>
              <button onClick={() => setIntelligence(intelligence - 1)}>
                -
              </button>
            </div>
            <div>
              Wisdom:
              {wisdom}
              <button onClick={() => setWisdom(wisdom + 1)}>+</button>
              <button onClick={() => setWisdom(wisdom - 1)}>-</button>
            </div>
            <div>
              Charisma:
              {charisma}
              <button onClick={() => setCharisma(charisma + 1)}>+</button>
              <button onClick={() => setCharisma(charisma - 1)}>-</button>
            </div>
          </div>
          <div id="item2">
            <h2>Classes</h2>
            {Object.keys(CLASS_LIST).map((e, i) => {
              return (
                <span key={i}>
                  {e}
                  <br />
                </span>
              );
            })}
          </div>
          {showAttrStat && <div id="item3"></div>}
          <div id="item4"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
