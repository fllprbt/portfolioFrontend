import React from "react";

import { preprocessTiles } from "../../utils/preprocessTiles";
import { WeightedTile, MappedTile } from "./interfaces";
import { useStyles } from "./Goldehaus.styled";
import { GoldenhausTile } from "./GoldenhausTile";

interface GoldenhausProps {
  tiles: ReadonlyArray<WeightedTile>;
}

/**
 * An opinionated Masonry-like grid, inspired by golden ratio analogies and Bauhaus colors
 */
export const Goldenhaus: React.FC<GoldenhausProps> = ({ tiles }) => {
  const [mappedTiles, setMappedTiles] = React.useState<
    ReadonlyArray<MappedTile>
  >();

  const classes = useStyles();

  React.useEffect(() => {
    setMappedTiles(preprocessTiles(tiles));
  }, [tiles]);

  return (
    <>
      {mappedTiles && (
        <div className={classes.root}>
          {mappedTiles.map((tile, index) => (
            <GoldenhausTile key={index} {...tile} />
          ))}
        </div>
      )}
    </>
  );
};

export default Goldenhaus;
