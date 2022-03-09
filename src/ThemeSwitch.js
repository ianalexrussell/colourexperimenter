import React from "react";
import { useState } from "react";

function ThemeSwitch({ colorMode, setColorMode }) {
  const [modeText, setModeText] = useState("DARK MODE");

  const changeBGColour = () => {
    if (colorMode === "#fff") {
      setColorMode("#333");
      setModeText("LIGHT MODE");
    } else {
      setColorMode("#fff");
      setModeText("DARK MODE");
    }
  };

  return (
    <div className="dark-mode">
      <button className="btn" onClick={changeBGColour}>
        {modeText}
      </button>
    </div>
  );
}

export default ThemeSwitch;
