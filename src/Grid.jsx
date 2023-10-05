import React, { useEffect, useState } from "react";
import "./Grid.css";

function GridSize({ gridSize, currentColor }) {
  const [numCols, setNumCols] = useState(1);
  const [numRows, setNumRows] = useState(1);
  const [coloredCells, setColoredCells] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (gridSize >= 121 && gridSize <= 1024) {
      const cols = Math.ceil(Math.sqrt(gridSize));
      const rows = Math.ceil(gridSize / cols);

      setNumCols(cols);
      setNumRows(rows);

      document.documentElement.style.setProperty("--num-cols", cols);
      document.documentElement.style.setProperty("--num-rows", rows);
      setColoredCells([]);
    }
  }, [gridSize]);

  const handleGridCellMouseDown = (index) => {
    setIsDrawing(true);
    handleGridCellHover(index);
  };

  const handleGridCellMouseUp = () => {
    setIsDrawing(false);
  };

  const handleGridCellHover = (index) => {
    if (isDrawing) {
      if (currentColor === "#fff") {
        // If the current color is white (eraser), remove the cell color
        setColoredCells((prevColoredCells) =>
          prevColoredCells.filter((cellIndex) => cellIndex !== index)
        );
      } else {
        // Otherwise, color the cell with the current pen color
        setColoredCells((prevColoredCells) =>
          prevColoredCells.includes(index)
            ? prevColoredCells
            : [...prevColoredCells, index]
        );
      }
    }
  };

  const handleGridCellClick = (index) => {
    if (currentColor === "#fff") {
      // If the current color is white (eraser), remove the cell color
      setColoredCells((prevColoredCells) =>
        prevColoredCells.filter((cellIndex) => cellIndex !== index)
      );
    } else {
      // Otherwise, color the cell with the current pen color
      setColoredCells((prevColoredCells) =>
        prevColoredCells.includes(index)
          ? prevColoredCells
          : [...prevColoredCells, index]
      );
    }
  };

  const isCellColored = (index) => coloredCells.includes(index);

  const divElements =
    gridSize >= 121 && gridSize <= 1024
      ? Array.from({ length: gridSize }, (_, index) => (
          <div
            className={`grid-cell ${
              isCellColored(index) ? "grid-cell-hover" : ""
            }`}
            key={index}
            onMouseDown={() => handleGridCellMouseDown(index)}
            onMouseUp={handleGridCellMouseUp}
            onMouseEnter={() => handleGridCellHover(index)}
            onClick={() => handleGridCellClick(index)}
            style={{
              backgroundColor: isCellColored(index) ? currentColor : "",
            }}
          ></div>
        ))
      : null;

  return <div className="grid-container">{divElements}</div>;
}

export default GridSize;
