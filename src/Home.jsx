import React from "react";
import img1 from "../src/Images/MyImg.jpg";
import Page from "./Page";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
        <Page
        title="Hi, my name is Adnan Shah Muzavor."
        content="I am a web developer who is enthusiatic about learning new skills and exploring new trends in technologies.I aspire to learn from all the opportinities I get to hone my skills and get better as I grow in this exciting generation of technology."
        img={img1}
        btn="About Me"
        btn2="My projects"
        btnurl="/"
      />
      <Carousel />
  
    </>
  );
};
export default Home;
