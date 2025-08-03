import './App.css';
import React from 'react';
import Header from './components/Header/Header.jsx';
import TextArea from './components/TextArea/TextArea.jsx';
import ThemeSelection from './components/ThemeSelection/ThemeSelection.jsx';

export default function App() {
  return (
    <>
      <Header/>
      <TextArea/>
      <ThemeSelection/>
    </>
  );
}