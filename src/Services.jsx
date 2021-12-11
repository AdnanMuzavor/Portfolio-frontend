import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import Card from "./Card";
import Serviceitems from "./Servicelist";
function Services() {
  return (
    <>
      <>
        <div className="container">
          <div className="row">
            <div className=" col-12 text-center my-2">
              <h1>Services</h1>
              <hr className="w-25 mx-auto"></hr>
            </div>
            </div>
        
            <div className="row ">

               
            {
                Serviceitems.map((item,ind)=>{
                    return(
                        <>
                        <div className="my-4">
                        <Card
                      
                        key={ind + 1*10}
                        img={item.img}
                        title={item.title}
                        content={item.content}
                        link={item.link}
                        btn={item.btn}
                      />
                    </div>
                        
                       </> 
                       
                      )}
                )
            }

        
        </div>
</div>
      </>
    </>
  );
}

export default Services;




     {/* <div className="col-12">
              <div className="col-md-4  col-12 mx-auto cont">
                <div class="card">
                  <img
                    src={props.img}
                    class="card-img-top img-fluid"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title font-weight-bold">{props.title}</h5>
                    <p class="card-text ">{props.content}</p>
                    <div className="btn-cont text-center d-flex justify-content-center">
                      <a href="#" class="card-btn btn btn-primary anima">
                        Explore More!
                      </a>
                      <a href={props.link} class="card-btn btn btn-primary git">
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
