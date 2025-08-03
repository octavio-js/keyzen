import React from "react";
import './wordselection.css';

export default function WordSelection() {
  return (
    <div id="amount-of-words">
      <h3>Select amount of words</h3>
      <button className='selected word-choice'>30</button>
      <button className="word-choice">50</button>
      <button className="word-choice">100</button>
      <button className="word-choice">250</button>
    </div>
  );
}