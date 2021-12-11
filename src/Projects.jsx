import React from "react";
import img1 from "../src/Images/img1.webp";
import ser5 from "../src/Images/ser5.webp";
import CardData from "./CardData";
import Card from "./Card";
import { useState } from "react";
import { Moredata } from "./CardData";
import { useEffect } from "react";
function MyProjects() {
  const [view, setview] = useState("");
  const [count, setcount] = useState(0);
  // const [target,settarget]=useState();


  
  // useEffect(() => {
  //   setInterval(willfinal, 100);
  // }, [final]);
useEffect(()=>{
  torerender();
})



const torerender=()=>{
  const finalised = document.querySelectorAll(".counter");
  console.log(finalised);
  finalised.forEach((ele) => {
  
  
    console.log(ele.innerHTML);
    const updateval=()=>{
      const targetval=  Number(ele.getAttribute("datatarget"));
      const initial=Number(ele.innerHTML);
      console.log(initial+" "+targetval);
      const incr=1;
      // const value=Math.round(initial+incr);
      // console.log(value);
      // console.log(typeof(value));
      // const display=value.toString(2);
      // console.log(typeof(display));
     
      if(initial<targetval){
        ele.innerHTML=`${initial+incr}`;
    
        setTimeout(updateval, 100);
      }
      else{
        ele.innerHTML=`${targetval}`;
      }
    }
  
    updateval();



    });
  }












//CORRECTLY WORKING

  // var final = 0;
  // var update = 0;








  // useEffect(() => {
  //   setInterval(incr, 100);
  // }, [final]);



  // const incr = () => {
  //   if (update < 12) {
  //     update = update + 1;
  //     setcount(update);
  //     console.log("in if:" + update);
  //     // setfinal(update);
  //     // console.log("final changed:"+final);
  //   } else {
  //     // //  setfinal(final+1);
  //     setcount(12);
  //     //   // console.log("in else:"+final);
  //     //update=0;
  //     final = 1;
  //   }
  // };



  const buttonmore = document.querySelector(".appear");
  const disable = document.querySelector(".disable");
  const superb = document.querySelector(".super");

  const Viewmore = () => {
    setview("More");
  };
  const Viewless = () => {
    setview("");
  };
  // useEffect(() => {
  //   const incr = () => {
  //     while (count <= 12) {
  //       setInterval(() => {
  //         setcount(count + 1);
  //       }, 1000);
  //     }
  //   };
  //   incr();
  // });

  // const counter = document.getElementsByClassName("counter");
  // //After doing this we have got all tags with counter as class
  // //Assume it to be in an array form

  // counters.forEach((counter) => {
  //   console.log(counter); //just to check if counter is tracked or not
  //   counter.innerHTML = 0; //Putting/displaying 0 initially

  // const updatecounter = () => {
  //   const targetCount = 12;
  //   //This will store in targetCount variable the target/ number we want to reach to/increment to
  //   //But it's of string type but to perform increment operation it should be number.So we add + sign infront/number()method.
  //   const startingcount = count;
  //   const incr = targetCount / 100;
  //   if (startingcount < targetCount) {
  //     // setcount(startingcount + incr);
  //     console.log("val"+startingcount+"inr"+incr);
  //     setTimeout(updatecounter, 15);
  //   } else {
  //     counter.innerHTML = targetCount;
  //   }
  // };
  // updatecounter();
  // });
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center" data-aos="fade-down">My Projects</h1>
        <hr className="w-25 mx-auto"></hr>
        <div className="my-4 row">
          <div className=" col-lg-4 col-md-4 col-4 " data-aos="zoom-out">
            {/* <i className="fas fa-mug-hot fa-3x mug d-flex justify-content-center"></i> */}
            <i class="fa fa-th fa-3x  mug d-flex justify-content-center" aria-hidden="true"></i>
            
            <h1 className="counter  text-center " datatarget="9">
              0
            </h1>
           
            <hr className="w-25 mx-auto"></hr>
            <h2 className="text-center">APPS</h2>
            <hr className="w-25 mx-auto"></hr>
          </div>

          <div className=" col-lg-4 col-md-4 col-4 " data-aos="zoom-out">
            <i className="fas fa-mug-hot fa-3x mug d-flex justify-content-center"></i>
            <h1 className=" counter text-center" datatarget="4">
              0
            </h1>
            <hr className="w-25 mx-auto"></hr>
            <h2 className="text-center">WEBSITES</h2>
            <hr className="w-25 mx-auto"></hr>
          </div>

          <div className=" col-lg-4 col-md-4 col-4 " data-aos="zoom-out">
            {/* <i className="fas fa-mug-hot fa-3x mug d-flex justify-content-center"></i> */}
            <i class="fa fa-thumbs-up fa-3x mug d-flex justify-content-center" aria-hidden="true"></i>
            <h1 className=" counter text-center" datatarget="18">
            0
            </h1>
            <hr className="w-25 mx-auto"></hr>
            <h2 className="text-center">EFFECTS</h2>
            <hr className="w-25 mx-auto"></hr>
          </div>
        </div>
      </div>
      <div className="container-fluid mb-5 " >
        <div className="row ">
          <div className="col-10 mx-auto">
            <div className="row gy-4 ">
              {CardData.map((item, ind) => {
                console.log(item.imgsrc);
                return (
                  <Card
                    key={ind + 1}
                    img={item.imgsrc}
                    title={item.titletxt}
                    content={item.contenttxt}
                    link={item.link}
                    btn="Explore More!"
                  />
                );
              })}
            </div>
          </div>
          <div className="appear super">
            <div className="col-xxl-12 text-center my-5">
              <button className="btn btn-outline-info" onClick={Viewmore}>
                check more
              </button>
            </div>
          </div>
          {view === "" ? null : (
            <>
              <div className="col-10 mx-auto">
                <div className="row gy-4 ">
                  {Moredata.map((item, ind) => {
                    console.log(item.imgsrc);
                    return (
                      <Card
                        key={ind + 1}
                        img={item.imgsrc}
                        title={item.titletxt}
                        content={item.contenttxt}
                        link={item.link}
                      />
                    );
                  })}
                </div>
              </div>

              <div className=" appear ">
                <div className="col-xxl-12 text-center my-5">
                  <button className="btn btn-outline-info" onClick={Viewless}>
                    check less
                  </button>
                </div>
              </div>
              {/* {view==="More"?superb.classList.add("disable"):
           null}
            {view===""? superb.classList.remove("disable"):null} */}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default MyProjects;
