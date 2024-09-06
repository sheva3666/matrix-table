import { createContext } from "react";
import { MatrixContextType } from "../types/types";

const MatrixContext = createContext<MatrixContextType | null>(null);

export default MatrixContext;
