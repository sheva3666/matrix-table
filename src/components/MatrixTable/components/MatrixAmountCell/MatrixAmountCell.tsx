import { useMemo } from "react";
import { Cell } from "../../../../types/types";
import useMatrix from "../../../../hooks/useMatrix";

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
  const { incrementCell } = useMatrix();

  const procentage = useMemo(
    () => Math.round((cell.amount / rowSum) * 100),
    [cell.amount, rowSum]
  );

  return (
    <td
      className="table_row-cell"
      key={cell.id}
      onClick={() => incrementCell(rowIndex, columnIndex)}
    >
      {isHoveredCell ? `${procentage}%` : cell.amount}
    </td>
  );
};

export default MatrixAmountCell;
