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
        <Statistics/>
        <Reset onReset={props.onReset}/>
      </div>
    </main>
  );
}