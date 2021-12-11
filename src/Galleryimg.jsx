import React from "react";
function Galleryimg(props) {
  console.log(props.ind);
  return (
    <>
     {(props.ind%2==0)?
        <div className="col-md-4 col-10 col-xxl-4 mx-auto my-2 "data-aos="fade-left" >
        <div className="Absolute">
      <p className="img-text text-center ">{props.brief}</p>
     
        <img className="img-fluid hover my-2" src={props.im} style={{height:"16rem"}}/>
        </div>  
        <hr/>
      </div>:
      <div className="col-md-4 col-10 col-xxl-4 mx-auto my-2 "data-aos="fade-right" >
      <div className="Absolute">
    <p className="img-text text-center ">{props.brief}</p>
   
      <img className="img-fluid hover my-2" src={props.im} style={{height:"16rem"}}/>
      </div>  
      <hr/>
    </div>
    
    
    
    }
   
   
    </>
  );
}

export default Galleryimg;
