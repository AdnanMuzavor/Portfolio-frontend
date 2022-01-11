import React from "react";
import { useState } from "react";
import ser1 from "../src/Images/ser1.webp";
import GalleryImages from "./GalleryImages";
import Galleryimg from "./Galleryimg";
import FilterMenu from "./Filtermenu";
import GalleryImgRender from "./GalleryImgComp";
import {Category} from "@material-ui/icons";
function Gallery() {
  const category = [
    ...new Set(
      GalleryImages.map((img) => {
        return img.category;
      })
    ),"All"
  ];
const ALLitems=category;
  const [items, setitems] = useState(GalleryImages);
  const [catitems, setcatitems] = useState(category);

  const filterGallery = (catgory) => {
    if(catgory==="All"){

      setitems(GalleryImages);
      return;
    }
   
    console.log("category  chosen:"+catgory);
    const updatedItems = GalleryImages.filter((ele) => {
      return ele.category === catgory;
    });
    console.log(updatedItems);
    setitems(updatedItems);
  
  };

  console.log(category);
  return (
    <>
      <section className="my-3 pt-5 ">
        <div className="text-center">
          <h1 className="display-4">My Project Gallery</h1>
          <hr className="w-25 mx-auto"></hr>
        </div>


        <div className="my-4 mx-1 row flexer">
          <FilterMenu catitems={catitems} FilterGallery={filterGallery} />
        </div>

        
        <GalleryImgRender GalleryImages={items} />
      </section>
    </>
  );
}
export default Gallery;
