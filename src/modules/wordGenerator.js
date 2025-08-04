import { wordList } from "./constants.js";

export function generateText(setLetters, amountOfWords) {
  setLetters([]);
  let allText = '';
  let allLetters = [];
  for (let i = 0; i < amountOfWords; i++) {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    if (i === 0) {
      allText += wordList[randomIndex];
    } else {
      allText += ' ' + wordList[randomIndex];
    }
  }
  for (let i = 0; i < allText.length; i++) {
    allLetters.push(allText[i]);
  }
  setLetters(allLetters);
}