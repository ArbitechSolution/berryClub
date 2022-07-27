import React from "react";
import "./RandomBox.css";
import comingsoon from "../../media/coming-soon 4.png";
import Group795 from "../../media/Group 795.png"
// import Group795 from "../media/Group 795.png";
import Group796 from "../../media/Group 796.png";
import Group797 from "../../media/Group 797.png"
import Group798 from "../../media/Group 798.png"
import Rectangle42 from "../../media/Rectangle 42.png"
import Rectangle43 from "../../media/Rectangle 43-4.png"
function RandomBox() {
  return (
    <div className="airdrop-image">
      <div className="container">
        <div className="row airdrop-image11 d-flex justify-content-center">
          <div className="col-12 ">
            <img src={Group796} className="image2" />
            <img src={Group795} className="image1" />
            <img src={Group797} className="image3" />
            <img src={Group798} className="image4" />
            <img src={Rectangle42} className="image5" />
            <img src={Rectangle43} className="image6" />
          </div>
          <div className="col-md-12 d-flex justify-content-end mt-4">
            <button className="btn btn-random-buttun">connect</button>
          </div>
          <div className="col-12 d-flex justify-content-center mb-2">
            <img src={comingsoon} className="coming-soon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RandomBox;
