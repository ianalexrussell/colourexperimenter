import colorNames from "colornames";

export default function Colour({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <label htmlFor="">Add Color Name:</label>
      <input
        autoFocus
        type="text"
        placeholder="Add Color Name:"
        value={colorValue}
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
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
