import React, { useState } from "react";
import './wordselection.css';

export default function WordSelection(props) {
  const [selectedWords, setSelectedWords] = useState(30);

  const handleWordCountClick = (event) => {
    const button = event.target;
    const wordCount = Number(button.innerText);
    button.blur();
    setSelectedWords(wordCount);
    props.setAmountOfWords(wordCount);
  }

  return (
    <div id="amount-of-words">
      <h3>Select amount of words</h3>
      <button onClick={handleWordCountClick} className={`word-choice ${selectedWords === 30 ? 'selected' : ''}`}>30</button>
      <button onClick={handleWordCountClick} className={`word-choice ${selectedWords === 50 ? 'selected' : ''}`}>50</button>
      <button onClick={handleWordCountClick} className={`word-choice ${selectedWords === 100 ? 'selected' : ''}`}>100</button>
      <button onClick={handleWordCountClick} className={`word-choice ${selectedWords === 250 ? 'selected' : ''}`}>250</button>
    </div>
  );
}