import React from "react";
import './textarea.css';
import Statistics from "../Statistics/Statistics.jsx";

export default function TextArea() {
  return (
    <main>
      <div id="letters-container"></div>
      <div id="type-info">
        <Statistics/>
        <div id="reset-container">
          <p id="reset" class="hover">⟳</p>
          <p>Press <b>Enter</b> or click Reset to try again</p>
        </div>
      </div>
    </main>
  );
}