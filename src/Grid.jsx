import React, { useEffect, useState, useCallback } from "react";
import "./Grid.css";

function GridSize({ gridSize }) {
  const [numCols, setNumCols] = useState(1);
  const [numRows, setNumRows] = useState(1);
  const [isDrawing, setIsDrawing] = useState(false);
  const [blackCells, setBlackCells] = useState([]);

  useEffect(() => {
    const cols = Math.ceil(Math.sqrt(gridSize));
    const rows = Math.ceil(gridSize / cols);

    setNumCols(cols);
    setNumRows(rows);

    document.documentElement.style.setProperty("--num-cols", cols);
    document.documentElement.style.setProperty("--num-rows", rows);

    // Reset blackCells when gridSize changes
    setBlackCells([]);
  }, [gridSize]);

  const handleGridCellMouseDown = (index) => {
    setIsDrawing(true);
    handleGridCellHover(index);
  };

  const handleGridCellMouseUp = () => {
    setIsDrawing(false);
  };

  const handleGridCellHover = (index) => {
    if (isDrawing && !blackCells.includes(index)) {
      setBlackCells([...blackCells, index]);
    }
  };

  const isCellBlack = (index) => blackCells.includes(index);

  const divElements = Array.from({ length: gridSize }, (_, index) => (
    <div
      className={`grid-cell ${isCellBlack(index) ? "grid-cell-hover" : ""}`}
      key={index}
      onMouseDown={() => handleGridCellMouseDown(index)}
      onMouseUp={handleGridCellMouseUp}
      onMouseEnter={() => handleGridCellHover(index)}
    ></div>
  ));

  return <div className="grid-container">{divElements}</div>;
}

export default GridSize;
