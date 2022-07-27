import React from "react";
import "./AirDrop.css";
import comingsoon from "../../media/coming-soon 4.png";
import parachute from "../../media/parachute 1.png";
import Converted from "../../media/41345 [Converted] 1.png";
import Converted1 from "../../media/41348 [Converted] 1.png";
function AirDrop() {
  return (
    <div className="airdrop-image">
      <div className="container">
        <div className="row airdrop-image1 d-flex justify-content-center">
          <div className="col-12 d-flex justify-content-center mt-3 mb-2">
            <img src={comingsoon} className="coming-soon" />
          </div>

          <div className="col-md-10 col-11 airdrop-every">
            <div className="row d-flex justify-content-center align-items-center pt-3 pb-3">
              <div className="col-md-8 col-10 text-start ">
                <h3 className="airdrop-h3 ">
                  AIRDROP EVERY MONDAY (UTC:00:00)
                </h3>
                <p className="airdop-p">NFT HOLDERS ONLY</p>
                <div className="row d-flex justify-content-md-between justify-content-center">
                  <div className="col-md-7">
                    <h4 className="airdrop-h4 mt-2">
                      WHAT’S THE NEXT REWARD ?
                    </h4>
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
                  <div className="col-md-3 airdrop-box text-center mt-md-1 mt-3">
                    <img src={parachute} className="airdrop-parachute mt-2" />
                    <p className="airdrop-p1 mt-2">AIRDROP FOR HOLDERS</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center">
                <img src={Converted} className="airdrop-image3 mt-md-1 mt-4" />
              </div>
            </div>
          </div>

          <div className="col-md-9 col-11 airdropbox1 mb-4 mt-4">
            <div className="row ">
              <div className="col-md-4 d-flex justify-content-center align-items-center mt-3 mb-3">
                <img src={Converted1} />
              </div>
              <div className="col-md-8 mt-3">
                <h3 className="airdrop-h3 ms-md-4">Last AIRDROP:</h3>
                <div className="" >
                  <ul className="airdrop-ul " style={{ border: "2px solid transparent " }}>
                    <li className="mt-2">
                      <div id="airdropmini-box">#1000</div>
                      <span className="airdrop-span32">&nbsp;IPad Mini</span>
                    </li>
                    <li className="mt-2">
                      <div id="airdropmini-box">#2000</div>
                      <span className="airdrop-span32">&nbsp;Nintendo Switch</span>
                    </li>
                    <li className="mt-2">
                      <div id="airdropmini-box">#3000</div>
                      <span className="airdrop-span32">&nbsp;Nintendo Switch</span>
                    </li>
                    <li className="mt-2">
                      <div id="airdropmini-box">#4000</div>
                      <span className="airdrop-span32">&nbsp;Playstation 5</span>
                    </li>
                    <li className="mt-2">
                      <div id="airdropmini-box">#5000</div>
                      <span className="airdrop-span32">&nbsp;Drone MAVIC mini 2 white</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AirDrop;
