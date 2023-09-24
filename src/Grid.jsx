import React, { useEffect, useState, useCallback } from "react";
import "./Grid.css";

function GridSize({ gridSize }) {
  const [numCols, setNumCols] = useState(1);
  const [numRows, setNumRows] = useState(1);
  const [blackCells, setBlackCells] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    if (gridSize >= 121 && gridSize <= 1024) {
      const cols = Math.ceil(Math.sqrt(gridSize));
      const rows = Math.ceil(gridSize / cols);

      setNumCols(cols);
      setNumRows(rows);

      document.documentElement.style.setProperty("--num-cols", cols);
      document.documentElement.style.setProperty("--num-rows", rows);

      // Reset blackCells when gridSize changes
      setBlackCells([]);
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
      if (!blackCells.includes(index)) {
        setBlackCells([...blackCells, index]);
      }
    }
  };

  const handleGridCellClick = (index) => {
    if (!blackCells.includes(index)) {
      setBlackCells([...blackCells, index]);
    }
  };

  const isCellBlack = (index) => blackCells.includes(index);

  const divElements =
    gridSize >= 121 && gridSize <= 1024
      ? Array.from({ length: gridSize }, (_, index) => (
          <div
            className={`grid-cell ${
              isCellBlack(index) ? "grid-cell-hover" : ""
            }`}
            key={index}
            onMouseDown={() => handleGridCellMouseDown(index)}
            onMouseUp={handleGridCellMouseUp}
            onMouseEnter={() => handleGridCellHover(index)}
            onClick={() => handleGridCellClick(index)}
          ></div>
        ))
      : null;

  return <div className="grid-container">{divElements}</div>;
}

export default GridSize;
