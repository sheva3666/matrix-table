import { useState, ReactNode } from "react";
import { Cell } from "../types/types";
import MatrixContext from "../contexts/MatrixContext";

const generateInitialMatrix = (m: number, n: number): Cell[][] => {
  let idCounter = 0;
  return Array.from({ length: m }, () =>
    Array.from({ length: n }, () => ({
      id: idCounter++,
      amount: Math.floor(Math.random() * 900) + 100,
    }))
  );
};

const generateRow = (m: number, n: number): Cell[] => {
  let idCounter = m * n;
  return Array.from({ length: n }, () => ({
    id: idCounter++,
    amount: Math.floor(Math.random() * 900) + 100,
  }));
};

const MatrixContextWrapper = ({ children }: { children: ReactNode }) => {
  const [matrix, setMatrix] = useState<Cell[][]>(generateInitialMatrix(5, 5));

  const addRow = () => {
    const newRow = generateRow(matrix.length, matrix[0].length);
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

  return (
    <MatrixContext.Provider
      value={{ matrix, addRow, removeRow, incrementCell }}
    >
      {children}
    </MatrixContext.Provider>
  );
};

export default MatrixContextWrapper;
