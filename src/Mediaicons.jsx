import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
function Media() {
  return (
    <>
      <div className="text-center my-5" data-aos="zoom-in">
          <div className="row">
        <div className="icon col-md-2 col-4 mx-auto anima ">
          <TwitterIcon />
        </div>
        <div className="icon col-md-2 col-4 mx-auto vanima">
          <WhatsAppIcon />
        </div>
        <div className="icon col-md-2 col-4 mx-auto anima">
          <FacebookIcon />
        </div>
        <div className="icon col-md-2 col-4 mx-auto vanima">
          <InstagramIcon />
        </div>
        <div className="icon col-md-2 col-4 mx-auto anima">
          <LinkedInIcon />
        </div>
      </div>
      </div>
    </>
  );
}

export default Media;
