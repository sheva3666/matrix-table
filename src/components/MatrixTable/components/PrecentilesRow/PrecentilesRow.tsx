/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import useMatrix from "../../../../hooks/useMatrix";
import "./PrecentilesRow.css";

const PrecentilesRow = () => {
  const { matrix } = useMatrix();

  const calculateColumnPercentile = useMemo(
    () => (colIndex: number) => {
      const values = matrix
        .map((row: { amount: number }[]) => row[colIndex].amount)
        .sort((a: number, b: number) => a - b);
      return values[Math.floor(values.length / 2)];
    },
    [matrix]
  );
  return (
    <tr>
      {matrix[0].map((_: any, columnIndex: number) => (
        <td className="table_row-cell" key={columnIndex}>
          {calculateColumnPercentile(columnIndex)}
        </td>
      ))}
      <td className="table_row-cell">Percentiles</td>
    </tr>
  );
};

export default PrecentilesRow;
