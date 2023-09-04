import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="container">
          <div className="pens">
            <h1>Pens</h1>
            <div className="penButtons">
              <Button variant="primary" id="penButton">
                Black
              </Button>{" "}
              <br />
              <Button variant="primary" id="penButton">
                Rainbow
              </Button>{" "}
              <br />
              <Button variant="primary" id="penButton">
                Eraser
              </Button>{" "}
              <br />
            </div>
          </div>
          <div className="pen-image"></div>
          <div className="sketch">
            <div className="outer">
              <span id="header">Etch-a-Sketch!</span>
              <div className="sketch-content"></div>
            </div>
          </div>
          <div className="gridchanger"></div>
        </div>
      </div>
    </>
  );
}

export default App;
