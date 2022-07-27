import React, { useState } from "react";
import "./RandomBox.css";
import comingsoon from "../../media/coming-soon 4.png";
import Group795 from "../../media/Group 795.png";
// import Group795 from "../media/Group 795.png";
import { IoMdClose } from "react-icons/io";
import Group796 from "../../media/Group 796.png";
import Group797 from "../../media/Group 797.png";
import Group798 from "../../media/Group 798.png";
import Rectangle42 from "../../media/Rectangle 42.png";
import Rectangle43 from "../../media/Rectangle 43-4.png";
import random1 from "../../media/random 1.png";
import Rectangle45 from "../../media/Rectangle 45.png";
import Rectangle46 from "../../media/Rectangle 46.png";
import girls950 from "../../media/950 1.png";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import modalpcs1 from "../../media/01 1.png";
import modalpcs2 from "../../media/02 1.png"
import modalpcs3 from "../../media/03 1.png"
import modalpcs4 from "../../media/04 1.png"
import modalpcs5 from "../../media/05 1.png";
import modalpcs6 from "../../media/06 1.png";
import modalpcs7 from "../../media/07 1.png"
function RandomBox() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShowOne, setModalShowOne] = useState(false)
  const [modalShowTwo, setModalShowTwo] = useState(false)
  const [modalShowThree, setModalShowThree] = useState(false)
  const [modalShowFour, setModalShowFour] = useState(false)
  const [modalShowFive, setModalShowFive] = useState(false)
  const [modalShowSix, setModalShowSix] = useState(false)
  
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
            <h3 className="randombox-he">RANDOM BOX</h3>
          </div>
          <div className="row d-flex justify-content-md-evenly justify-content-center mb-5 mt-3">
            <div className="col-md-7 col-11 randomBox-bx1">
              <div className="row   pt-5 pb-5">
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <img src={random1} className="mybox-image" />
                </div>
              </div>
              <div className="row ">
                <div className="col-12 p-2 steryboxes">
                  <div className="row d-flex justify-content-around pt-3">
                    <div className="col-xl-1 col-6  d-flex flex-row justify-content-center">
                      <div>
                        <RiCheckboxBlankCircleFill
                          size={12}
                          style={{ color: "#45AE3C" }}
                        />
                      </div>
                      <div className="">
                        <p className="stery-span ps-2">45.0%</p>
                        <p className="stery-span1 ps-2 ">Berry</p>
                      </div>
                    </div>
                    <div className="col-xl-1 col-6 d-flex flex-row justify-content-center">
                      <div>
                        <RiCheckboxBlankCircleFill
                          size={12}
                          style={{ color: "#AE653C" }}
                        />
                      </div>
                      <div className="">
                        <p className="stery-span ps-2">27.9%</p>
                        <p className="stery-span1 ps-2 ">Common</p>
                      </div>
                      &nbsp;&nbsp;
                    </div>

                    <div className="col-xl-1 col-6 d-flex flex-row justify-content-center ">
                      <div>
                        <RiCheckboxBlankCircleFill
                          size={12}
                          style={{ color: "#3489D8" }}
                        />
                      </div>
                      <div className="">
                        <p className="stery-span ps-2">15.0%</p>
                        <p className="stery-span1 ps-2 ">Uncommon</p>
                      </div>
                    </div>
                    <div className="col-xl-1 col-6 d-flex flex-row justify-content-center  mt-md-0 mt-3">
                      <div>
                        <RiCheckboxBlankCircleFill
                          size={12}
                          style={{ color: "#903CAE" }}
                        />
                      </div>
                      <div className="">
                        <p className="stery-span ps-2">12.0%</p>
                        <p className="stery-span1 ps-2 ">Rare</p>
                      </div>
                    </div>
                    <div className="col-xl-1 col-6 d-flex flex-row justify-content-center  mt-md-0 mt-3">
                      <div>
                        <RiCheckboxBlankCircleFill
                          size={12}
                          style={{ color: "#CC3E93" }}
                        />
                      </div>
                      <div className="">
                        <p className="stery-span ps-2">0.06%</p>
                        <p className="stery-span1 ps-2 ">Epic</p>
                      </div>
                    </div>
                    <div className="col-xl-1 col-6 d-flex flex-row justify-content-center mt-md-0 mt-3">
                      <div>
                        <RiCheckboxBlankCircleFill
                          size={12}
                          style={{ color: "#AE8E3C" }}
                        />
                      </div>
                      <div className="">
                        <p className="stery-span ps-2">0.003%</p>
                        <p className="stery-span1 ps-2 ">Legendary</p>
                      </div>
                    </div>
                    <div className="col-xl-1 col-6 d-flex flex-row justify-content-center mt-md-0 mt-3">
                      <div>
                        <RiCheckboxBlankCircleFill
                          size={12}
                          style={{ color: "#AE8E3C" }}
                        />
                      </div>
                      <div className="">
                        <p className="stery-span ps-2">0.01%</p>
                        <p className="stery-span1 ps-2 ">Mythic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-11 randomBox-box11  mt-md-1 mt-4">
              <div className="row">
                <div className="col-md-12 d-flex flex-row justify-content-between randomBox-miniBox pt-3 pb-3">
                  <span className="random-Box-span">Price:</span>
                  <span className="random-Box-span">500 BCB</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex flex-row justify-content-between randomBox-miniBox1 pt-3 pb-3">
                  <div className="col-6">
                    <p className="random-pp">Your Balance</p>
                  </div>
                  <div className="col-6">
                    <div className="col-md-12 d-flex flex-row justify-content-between ">
                      <span className="random-Box-span1">Price:</span>
                      <span className="random-Box-span1">0.00</span>
                    </div>
                    <div className="col-md-12 d-flex flex-row justify-content-between">
                      <span className="random-Box-span1">BCASH Balance:</span>
                      <span className="random-Box-span1">0.00</span>
                    </div>
                    <div className="col-md-12 d-flex flex-row justify-content-between">
                      <span className="random-Box-span1">Klay Reward:</span>
                      <span className="random-Box-span1">0.00</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 d-flex flex-row justify-content-center flex-column">
                <p className="random-pp1">Random Box Amount</p>
                <div className="d-flex flex-row justify-content-center mt-4">
                  <div className="random-box21 d-flex justify-content-center align-items-center me-4">
                    <HiOutlineMinusSm style={{ color: "white" }} />
                  </div>
                  <div className="random-box22 d-flex justify-content-center align-items-center">
                    1
                  </div>
                  <div className="random-box21 d-flex justify-content-center align-items-center ms-4">
                    <AiOutlinePlus style={{ color: "white" }} />
                  </div>
                </div>
                <span className="random-span-box mt-2">Max 5</span>
              </div>
              <div className="d-flex justify-content-center pt-4">
                <div className="col-11 randomBox-boes1 d-flex flex-row justify-content-between ps-2 pe-2 pt-3 pb-3">
                  <span className="randomBox-span11">Total Cost:</span>
                  <span className="randomBox-span11">0 BCB</span>
                </div>
              </div>
              <div className="row d-flex justify-content-center pt-4">
                <div className="col-md-5 col-11">
                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-raandom-button"
                      size="lg"
                      onClick={() => setModalShowSix(true)}
                    >
                      BUY
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {modalShow ? (
            <Modal
              show={modalShow}
              onHide={() => setModalShow(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <Modal.Body
                className="modal-img"
                style={{
                  background: "rgb(12,30,37)",
                  border: "5px solid #2EC2E1",
                  borderRadius: "5px",
                  position: "relative",
                  // Width: "900px"
                }}
              >
                <img src={Group795} className="image1" />
                <img src={Group796} className="image2" />
                <img src={Group797} className="image3" />
                <img src={Group798} className="image4" />
                <img src={Rectangle42} className="image5" />
                <img src={Rectangle43} className="image6" />
                <div
                  className="row staking d-flex justify-content-center flex-wrap flex-row"
                  id="presale"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 d-flex justify-content-end">
                      <IoMdClose
                        onClick={() => setModalShow(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                      <img src={Rectangle45} className="mintImage1" />
                      <img src={Rectangle46} className="mintImage2" />
                      <span className="mintImage3">CONGRATULATION!</span>
                    </div>
                  </div>
                  <div
                    className="row d-flex justify-content-center text-center mt-4 "
                    
                  >
                    <span className="dutch-span1">
                      You got a Berry Girl card now !
                    </span>
                    <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                      <img src={modalpcs1} className="dutch-img23" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-4">
                    <div className="col-md-5 col-11">
                      <div className="d-grid gap-2">
                        <button className="btn btn-dutch" size="lg">
                          Claim Reward
                        </button>
                      </div>
                    </div>
                  </div>
                  <span className="random-box-modal-span text-center" style={{ marginBottom: "50px" }}>*3% of the purchase amount will be cashbacked with berry cash</span>
                </div>
              </Modal.Body>
            </Modal>
          ) : (
            <></>
          )}



{modalShowOne ? (
            <Modal
              show={modalShowOne}
              onHide={() => setModalShowOne(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <Modal.Body
                className="modal-img"
                style={{
                  background: "rgb(12,30,37)",
                  border: "5px solid #2EC2E1",
                  borderRadius: "5px",
                  position: "relative",
                  // Width: "900px"
                }}
              >
                <img src={Group795} className="image1" />
                <img src={Group796} className="image2" />
                <img src={Group797} className="image3" />
                <img src={Group798} className="image4" />
                <img src={Rectangle42} className="image5" />
                <img src={Rectangle43} className="image6" />
                <div
                  className="row staking d-flex justify-content-center flex-wrap flex-row"
                  id="presale"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 d-flex justify-content-end">
                      <IoMdClose
                        onClick={() => setModalShowOne(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                      <img src={Rectangle45} className="mintImage1" />
                      <img src={Rectangle46} className="mintImage2" />
                      <span className="mintImage3">CONGRATULATION!</span>
                    </div>
                  </div>
                  <div
                    className="row d-flex justify-content-center text-center mt-4 "
                    
                  >
                    <span className="dutch-span1">
                    You got a 200 $BCB Token now !
                    </span>
                    <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                      <img src={modalpcs2} className="dutch-img23" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-4">
                    <div className="col-md-5 col-11">
                      <div className="d-grid gap-2">
                        <button className="btn btn-dutch" size="lg">
                          Claim Reward
                        </button>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </Modal.Body>
            </Modal>
          ) : (
            <></>
          )}



{modalShowTwo ? (
            <Modal
              show={modalShowTwo}
              onHide={() => setModalShowTwo(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <Modal.Body
                className="modal-img"
                style={{
                  background: "rgb(12,30,37)",
                  border: "5px solid #2EC2E1",
                  borderRadius: "5px",
                  position: "relative",
                  // Width: "900px"
                }}
              >
                <img src={Group795} className="image1" />
                <img src={Group796} className="image2" />
                <img src={Group797} className="image3" />
                <img src={Group798} className="image4" />
                <img src={Rectangle42} className="image5" />
                <img src={Rectangle43} className="image6" />
                <div
                  className="row staking d-flex justify-content-center flex-wrap flex-row"
                  id="presale"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 d-flex justify-content-end">
                      <IoMdClose
                        onClick={() => setModalShowTwo(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                      <img src={Rectangle45} className="mintImage1" />
                      <img src={Rectangle46} className="mintImage2" />
                      <span className="mintImage3">CONGRATULATION!</span>
                    </div>
                  </div>
                  <div
                    className="row d-flex justify-content-center text-center mt-4 "
                    
                  >
                    <span className="dutch-span1">
                    You got a Berry Girl NFT Card now !
                    </span>
                    <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                      <img src={modalpcs3} className="dutch-img23" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-4">
                    <div className="col-md-5 col-11">
                      <div className="d-grid gap-2">
                        <button className="btn btn-dutch" size="lg">
                          Claim Reward
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          ) : (
            <></>
          )}



{modalShowThree ? (
            <Modal
              show={modalShowThree}
              onHide={() => setModalShowThree(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <Modal.Body
                className="modal-img"
                style={{
                  background: "rgb(12,30,37)",
                  border: "5px solid #2EC2E1",
                  borderRadius: "5px",
                  position: "relative",
                  // Width: "900px"
                }}
              >
                <img src={Group795} className="image1" />
                <img src={Group796} className="image2" />
                <img src={Group797} className="image3" />
                <img src={Group798} className="image4" />
                <img src={Rectangle42} className="image5" />
                <img src={Rectangle43} className="image6" />
                <div
                  className="row staking d-flex justify-content-center flex-wrap flex-row"
                  id="presale"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 d-flex justify-content-end">
                      <IoMdClose
                        onClick={() => setModalShowThree(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                      <img src={Rectangle45} className="mintImage1" />
                      <img src={Rectangle46} className="mintImage2" />
                      <span className="mintImage3">CONGRATULATION!</span>
                    </div>
                  </div>
                  <div
                    className="row d-flex justify-content-center text-center mt-4 "
                    
                  >
                    <span className="dutch-span1">
                    You got a Awesomel NFT Card now !
                    </span>
                    <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                      <img src={modalpcs4} className="dutch-img23" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-4">
                    <div className="col-md-5 col-11">
                      <div className="d-grid gap-2">
                        <button className="btn btn-dutch" size="lg">
                          Claim Reward
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          ) : (
            <></>
          )}

{modalShowFour ? (
            <Modal
              show={modalShowFour}
              onHide={() => setModalShowFour(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <Modal.Body
                className="modal-img"
                style={{
                  background: "rgb(12,30,37)",
                  border: "5px solid #2EC2E1",
                  borderRadius: "5px",
                  position: "relative",
                  // Width: "900px"
                }}
              >
                <img src={Group795} className="image1" />
                <img src={Group796} className="image2" />
                <img src={Group797} className="image3" />
                <img src={Group798} className="image4" />
                <img src={Rectangle42} className="image5" />
                <img src={Rectangle43} className="image6" />
                <div
                  className="row staking d-flex justify-content-center flex-wrap flex-row"
                  id="presale"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 d-flex justify-content-end">
                      <IoMdClose
                        onClick={() => setModalShowFour(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                      <img src={Rectangle45} className="mintImage1" />
                      <img src={Rectangle46} className="mintImage2" />
                      <span className="mintImage3">CONGRATULATION!</span>
                    </div>
                  </div>
                  <div
                    className="row d-flex justify-content-center text-center mt-4 "
                    
                  >
                    <span className="dutch-span1">
                    You got a Booster NFT Card now !
                    </span>
                    <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                      <img src={modalpcs5} className="dutch-img23" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-4">
                    <div className="col-md-5 col-11">
                      <div className="d-grid gap-2">
                        <button className="btn btn-dutch" size="lg">
                          Claim Reward
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          ) : (
            <></>
          )}


{modalShowFive ? (
            <Modal
              show={modalShowFive}
              onHide={() => setModalShowFive(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <Modal.Body
                className="modal-img"
                style={{
                  background: "rgb(12,30,37)",
                  border: "5px solid #2EC2E1",
                  borderRadius: "5px",
                  position: "relative",
                  // Width: "900px"
                }}
              >
                <img src={Group795} className="image1" />
                <img src={Group796} className="image2" />
                <img src={Group797} className="image3" />
                <img src={Group798} className="image4" />
                <img src={Rectangle42} className="image5" />
                <img src={Rectangle43} className="image6" />
                <div
                  className="row staking d-flex justify-content-center flex-wrap flex-row"
                  id="presale"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 d-flex justify-content-end">
                      <IoMdClose
                        onClick={() => setModalShowFive(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                      <img src={Rectangle45} className="mintImage1" />
                      <img src={Rectangle46} className="mintImage2" />
                      <span className="mintImage3">CONGRATULATION!</span>
                    </div>
                  </div>
                  <div
                    className="row d-flex justify-content-center text-center mt-4 "
                    
                  >
                    <span className="dutch-span1">
                    You got a Klaytn Token now !
                    </span>
                    <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                      <img src={modalpcs6} className="dutch-img23" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-4">
                    <div className="col-md-5 col-11">
                      <div className="d-grid gap-2">
                        <button className="btn btn-dutch" size="lg">
                          Claim Reward
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          ) : (
            <></>
          )}


{modalShowSix ? (
            <Modal
              show={modalShowSix}
              onHide={() => setModalShowSix(false)}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
            >
              <Modal.Body
                className="modal-img"
                style={{
                  background: "rgb(12,30,37)",
                  border: "5px solid #2EC2E1",
                  borderRadius: "5px",
                  position: "relative",
                  // Width: "900px"
                }}
              >
                <img src={Group795} className="image1" />
                <img src={Group796} className="image2" />
                <img src={Group797} className="image3" />
                <img src={Group798} className="image4" />
                <img src={Rectangle42} className="image5" />
                <img src={Rectangle43} className="image6" />
                <div
                  className="row staking d-flex justify-content-center flex-wrap flex-row"
                  id="presale"
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-11 d-flex justify-content-end">
                      <IoMdClose
                        onClick={() => setModalShowSix(false)}
                        size={28}
                        style={{ color: "white", cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex text-center justify-content-center align-items-center">
                      <img src={Rectangle45} className="mintImage1" />
                      <img src={Rectangle46} className="mintImage2" />
                      <span className="mintImage3">CONGRATULATION!</span>
                    </div>
                  </div>
                  <div
                    className="row d-flex justify-content-center text-center mt-4 "
                    
                  >
                    <span className="dutch-span1">
                    You got a Klaytn Token now !
                    </span>
                    <div className="col-6 dutch-img2 d-flex justify-content-center align-items-center mt-4">
                      <img src={modalpcs7} className="dutch-img23" />
                    </div>
                  </div>
                  <div className="row d-flex justify-content-center mt-5 mb-4">
                    <div className="col-md-5 col-11">
                      <div className="d-grid gap-2">
                        <button className="btn btn-dutch" size="lg">
                          Claim Reward
                        </button>
                      </div>
                    </div>
                  </div>
                
                </div>
              </Modal.Body>
            </Modal>
          ) : (
            <></>
          )}

        </div>
      </div>
    </div>
  );
}

export default RandomBox;
