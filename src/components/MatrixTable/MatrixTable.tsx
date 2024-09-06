import useMatrix from "../../hooks/useMatrix";
import { Cell } from "../../types/types";
import MatrixHeaders from "./components/MatrixHeaders/MatrixHeaders";
import MatrixRow from "./components/MatrixRow/MatrixRow";
import PrecentilesRow from "./components/PrecentilesRow/PrecentilesRow";
import "./MatrixTable.css";

const MatrixTable = () => {
  const { matrix, addRow } = useMatrix();

  return (
    <>
      <table className="table">
        <thead>
          <MatrixHeaders />
        </thead>
        <tbody>
          {matrix.map((row: Cell[], rowIndex: number) => (
            <MatrixRow row={row} rowIndex={rowIndex} />
          ))}
        </tbody>
        <tfoot>
          <PrecentilesRow />
        </tfoot>
      </table>
      <button onClick={addRow}>Add Row</button>
    </>
  );
};

export default MatrixTable;
