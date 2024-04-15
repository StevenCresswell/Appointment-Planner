import React from "react";

export const Tile = ( {name, ...rest } ) => {
  const descriptionArray = Object.values(rest)
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {descriptionArray.map((text, index) => (
        <p className="tile" key={index}>{text}</p>
      ))}
    </div>
  );
};
