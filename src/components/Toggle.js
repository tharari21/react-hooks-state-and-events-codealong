import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => {
    setIsOn((isOn) => !isOn);
  };
  const color = isOn ? "green" : "red";
  return (
    <button style={{ backgroundColor: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
