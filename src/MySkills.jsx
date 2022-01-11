import React, { useState } from "react";
import ser1 from "../src/Images/ser1.webp";
import SkillCard from "./SkillCard";
import Skills from "./Skillsdata";
import Axios from "axios";

function MySkills() {
  const [Image, setImage] = useState("");
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState("");
  const [postskill, setpostskill] = useState({
    content: "",
    category: "",
    result: "",
  });

  const ContentHandler = (event) => {
    const { name, value } = event.target;
    setpostskill((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append("image", file);
    setLoadingUpload(true);
    try {
      const { data } = await Axios.post("/api/upload", bodyFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImage(data);
      setpostskill((prev) => {
        return { ...prev, result: data };
      });
      console.log(data);
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const submiter =async () => {
    console.log(postskill)
    try {
      const addpost = await fetch("/api/mydata/postdata", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(postskill),
      });
      const postadded=await addpost.json();
      console.log(postadded)
    } catch (e) {
      console.log(e);
    }
  };
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
          {Skills.map((element, ind) => {
            return (
              <SkillCard
                title={element.title}
                content={element.content}
                img={element.img}
                value={element.progress}
                ind={ind + 1}
              />
            );
          })}

          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Content
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter your content"
              name="content"
              value={postskill.content}
              onChange={ContentHandler}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Category
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="category"
              value={postskill.category}
              onChange={ContentHandler}
            />
          </div>
          <label htmlFor="imageFile">Image File</label>
          <input
            type="file"
            id="imageFile"
            label="Choose Image"
            onChange={uploadFileHandler}
          ></input>
               <button
                    className="btn btn-outline-primary anima mx-auto "
                    type="submit"
                    onClick={submiter}
                  >
                    Submit form
                  </button>
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
