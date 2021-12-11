import React from "react";
import {useState} from "react";
import { useEffect } from "react";

const Progress = (props) => {
const [length,setlength]=useState("0");
  useEffect(()=>{

    function progresser(value){
      
            console.log(value);
            setInterval(()=>{
            var l=value+"%";
            setlength(l);
            },3000);
        }
  progresser(props.value);
  });

  return (
    <>
      {/* <div classNameName="out">
    <div classNameName="in">

    </div>
</div> */}

      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: length }}
         
        >
          {  length +"%"}
        </div>
      </div>
    </>
  );
};

export default Progress;
