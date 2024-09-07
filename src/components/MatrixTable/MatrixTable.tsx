import useMatrix from "../../hooks/useMatrix";
import { Cell } from "../../types/types";
import MatrixHeaders from "./components/MatrixHeaders/MatrixHeaders";
import MatrixRow from "./components/MatrixRow/MatrixRow";
import PrecentilesRow from "./components/PrecentilesRow/PrecentilesRow";
import "./MatrixTable.css";

const MatrixTable = () => {
  const { matrix, addRow } = useMatrix();
  if (!matrix.length) {
    return <button onClick={addRow}>Add Row</button>;
  }

  return (
    <table className="table">
      <thead>
        <MatrixHeaders />
      </thead>
      <tbody>
        {matrix.map((row: Cell[], rowIndex: number) => (
          <MatrixRow key={rowIndex} row={row} rowIndex={rowIndex} />
        ))}
      </tbody>
      <tfoot>
        <PrecentilesRow />
      </tfoot>
    </table>
  );
};

export default MatrixTable;
