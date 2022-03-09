import Box from "./Box";
import Colour from "./Colour";

export default function Container({
  colorValue,
  setColorValue,
  hexValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) {
  return (
    <div className="container">
      <Box
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      ></Box>
      <Colour
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      ></Colour>
    </div>
  );
}
