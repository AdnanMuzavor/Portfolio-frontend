import React from 'react';
import {NavLink} from 'react-router-dom';

const Page = (props) => {
    return (
      <>
       
        <section id="header" className="d-flex text" data-aos="fade-left">
          <div className="container-fluid nav_bg ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-10 mx-auto pt-5 pt-lg-0 order-2 order-lg-1 text-center d-flex justify-content-center flex-column ">
                  <h1 className="text-center">
                    {props.title} <strong className="brand-name">WeCoders</strong>
                  </h1>
                  <h2 className="my-3 text-center">
                   {props.content}
                  </h2>
                  <div className="mt-3 btn-get-started text-center">
                   <NavLink to={props.btnurl} className="btn btn-get-started btn-danger">{props.btn}</NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img ">
                  <img src={props.img} className="img-fluid animated " alt="home img"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  export default Page;