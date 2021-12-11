import React from 'react';
import Galleryimg from './Galleryimg';

const GalleryImgRender=(props)=>{
  const ToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth',
    })
  }
    return (

        <>
    <div className="container">
          <div className="row">
            {props.GalleryImages.map((imgval, index) => {
              return <Galleryimg im={imgval.imgsrc} key={index} ind={index+1} brief={imgval.brief} />;
            })}
          </div>
          <div className="col-xxl-12 text-center my-5">
            <button className="btn btn-outline-info" onClick={ToTop}>GO-TO-TOP</button>
          </div>
        </div>


        </>
    )
}

export default GalleryImgRender;