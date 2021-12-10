import React from "react";

/**
 * The Gallery is a simple unordered list that maps
 * each image to it's own list item displaying both
 * image id and image title
 */

const Gallery = ({ albumList }) => {
  return (
    <>
      <ul>
        {albumList.map((image) => {
          return (
            <li key={image.id}>
              [{image.id}] {image.title}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Gallery;
