import React from "react";
import {Tile} from "../tile/Tile"

export const TileList = ({datalist}) => {
  return (
    <div>
      {datalist.map(({ name, ...rest }, index) => (
        <Tile key={index} name={name} {...rest} />
      ))}
    </div>
  );
};
