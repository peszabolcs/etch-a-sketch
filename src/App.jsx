import React, { useState } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import GridSize from "./Grid";

function App() {
  const [gridSize, setGridSize] = useState(121);
  const [currentColor, setCurrentColor] = useState("#000");
  const [penMode, setPenMode] = useState("black");
  const [activeButton, setActiveButton] = useState("black");
  const [inputValue, setInputValue] = useState(121); // Initialize with 121
  const [showMessage, setShowMessage] = useState(false); // State for showing the message

  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setInputValue(newValue);
    setGridSize(newValue);

    // Check if the input value is 1005 to show the message
    if (newValue === 1005) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  };

  const handlePenButtonClick = (mode) => {
    setPenMode(mode);
    if (mode === "eraser") {
      setCurrentColor("#fff");
    } else {
      setCurrentColor("#000");
    }

    setActiveButton(mode);
  };

  return (
    <div className="appContainer">
      <div className="container">
        <div className="sketch-left">
          <div className="outer">
            <div id="header">Etch-a-Sketch!</div>
            <div className="sketch-content">
              <GridSize gridSize={gridSize} currentColor={currentColor} />
            </div>
          </div>
        </div>
        <div className="pens-buttons-right">
          <div className="pens">
            <h1>Pens</h1>
            <div className="penButtons">
              <Button
                variant="primary"
                className={`penButton ${
                  activeButton === "black" ? "active" : ""
                }`}
                id="blackPenButton"
                onClick={() => handlePenButtonClick("black")}
              >
                Black
              </Button>
              <Button
                variant="primary"
                className={`penButton ${
                  activeButton === "eraser" ? "active" : ""
                }`}
                id="eraserButton"
                onClick={() => handlePenButtonClick("eraser")}
              >
                Eraser
              </Button>
            </div>
          </div>
          <div className="gridChanger">
            <h1>Size</h1>
            <p>Adjust the grid size (only between 121 and 1024!)</p>
            <input
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              id="gridInput"
              min="121"
              max="1024"
            />
            {showMessage && (
              <p id="specialThanks">
                Special thanks for my one and only Bodzsi &lt;33
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
