import React from "react";
import './statistics.css';

export default function Statistics(props) {
  const accuracy = props.letters.length > 0 ? Math.floor((props.correctChars*100) / props.letters.length) : 0;

  return (
    <div id="statistics">
      <p style={{display: props.accuracyDisplay}} id="accuracy">Accuracy: {accuracy}%</p>
      <p style={{display: props.statsDisplay}} id="stats" title="Total / Correct / Incorrect / Missed Spaces">
        {props.letters.length} / {props.correctChars} / {props.incorrectChars} / {props.missedSpaces}
      </p>
    </div>
  );
}