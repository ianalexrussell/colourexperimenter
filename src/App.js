import Container from "./Container";
import ThemeSwitch from "./ThemeSwitch";
import "./App.css";
import { useState } from "react";

function App() {
  const [colorMode, setColorMode] = useState("#fff");
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);
  const [colorValue2, setColorValue2] = useState("");
  const [colorValue3, setColorValue3] = useState("");
  const [colorValue4, setColorValue4] = useState("");

  return (
    <div
      className="App"
      style={{
        backgroundColor: colorMode,
      }}
    >
      <ThemeSwitch
        colorMode={colorMode}
        setColorMode={setColorMode}
      ></ThemeSwitch>
      <Container
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Container
        colorValue={colorValue2}
        setColorValue={setColorValue2}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Container
        colorValue={colorValue3}
        setColorValue={setColorValue3}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
      <Container
        colorValue={colorValue4}
        setColorValue={setColorValue4}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
