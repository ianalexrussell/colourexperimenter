export default function Box({ colorValue, hexValue, isDarkText }) {
  return (
    <div>
      <div
        className="box"
        style={{
          backgroundColor: colorValue,
          color: isDarkText ? "#000" : "#FFF",
        }}
      >
        <p>{colorValue ? colorValue : "No color"}</p>
        <p>{hexValue ? hexValue : null}</p>
      </div>
    </div>
  );
}

Box.defaultProps = {
  colorValue: "No Color",
};
