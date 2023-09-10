import React, { useEffect, useState } from "react";
import "./Grid.css";

function GridSize({ gridSize }) {
  if (gridSize > 120 && gridSize < 1025) {
    const [numCols, setNumCols] = useState(1);
    const [numRows, setNumRows] = useState(1);

    useEffect(() => {
      const cols = Math.ceil(Math.sqrt(gridSize));
      const rows = Math.ceil(gridSize / cols);

      setNumCols(cols);
      setNumRows(rows);

      document.documentElement.style.setProperty("--num-cols", cols);
      document.documentElement.style.setProperty("--num-rows", rows);
    }, [gridSize]);

    const divElements = Array.from({ length: gridSize }, (_, index) => (
      <div className="grid-cell" key={index}></div>
    ));

    return <div className="grid-container">{divElements}</div>;
  }
}

function HoverDraw() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hoveredClass = isHovered ? "grid-cell grid-cell-hover" : "grid-cell";

  return (
    <div
      className={divClassName}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    ></div>
  );
}

export default GridSize;
