import React from "react";
import img1 from "../src/Images/img1.webp";
import Page from "./Page";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
    <Carousel/>
      <Page
      title="Grow your business with"
      content=" We are the team of talented developers making websites"
      img={img1}
      btn="Get started"
      btnurl="/"
      />

    </>
  );
};
export default Home;
