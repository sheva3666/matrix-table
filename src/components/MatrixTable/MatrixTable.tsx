/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import useMatrix from "../../hooks/useMatrix";
import { Cell } from "../../types/types";

const MatrixTable = () => {
  const { matrix, addRow, removeRow, incrementCell } = useMatrix();

  const calculateRowSum = (row: any[]) =>
    row.reduce((acc, cell) => acc + cell.amount, 0);

  const calculateColumnPercentile = useMemo(
    () => (colIndex: number) => {
      const values = matrix
        .map((row: { amount: any }[]) => row[colIndex].amount)
        .sort((a: number, b: number) => a - b);
      return values[Math.floor(values.length / 2)];
    },
    [matrix]
  );

  return (
    <div>
      <table>
        <thead>
          <tr>
            {matrix[0].map((_: any, i: number) => (
              <th key={i}>Col {i + 1}</th>
            ))}
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {matrix.map((row: any[], rowIndex: number) => (
            <tr key={rowIndex}>
              {row.map((cell: Cell, colIndex: number) => (
                <td
                  key={cell.id}
                  onClick={() => incrementCell(rowIndex, colIndex)}
                >
                  {cell.amount}
                </td>
              ))}
              <td>{calculateRowSum(row)}</td>
              <td>
                <button onClick={() => removeRow(rowIndex)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {matrix[0].map((_: any, colIndex: number) => (
              <td key={colIndex}>{calculateColumnPercentile(colIndex)}</td>
            ))}
            <td>Percentiles</td>
          </tr>
        </tfoot>
      </table>
      <button onClick={addRow}>Add Row</button>
    </div>
  );
};

export default MatrixTable;
