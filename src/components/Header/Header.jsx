import React from 'react';
import styles from './header.module.css';
import icon from '../../assets/black-icon.png';
import WordSelection from '../WordSelection/WordSelection.jsx';

export default function Header() {
  return (
    <header className={styles.header}>
      <div id="hero" className={styles.hero}>
        <div>
          <img src={icon} className={styles.logo} alt="KeyZen logo" />
        </div>
        <div>
          <h1>KeyZen</h1>
        </div>
      </div>
      <WordSelection/>
    </header>
  );
}