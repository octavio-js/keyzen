import React from "react";
import './textarea.css';
import Statistics from "../Statistics/Statistics.jsx";
import Reset from "../Reset/Reset.jsx";

export default function TextArea(props) {
  return (
    <main>
      <div id="letters-container">
        {props.letters.map((letter, index) => (
          <p key={index} className="letter">{letter}</p>
        ))}
      </div>
      <div id="type-info">
        <Statistics
          accuracyDisplay={props.accuracyDisplay}
          statsDisplay={props.statsDisplay}
          correctChars={props.correctChars}
          incorrectChars={props.incorrectChars}
          missedSpaces={props.missedSpaces}
          letters={props.letters}
        />
        <Reset onReset={props.onReset}/>
      </div>
    </main>
  );
}