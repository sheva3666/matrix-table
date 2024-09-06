import { useContext } from "react";
import MatrixContext from "../contexts/MatrixContext";

export default () => {
  const context = useContext(MatrixContext);
  if (!context)
    throw new Error("useMatrix must be used within a MatrixProvider");
  return context;
};
