import { ReactElement } from "react";

export type TileWeight = 1 | 2 | 3 | 4 | 5 | 6;
type FibonacciBaseNumbers = 1 | 2 | 3 | 5 | 8 | 13;

export type FibonacciRatioTuple = [FibonacciBaseNumbers, FibonacciBaseNumbers];

interface Tile {
  component: ReactElement;
}

export interface WeightedTile extends Tile {
  weight: TileWeight;
}

export interface MappedTile extends Tile {
  ratio: FibonacciRatioTuple;
}
