import React from "react";
import './themeselection.css';

export default function ThemeSelection() {
  return (
    <footer>
      <div id="change-theme">
        <h3 className="show-themes hover">Change Theme</h3>
        <div id="light-mode" className="theme">
          <h4 className="show-themes hover">Light Themes</h4>
          <div className="light-themes">
            <div className="light-theme">
              <p id="soft-focus" className="theme-choice hover">Soft Focus</p>
            </div>
            <div className="light-theme">
              <p id="sunrise-grove" className="theme-choice hover">Sunrise Grove</p>
            </div>
            <div className="light-theme">
              <p id="crystal-lake" className="theme-choice hover">Crystal Lake</p>
            </div>
            <div className="light-theme">
              <p id="lavender-bloom" className="theme-choice hover">Lavender Bloom</p>
            </div>
            <div className="light-theme">
              <p id="zen-dunes" className="theme-choice hover">Zen Dunes</p>
            </div>
          </div>
        </div>
        <div id="dark-mode" className="theme">
          <h4 className="show-themes hover">Dark Themes</h4>
          <div className="dark-themes">
            <div className="dark-theme">
              <p id="night-lotus" className="theme-choice hover">Night Lotus</p>
            </div>
            <div className="dark-theme">
              <p id="shadow-fern" className="theme-choice hover">Shadow Fern</p>
            </div>
            <div className="dark-theme">
              <p id="muted-tides" className="theme-choice hover">Muted Tides</p>
            </div>
            <div className="dark-theme">
              <p id="charcoal-tea" className="theme-choice hover">Charcoal Tea</p>
            </div>
            <div className="dark-theme">
              <p id="velvet-dusk" className="theme-choice hover">Velvet Dusk</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}