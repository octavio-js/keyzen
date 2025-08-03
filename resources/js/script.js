import { themes } from './modules/constants.js';
import { applyTheme } from './modules/themeManager.js';
import { generateText } from './modules/wordGenerator.js';
import { getKey } from './modules/typingEngine.js';
import { resetPage } from './modules/uiManager.js';
import {
  changeThemeDiv, lightModeDiv, darkModeDiv,
  lightThemes, darkThemes, resetButton
} from './modules/domElements.js';
import { state } from './modules/stateManager.js';

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('keyzen-theme');
  if (savedTheme && themes[savedTheme]) {
    applyTheme(savedTheme);
  } else {
    generateText();
  }
});

/*
after you finish typing one round and you begin to type another round, if you reset in the middle
of typing, the first character already appears as incorrect and the second letter is next.
resetting the text via Enter doesnt fix the issue, but resetting the text via the Reset button
somehow resets the text corectly, but if you reset the text with Enter again, the same issue appears.
*/

document.body.addEventListener('keydown', getKey);
document.body.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    resetPage();
  }
});

document.body.addEventListener('click', (event) => {
  if (!changeThemeDiv.contains(event.target)) {
    lightModeDiv.style.display = 'none';
    darkModeDiv.style.display = 'none';
    lightThemes.style.display = 'none';
    darkThemes.style.display = 'none';
    state.areThemesOpen = false;
    state.areLightThemesOpen = false;
    state.areDarkThemesOpen = false;
  }
});

resetButton.addEventListener('click', resetPage);