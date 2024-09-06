import { Cell } from "../../../../types/types";
import useMatrix from "../../../../hooks/useMatrix";
import "./MatrixRow.css";
import MatrixAmountCell from "../MatrixAmountCell/MatrixAmountCell";
import { useState } from "react";

type MatrixRowProps = {
  rowIndex: number;
  row: Cell[];
};

const calculateRowSum = (row: Cell[]) =>
  row.reduce((acc, cell) => acc + cell.amount, 0);

const MatrixRow = ({ rowIndex, row }: MatrixRowProps) => {
  const [isHoveredCell, setIsHoveredCell] = useState<boolean>(false);
  const { removeRow } = useMatrix();

  const handleHover = () => setIsHoveredCell((prevState) => !prevState);

  const rowSum = calculateRowSum(row);

  return (
    <tr key={rowIndex}>
      {row.map((cell: Cell, columnIndex: number) => (
        <MatrixAmountCell
          cell={cell}
          columnIndex={columnIndex}
          rowIndex={rowIndex}
          rowSum={rowSum}
          isHoveredCell={isHoveredCell}
        />
      ))}
      <td
        onMouseOver={handleHover}
        onMouseLeave={handleHover}
        className="table_row-cell"
      >
        {rowSum}
      </td>
      <td className="table_row-cell">
        <button onClick={() => removeRow(rowIndex)}>Remove</button>
      </td>
    </tr>
  );
};

export default MatrixRow;
