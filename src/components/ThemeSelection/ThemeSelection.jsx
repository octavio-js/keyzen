import React from "react";
import './themeselection.css';

export default function ThemeSelection() {
  return (
    <footer>
      <div id="change-theme">
        <h3 class="show-themes hover">Change Theme</h3>
        <div id="light-mode" class="theme">
          <h4 class="show-themes hover">Light Themes</h4>
          <div class="light-themes">
            <div class="light-theme">
              <p id="soft-focus" class="theme-choice hover">Soft Focus</p>
            </div>
            <div class="light-theme">
              <p id="sunrise-grove" class="theme-choice hover">Sunrise Grove</p>
            </div>
            <div class="light-theme">
              <p id="crystal-lake" class="theme-choice hover">Crystal Lake</p>
            </div>
            <div class="light-theme">
              <p id="lavender-bloom" class="theme-choice hover">Lavender Bloom</p>
            </div>
            <div class="light-theme">
              <p id="zen-dunes" class="theme-choice hover">Zen Dunes</p>
            </div>
          </div>
        </div>
        <div id="dark-mode" class="theme">
          <h4 class="show-themes hover">Dark Themes</h4>
          <div class="dark-themes">
            <div class="dark-theme">
              <p id="night-lotus" class="theme-choice hover">Night Lotus</p>
            </div>
            <div class="dark-theme">
              <p id="shadow-fern" class="theme-choice hover">Shadow Fern</p>
            </div>
            <div class="dark-theme">
              <p id="muted-tides" class="theme-choice hover">Muted Tides</p>
            </div>
            <div class="dark-theme">
              <p id="charcoal-tea" class="theme-choice hover">Charcoal Tea</p>
            </div>
            <div class="dark-theme">
              <p id="velvet-dusk" class="theme-choice hover">Velvet Dusk</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}