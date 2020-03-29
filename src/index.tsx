import React from "react";
import ReactDOM from "react-dom";

import { WeightedTile, TileWeight } from "./components/Goldenhaus/interfaces";
import Goldenhaus from "./components/Goldenhaus/Goldenhaus";
import "./index.css";

// TODO: Remove in future
const tiles: ReadonlyArray<WeightedTile> = Array.from({ length: 10 }).map(
  () => ({
    component: <div />,
    weight: (Math.floor(Math.random() * 6) + 1) as TileWeight
  })
);

ReactDOM.render(
  <React.StrictMode>
    <Goldenhaus tiles={tiles} />
  </React.StrictMode>,
  document.getElementById("root")
);
