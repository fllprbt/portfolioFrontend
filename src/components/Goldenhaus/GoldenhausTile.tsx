import React from "react";

import { MappedTile } from "./interfaces";
import { useStyles } from "./GoldenhausTile.styled";

interface GoldenhausTileProps extends MappedTile {}

export const GoldenhausTile: React.FC<GoldenhausTileProps> = ({
  component,
  ratio
}) => {
  const [widthSpan, heightSpan] = ratio;
  const classes = useStyles({ widthSpan, heightSpan });

  return <div className={classes.root}>{component}</div>;
};
