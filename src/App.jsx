import './App.css';
import { generateText } from './modules/wordGenerator.js';
import { resetPage } from './modules/uiManager.js';
import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header/Header.jsx';
import TextArea from './components/TextArea/TextArea.jsx';
import ThemeSelection from './components/ThemeSelection/ThemeSelection.jsx';

export default function App() {
  const [letters, setLetters] = useState([]);
  const [currentLetter, setCurrentLetter] = useState(0);
  const [correctChars, setCorrectChars] = useState(0);
  const [incorrectChars, setIncorrectChars] = useState(0);
  const [missedSpaces, setMissedSpaces] = useState(0);
  const [amountOfWords, setAmountOfWords] = useState(30);
  const [accuracyDisplay, setAccuracyDisplay] = useState('none');
  const [statsDisplay, setStatsDisplay] = useState('none');
  const [areThemesOpen, setAreThemesOpen] = useState(false);
  const [areLightThemesOpen, setAreLightThemesOpen] = useState(false);
  const [areDarkThemesOpen, setAreDarkThemesOpen] = useState(false);
  const [currentLetterColor, setCurrentLetterColor] = useState('#2e3440');
  const [currentCorCharCol, setCurrentCorCharCol] = useState('#3fa796');
  const [currentIncorCharCol, setCurrentIncorCharCol] = useState('#d47fa6');
  const [currentNextLetterCol, setCurrentNextLetterCol] = useState('#f0a202');
  const [currentNextSpaceCol, setCurrentNextSpaceCol] = useState('#c2b8a3');
  // i feel like this isnt the best way of storing the app's state
  // for now it works, will look into it after i finish the react migration

  const handleReset = useCallback(() => {
    setLetters([]);
    setCurrentLetter(0);
    setCorrectChars(0);
    setIncorrectChars(0);
    setMissedSpaces(0);
    setAccuracyDisplay('none');
    setStatsDisplay('none');
    generateText(setLetters, amountOfWords);
  }, [amountOfWords]);

  useEffect(() => {
    const handleKeyPress = event => {
      if (event.key === 'Enter') {
        handleReset();
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleReset]);

  useEffect(() => {
    generateText(setLetters, amountOfWords);
  },[amountOfWords]); // rendering the text only works on every refresh, for now

  return (
    <>
      <Header amountOfWords={amountOfWords} setAmountOfWords={setAmountOfWords}/>
      <TextArea letters={letters} onReset={handleReset}/>
      <ThemeSelection/>
    </>
  );
}