import React from "react";
import "./AirDrop.css";
import comingsoon from "../../media/coming-soon 4.png";
import parachute from "../../media/parachute 1.png";
import Converted from "../../media/41345 [Converted] 1.png"
function AirDrop() {
  return (
    <div className="airdrop-image">
      <div className="container">
        <div className="row airdrop-image1 d-flex justify-content-center">
          <div className="col-12 d-flex justify-content-center ">
            <img src={comingsoon} className="coming-soon" />
          </div>

          <div className="col-md-10 col-11 airdrop-every">
            <div className="row d-flex justify-content-center pt-3 pb-3">
              <div
                className="col-md-8 col-10 text-start"
                
              >
                <h3 className="airdrop-h3 ">
                  AIRDROP EVERY MONDAY (UTC:00:00)
                </h3>
                <p className="airdop-p">NFT HOLDERS ONLY</p>
                <div className="row d-flex justify-content-md-between justify-content-center">
                  <div className="col-md-7" >
                    <h4 className="airdrop-h4 mt-2">WHAT’S THE NEXT REWARD ?</h4>
                    <h5 className="airdrop-h5 mt-3">LIVE RAFFLE ON DISCORD</h5>
                    <div className="row">
                      <div className="col-md-4 mt-md-4 mt-2">
                        <div className="d-grid gap-2">
                          <button className="btn btn-airdrop-button" size="lg">
                            BUY NOW
                          </button>
                        </div>
                      </div>
                      <div className="col-md-5 mt-md-4 mt-2">
                        <div className="d-grid gap-2">
                          <button className="btn btn-airdrop-button2" size="lg">
                            JOIN DISCORD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 airdrop-box text-center">
                    <img src={parachute}  className="airdrop-parachute mt-2"/>
                    <p className="airdrop-p1 mt-2">AIRDROP FOR HOLDERS</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img src={Converted} className="airdrop-image3"/>
              </div>
            </div>
          </div>

          <div className="col-md-8 col-10 airdropbox1 "></div>
        </div>
      </div>
    </div>
  );
}

export default AirDrop;
