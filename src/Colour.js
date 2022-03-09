import colorNames from "colornames";

export default function Colour({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) {
  const getRandomColour = () => {
    let randomColour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColorValue(randomColour);
    setHexValue(colorNames(randomColour));
  };

  return (
    <form onSubmit={(e) => e.preventDefault}>
      <label htmlFor="">Add Colour Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Color Name or #:"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      {/* GET A RANDOM COLOUR */}
      <button type="button" className="btn" onClick={() => getRandomColour()}>
        Random Colour
      </button>
      {/* CHANGE TEXT COLOUR IN CASE OF VISIBILITY ISSUES */}
      <button
        type="button"
        className="btn"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Light/Dark Text
      </button>
    </form>
  );
}
