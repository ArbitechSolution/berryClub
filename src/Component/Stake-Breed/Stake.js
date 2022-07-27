import React from "react";
import "./Stake.css";
import Group796 from "../../media/Group 796.png";
import Group797 from "../../media/Group 797.png";
import Group798 from "../../media/Group 798.png";
import Rectangle42 from "../../media/Rectangle 42.png";
import Rectangle43 from "../../media/Rectangle 43-4.png";
import comingsoon from "../../media/coming-soon 4.png";
import Group795 from "../../media/Group 795.png";
function Stake() {
  return (
    <div className="airdrop-image">
      <div className="container">
        <div className="row airdrop-image11 d-flex justify-content-center">
          <div className="col-md-12 col-11">
            <img src={Group796} className="image2" />
            <img src={Group795} className="image1" />
            <img src={Group797} className="image3" />
            <img src={Group798} className="image4" />
            <img src={Rectangle42} className="image55" />
            <img src={Rectangle43} className="image66" />
          </div>
          <div className="col-md-12 col-11 d-flex justify-content-end mt-4">
            <button className="btn btn-random-buttun">connect</button>
          </div>
          <div className="col-12 d-flex justify-content-center mb-2">
            <img src={comingsoon} className="coming-soon" />
          </div>
          <div className="col-12 d-flex justify-content-center mb-2">
            <h3 className="randombox-he">My NFT</h3>
          </div>
          <div className="row">
            <div className="col-md-8 d-flex flex-row mt-3 mb-4">
              <div className="col-md-2 me-3">
                <div className="d-grid gap-2">
                  <button className="btn btn-stake" size="lg">
                    Stake All
                  </button>
                </div>
              </div>
              <div className="col-md-3">
                <div className="d-grid gap-2">
                  <button className="btn btn-stake1" size="lg">
                    Claim all Reward
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="col-md-12 d-flex flex-row justify-content-between mt-md-1 mt-4">
                <span className="random-Box-span1">BCB Balance:</span>
                <span className="random-Box-span1">0.00</span>
              </div>
              <div className="col-md-12 d-flex flex-row justify-content-between mt-3">
                <span className="random-Box-span1">BCASH Balance:</span>
                <span className="random-Box-span1">0.00</span>
              </div>
              <div className="col-md-12 d-flex flex-row justify-content-between mt-3">
                <span className="random-Box-span1">Klay Reward:</span>
                <span className="random-Box-span1">0.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stake;
