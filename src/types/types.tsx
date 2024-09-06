export type Cell = {
  id: number;
  amount: number;
};

export type MatrixContextType = {
  matrix: Cell[][];
  addRow: () => void;
  removeRow: (rowIndex: number) => void;
  incrementCell: (rowIndex: number, colIndex: number) => void;
};
