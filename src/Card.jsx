import React from "react";
import img1 from "../src/Images/img1.webp";
import GitHubIcon from '@material-ui/icons/GitHub';
function Card(props) {
  return (
    <>
      <div className="col-md-4  col-12 mx-auto cont" data-aos="zoom-in"> 
        <div class="card" >
          <img src={props.img} class="img card-img-top img-fluid" alt="..." />
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{props.title}</h5>
          {
            window.innerWidth>360?
            <p class="card-text ">
            {props.content.slice(0,100)}
          </p>:null
          }
           
           <div className="btn-cont text-center d-flex justify-content-center">
            <a to={props.link} className={`card-btn btn btn-primary ${window.innerWidth>360?" anima":""}`}>
            {props.btn}
            </a>
            <a to={props.link} class="card-btn btn btn-primary git">
              <GitHubIcon/>
            </a>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}

{/* <div class="card" >
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

export default Card;
