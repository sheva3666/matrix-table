import { Cell, GenerateType } from "../../types/types";

export const generateInitialMatrix = ({ m, n }: GenerateType): Cell[][] => {
  let idCounter = 0;
  return Array.from({ length: m }, () =>
    Array.from({ length: n }, () => ({
      id: idCounter++,
      amount: Math.floor(Math.random() * 900) + 100,
    }))
  );
};

export const getClosestCells = (
  currentHoveredCell: Cell | null,
  matrix: Cell[][]
) => {
  if (!currentHoveredCell) {
    return [];
  }

  const { amount: targetAmount } = currentHoveredCell;
  const allCells = matrix.flat();

  return allCells
    .sort(
      (a, b) =>
        Math.abs(a.amount - targetAmount) - Math.abs(b.amount - targetAmount)
    )
    .slice(0, 6);
};

export const generateRow = ({ m, n }: GenerateType): Cell[] => {
  let idCounter = m * n;
  return Array.from({ length: n }, () => ({
    id: idCounter++,
    amount: Math.floor(Math.random() * 900) + 100,
  }));
};
