import { useMemo } from "react";
import { Cell } from "../../../../types/types";
import useMatrix from "../../../../hooks/useMatrix";
import "./MatrixAmountCell.css";

type MatrixAmountCellProps = {
  cell: Cell;
  columnIndex: number;
  rowIndex: number;
  rowSum: number;
  isHoveredCell: boolean;
};

const MatrixAmountCell = ({
  cell,
  columnIndex,
  rowIndex,
  rowSum,
  isHoveredCell,
}: MatrixAmountCellProps) => {
  const { incrementCell, handleHoverCell, closestCells } = useMatrix();

  const procentage = useMemo(
    () => Math.round((cell.amount / rowSum) * 100),
    [cell.amount, rowSum]
  );

  const isClosest = closestCells.some((c) => c.id === cell.id);

  return (
    <td
      className={`table_row-cell ${isClosest ? "highlighted" : ""}`}
      key={cell.id}
      onClick={() => incrementCell(rowIndex, columnIndex)}
      onMouseOver={() => handleHoverCell(cell)}
      onMouseOut={() => handleHoverCell(null)}
    >
      {isHoveredCell ? `${procentage}%` : cell.amount}
    </td>
  );
};

export default MatrixAmountCell;
