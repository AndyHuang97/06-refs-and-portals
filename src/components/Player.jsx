import { useState, useRef } from "react";
// useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
// It is useful for accessing DOM elements directly, without causing a re-render when the value changes.

export default function Player() {
  const playerName = useRef(); // playerName.current returns the input element
  const [enteredPlayerName, setEnteredPlayerName] = useState();

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    // This is imperative programming, which is not the React way of doing things (declarative)
    // It's better to avoid using refs for DOM manipulation in React, but in this case, it's acceptable.
    playerName.current.value = ""; // clear the input field.
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
