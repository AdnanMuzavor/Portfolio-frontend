import React from 'react';
import {useState} from 'react';
import ser1 from "../src/Images/ser1.webp";
import Progress from './progressbar';
function SkillCard(props){

    return(
        <>

<div className="col-md-2 col-5 col-xxl-3 mx-auto " data-aos="zoom-in">
            <div class="card mb-3 anima" style={{ maxWidth: "540px" }}>
              <div class="row g-0 flexer">
                <div class="col-md-4 flexer">
                  <img src={props.img} alt="..." class="img-fluid skill_img" />
                </div>
                <div class="col-md-8 flexer">
                  <div class="card-body">
                    <h5 class="card-title text-center">
                        {props.title}
                    </h5>
                   
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default SkillCard;