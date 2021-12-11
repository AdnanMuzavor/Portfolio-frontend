import React from 'react';
import {useState} from 'react';
import ser1 from "../src/Images/ser1.webp";
import Progress from './progressbar';
function SkillCard(props){

    return(
        <>

<div className="col-md-4 col-10 col-xxl-4 mx-auto " data-aos="zoom-in">
            <div class="card mb-3 anima" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={props.img} alt="..." class="img-fluid skill_img" />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title text-center">
                        {props.title}
                    </h5>
                    <p class="card-text one ">
                    {props.content}1234
              
                    </p>
                    <p class="card-text">
                     
                      <Progress value={props.value} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

export default SkillCard;