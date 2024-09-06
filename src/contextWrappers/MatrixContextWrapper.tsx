import { useState, ReactNode } from "react";
import { Cell } from "../types/types";
import MatrixContext from "../contexts/MatrixContext";
import {
  generateInitialMatrix,
  generateRow,
  getClosestCells,
} from "../components/MatrixTable/matrixTableUtils";

const MatrixContextWrapper = ({ children }: { children: ReactNode }) => {
  const [currentHoveredCell, setcurrentHoveredCell] = useState<Cell | null>(
    null
  );

  const [matrix, setMatrix] = useState<Cell[][]>(
    generateInitialMatrix({ m: 5, n: 5 })
  );

  const handleHoverCell = (cell: Cell | null) => {
    setcurrentHoveredCell((prevState) => (!prevState ? cell : null));
  };

  const addRow = () => {
    const newRow = generateRow({ m: matrix.length, n: matrix[0].length });
    setMatrix([...matrix, newRow]);
  };

  const removeRow = (rowIndex: number) => {
    setMatrix(matrix.filter((_, i) => i !== rowIndex));
  };

  const incrementCell = (rowIndex: number, colIndex: number) => {
    const newMatrix = matrix.map((row, i) =>
      i === rowIndex
        ? row.map((cell, j) =>
            j === colIndex ? { ...cell, amount: cell.amount + 1 } : cell
          )
        : row
    );
    setMatrix(newMatrix);
  };

  const closestCells = getClosestCells(currentHoveredCell, matrix);

  return (
    <MatrixContext.Provider
      value={{
        matrix,
        addRow,
        removeRow,
        incrementCell,
        handleHoverCell,
        closestCells,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};

export default MatrixContextWrapper;
