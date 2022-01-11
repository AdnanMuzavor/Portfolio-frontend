import React from "react";
import { NavLink } from "react-router-dom";

const Page = (props) => {
  return (
    <>
      {/* <section id="header" className="d-flex text" data-aos="fade-left">
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row flexer">
                <div className="col-lg-6 col-md-6 col-10 mx-auto pt-5 pt-lg-0 order-2 order-lg-1 text-center d-flex justify-content-center flex-column ">
                  <h4 className="text-center">
                    {props.title} 
                  </h4>
                  <h6 className='text-center'>Web developer</h6>
                  <p className="my-3 text-center">
                   {props.content}
                  </p>
                  <div className="mt-3 btn-get-started text-center">
                   <NavLink to={props.btnurl} className="btn btn-get-started btn-danger">{props.btn}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img imgcontainer ">
                  <img src={props.img} className="img img-fluid animated " alt="home img"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      <section className="main_heading my-5">
        <div className="text-center">
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row my-5">
            <div
              className="col-lg-6 col-md-6 col-12 col-xxl-6 imgcontainer"
              data-aos="fade-up-right"
            >
              <img src={props.img} className="img-fluid about_img animated" />
            </div>

            <div
              className="mt-4 col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column"
              data-aos="fade-up-left"
            >
              <h4 className="text-center">{props.title}</h4>
              <p>{props.content}</p>
              {/* <button type="button" class="btn btn-outline-info"  data-toggle="tooltip" data-placement="right" title="check more info" >More Info About Me</button> */}
              <div className="mt-3 btn-get-started text-center">
                <NavLink
                  to={props.btnurl}
                  className="btn ms-2 btn-get-started btn-danger"
                >
                  {props.btn}
                </NavLink>
                <NavLink
                  to={props.btnurl}
                  className="btn ms-2 btn-get-started btn-danger"
                >
                  {props.btn2}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
