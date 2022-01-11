import React from "react";
import img2 from "../src/Images/img3.webp";
import Page from "./Page";
import { NavLink } from "react-router-dom";
import MySkills from "./MySkills";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getmessages } from "./Actions/Messageaction";
function About() {
  // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //   return new bootstrap.Tooltip(tooltipTriggerEl)
  // })
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmessages());
  }, []);

  return (
    <>
      {/* <Page
      title="How it all started 
      with"
      content="We formed a helpful and wonderful team of developers"
      img={img2}
      btn="Contact us"
      btnurl="/contact"
      /> */}
      <section className="main_heading my-5">
        <div className="text-center">
          <h1 className="" data-aos="fade-down">
            About
          </h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row my-5">
            <div
              className="col-lg-6 col-md-6 col-12 col-xxl-6"
              data-aos="fade-up-right"
            >
              <img src={img2} className="img-fluid about_img animated" />
            </div>

            <div
              className="col-lg-6 col-md-6 col-12 col-xxl-6 d-flex justify-content-center align-items-start flex-column"
              data-aos="fade-up-left"
            >
              <h1 className="text-center">My Journey</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                similique, expedita voluptate ducimus neque nobis quaerat
                aspernatur libero explicabo dicta corrupti, ratione hic
                blanditiis suscipit perspiciatis. Aut fugit iste molestias
                architecto voluptatibus error vitae voluptas, quis repellat
                laboriosam aliquid possimus placeat voluptatem velit sunt eum
                sint repellendus? Consequatur amet odio pariatur aperiam
                assumenda repellat, doloremque animi fugit atque quidem,
                perferendis consequuntur in natus. Maiores aliquam aperiam magni
                commodi quas sit ullam voluptatem at maxime praesentium sed quam
                alias deleniti, accusantium voluptatum rerum consequatur nam,
                cum nihil itaque totam minima, a debitis! Qui nesciunt illo sunt
                laboriosam ratione impedit provident quos.
              </p>
              <div className="mt-3 btn-get-started text-center">
                <NavLink
                  to={`www.google.com`}
                  className="btn ms-2 btn-get-started btn-danger"
                >
                  My projects
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MySkills />
    </>
  );
}
export default About;
