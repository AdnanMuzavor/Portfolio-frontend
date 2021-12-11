import {DirectionsSubwaySharp} from "@material-ui/icons";
import React from "react";
import {useState} from "react";
import Media from "./Mediaicons";
function Contact() {


  // const [name,setname]=useState();
  // const [email,setemail]=useState();
  // const [pw,setpw]=useState();
  // const [phno,setphno]=useState();

  const [details,setdetails]=useState({
    fullname:"",
    email:"",
    pw:"",
    phone:"",
    msg:"",
  })
  const [val,setval]=useState();

  const Changetrack=(event)=>{
const {name,value}=event.target;
setdetails((oldval)=>{
  return {
    ...oldval,
    [name]:value,

  }
})
  }

const submitted=()=>{
  if(details.fullname===""||details.msg===""||details.pw===""||details.email===""||details.phone===""){
    alert("Please fill in all the details dear");
  }
  else{
  alert(`your name is : ${details.fullname} , your email is ${details.email} and your phone no is: ${details.phone},Thanks for filling details in.
  your message to us is:" ${details.msg} "`)
 
  setdetails((oldval)=>{
    return {
      ...oldval,
      fullname:"",
      phone:"",
      email:"",
      pw:"",
      msg:"",
    }
  })
} 
  
}

  return (
    <>
      <div className="my-5">
        <h1 className="text-center" data-aos="zoom-out-down">Contact Us</h1>
        <hr className="w-25 mx-auto"/>
      </div>
      <div className="container contact_div">
        <div className="row" data-aos="zoom-out">
          <div className="col-md-6 col-10 mx-auto">



            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label" >
                Full Name
              </label>
              <input
             
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your dull name"
                name="fullname"
                value={details.fullname}
                onChange={Changetrack}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label" >
                Email address
              </label>
              <input
              
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="email"
                value={details.email}
                onChange={Changetrack}
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label" >
               Password
              </label>
              <input
              
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your password"
                name="pw"
                value={details.pw}
                onChange={Changetrack}
              />
            </div>



            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label" >
                Phone 
              </label>
              <input
              
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="mobile number"
                name="phone"
                value={details.phone}
                onChange={Changetrack}
              />
            </div>


            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label" >
              message
              </label>
              <textarea
              
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="msg"
                value={details.msg}
                onChange={Changetrack}

              ></textarea>
            </div>
           <div className="col-12 mx-auto " data-aos="zoom-out">
             <button className="btn btn-outline-primary anima mx-auto " type="submit" onClick={submitted}>
               Submit form
             </button>
           </div>
<Media/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
