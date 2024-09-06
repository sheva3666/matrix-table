/* eslint-disable @typescript-eslint/no-explicit-any */
import useMatrix from "../../../../hooks/useMatrix";
import "./MatrixHeader.css";

const MatrixHeaders = () => {
  const { matrix } = useMatrix();
  return (
    <tr>
      {matrix[0].map((_: any, i: number) => (
        <th className="table_header-cell" key={i}>
          Column {i + 1}
        </th>
      ))}
      <th className="table_header-cell">Sum</th>
    </tr>
  );
};

export default MatrixHeaders;
