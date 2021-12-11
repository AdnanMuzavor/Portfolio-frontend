import {CompareSharp} from "@material-ui/icons";
import React from "react";

const FilterMenu = (props) => {


  return (


    <>
      {/* <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around"> */}
          {props.catitems.map((ele,indx) => {
            return (
              <div className=" text-center col-md-3 col-lg-3 col-5 ">
                <button className="btn ele btn-block "key={indx} onClick={()=>props.FilterGallery(ele)} >
                  <h3 className="display">{ele}</h3>
                </button>
              </div>
            );
          })}
        {/* </div>
      </div> */}
    </>
  );
};

export default FilterMenu;
