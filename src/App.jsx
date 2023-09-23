import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import GridSize from "./Grid";
import { useState } from "react";

function App() {
  const [gridSize, setGridSize] = useState(121);
  const handleInputChange = () => {
    setGridSize(event.target.value);
  };

  return (
    <>
      <div className="appContainer">
        <div className="container">
          <div className="pens">
            <h1>Pens</h1>
            <div className="penButtons">
              <Button
                variant="primary"
                className="penButton"
                id="blackPenButton"
              >
                Black
              </Button>
              <br />
              <Button
                variant="primary"
                className="penButton"
                id="rainbowPenButton"
              >
                Rainbow
              </Button>
              <br />
              <Button variant="primary" className="penButton" id="eraserButton">
                Eraser
              </Button>
              <br />
            </div>
          </div>
          <div className="pen-image"></div>
          <div className="sketch">
            <div className="outer">
              <div id="header">Etch-a-Sketch!</div>
              <div className="sketch-content">
                <GridSize gridSize={gridSize} />
              </div>
            </div>
          </div>
          <div className="gridChanger">
            <h1>Size</h1>
            <p>Adjust the grid size (only between 121 and 1024!)</p>
            <input
              type="number"
              value={gridSize}
              onChange={handleInputChange}
              id="gridInput"
              min="121"
              max="1024"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
