import './App.css';
import { generateText } from './modules/wordGenerator.js';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header.jsx';
import TextArea from './components/TextArea/TextArea.jsx';
import ThemeSelection from './components/ThemeSelection/ThemeSelection.jsx';

export default function App() {
  const [text, setText] = useState('');
  const [letters, setLetters] = useState([]);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChards, setIncorrectChars] = useState(0);
  const [missedSpaces, setMissedSpaces] = useState(0);
  const [amountOfWords, setAmountOfWords] = useState(30);
  const [areThemesOpen, setAreThemesOpen] = useState(false);
  const [areLightThemesOpen, setAreLightThemesOpen] = useState(false);
  const [areDarkThemesOpen, setAreDarkThemesOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [currentLetterColor, setCurrentLetterColor] = useState('#2e3440');
  const [currentCorCharCol, setCurrentCorCharCol] = useState('#3fa796');
  const [currentIncorCharCol, setCurrentIncorCharCol] = useState('#d47fa6');
  const [currentNextLetterCol, setCurrentNextLetterCol] = useState('#f0a202');
  const [currentNextSpaceCol, setCurrentNextSpaceCol] = useState('#c2b8a3');
  // i feel like this isnt the best way of storing the app's state
  // for now it works, will look into it after i finish the react migration

  useEffect(() => {
    generateText(text, setText, setLetters, amountOfWords);
  },[amountOfWords]); // rendering the text only works on every refresh, for now

  return (
    <>
      <Header setAmountOfWords={setAmountOfWords}/>
      <TextArea letters={letters}/>
      <ThemeSelection/>
    </>
  );
}