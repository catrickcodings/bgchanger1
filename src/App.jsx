import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-white mb-4">Current Color: {color}</h1>
      <div>
        <button onClick={() => changeColor("olive")} className="m-2 p-2 bg-green-600 text-white rounded">Olive</button>
        <button onClick={() => changeColor("red")} className="m-2 p-2 bg-red-600 text-white rounded">Red</button>
        <button onClick={() => changeColor("blue")} className="m-2 p-2 bg-blue-600 text-white rounded">Blue</button>
        <button onClick={() => changeColor("yellow")} className="m-2 p-2 bg-yellow-600 text-white rounded">Yellow</button>
        <button onClick={() => changeColor("purple")} className="m-2 p-2 bg-purple-600 text-white rounded">Purple</button>
      </div>
    </div>
  );
}

export default App;