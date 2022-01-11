import {CompareSharp} from "@material-ui/icons";
import React from "react";

const FilterMenu = (props) => {


  return (


    <>
      {/* <div className="menu-tabs container">
        <div className="menu-tab d-flex justify-content-around"> */}
          {props.catitems.map((ele,indx) => {
            return (
              <>
           
                <button className="btn ms-2 btn-get-started text-center col-md-1 col-lg-1 col-4 mt-2 "key={indx} onClick={()=>props.FilterGallery(ele)} >
              {ele}
                </button>
              
              </>
            );
          })}
        {/* </div>
      </div> */}
    </>
  );
};

export default FilterMenu;
