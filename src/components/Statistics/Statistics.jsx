import React from "react";
import './statistics.css';

export default function Statistics() {
  return (
    <div>
      <p id="accuracy">Accuracy: 0%</p>
      <p id="stats" title="Total / Correct / Incorrect / Missed Spaces">0 / 0 / 0 / 0</p>
    </div>
  );
}