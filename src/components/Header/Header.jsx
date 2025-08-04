import React from 'react';
import './header.css';
import icon from '../../assets/black-icon.png';
import WordSelection from '../WordSelection/WordSelection.jsx';

export default function Header(props) {
  return (
    <header>
      <div id="hero">
        <div id="image">
          <img src={icon} className='keyzen-logo' alt="KeyZen logo" />
        </div>
        <div>
          <h1>KeyZen</h1>
        </div>
      </div>
      <WordSelection setAmountOfWords={props.setAmountOfWords}/>
    </header>
  );
}