import React from "react";
import ser1 from "../src/Images/ser1.webp";
import SkillCard from "./SkillCard";
import Skills from "./Skillsdata";
function MySkills() {
  return (
    <>
      <section className="container my-3">
        <div className="main_heading my-5">
          <div className="text-center" data-aos="flip-up">
            <h1>My Skills</h1>
            <hr className="w-25 mx-auto" />
          </div>
        </div>

        <div className="row">

          {
            Skills.map((element,ind)=>{
              return <SkillCard
                      title={element.title}
                      content={element.content}
                      img={element.img}
                      value={element.progress}
                      ind={ind+1}
                      />
            })
          }
       {/* <SkillCard/>
       <SkillCard/>
       <SkillCard/>
       <SkillCard/>
       <SkillCard/>
       <SkillCard/> */}

        </div>
      </section>
    </>
  );
}
export default MySkills;
