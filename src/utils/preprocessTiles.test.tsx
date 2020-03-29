import React from "react";

import { preprocessTiles } from "./preprocessTiles";
import { WeightedTile, MappedTile } from "../components/Goldenhaus/interfaces";

const component = <div />;

const mockTiles: ReadonlyArray<WeightedTile> = [
  { component, weight: 1 },
  { component, weight: 2 },
  { component, weight: 3 },
  { component, weight: 4 },
  { component, weight: 5 },
  { component, weight: 6 }
];

const preproccesedTiles: ReadonlyArray<MappedTile> = [
  { component, ratio: [1, 1] },
  { component, ratio: [2, 1] },
  { component, ratio: [3, 2] },
  { component, ratio: [5, 3] },
  { component, ratio: [8, 5] },
  { component, ratio: [13, 8] }
];

describe("preprocessTiles", () => {
  it("shapes the tiles array", () => {
    expect(preprocessTiles(mockTiles)).toMatchObject(preproccesedTiles);
  });
});
