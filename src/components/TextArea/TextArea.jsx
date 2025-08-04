import React from "react";
import './textarea.css';
import Statistics from "../Statistics/Statistics.jsx";
import Reset from "../Reset/Reset.jsx";

export default function TextArea() {
  return (
    <main>
      <div id="letters-container"></div>
      <div id="type-info">
        <Statistics/>
        <Reset/>
      </div>
    </main>
  );
}