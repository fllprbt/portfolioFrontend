import {
  TileWeight,
  FibonacciRatioTuple,
  WeightedTile
} from "../components/Goldenhaus/interfaces";

const weightToFibonacciRatio: Record<TileWeight, FibonacciRatioTuple> = {
  1: [1, 1],
  2: [2, 1],
  3: [3, 2],
  4: [5, 3],
  5: [8, 5],
  6: [13, 8]
};

export const preprocessTiles = (tiles: ReadonlyArray<WeightedTile>) =>
  tiles.map(({ component, weight }) => ({
    component,
    ratio: weightToFibonacciRatio[weight]
  }));
