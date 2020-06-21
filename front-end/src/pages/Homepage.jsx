import React from "react";
import { ItemGallery } from "../containers/ItemGallery.jsx";
export const Homepage = () => {
  const createGalleryItems = () => {
      console.log(process.env)
    fetch("https://localhost:3001/api/v1/itemgallery/popularitems")

      .then((res) => res.json())
      .then((res) => {
        console.log(res)

      })
      .catch((err) => {
        console.error(err);
      });
  };
createGalleryItems()

  return (
    <div>
      <ItemGallery />
      <ItemGallery />
    </div>
  );
};
