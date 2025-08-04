import React from "react";
import './reset.css';

export default function Reset(props) {
  return (
    <div id="reset-container">
      <p id="reset" className="hover" onClick={props.onReset}>⟳</p>
      <p>Press <b>Enter</b> or click Reset to try again</p>
    </div>
  );
}