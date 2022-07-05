import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import containerImage from "../media/Group 48.png";
import "./PublicSale.css";
import Footer from "../Component/Footer";
import PublicSaleImg from "../media/public-sale.png";
import Girl from "../media/girl.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Data from "./metadata.json";

import Modal from "react-bootstrap/Modal";
import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../Component/Utils/BerryClub";
import { loadWeb3 } from "../Component/Api/api";
const PublicSale = () => {
  let navigate = useNavigate();
  const [mintAmount, setMintAmount] = useState(10);
  let [items, setItems] = useState(Data);

  const [account, setAccount] = useState("Connect Wallet");
  const [publicSalePrice, setPublicSalePrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [newMintedIds, setNewMintedIds] = useState([]);
  //   const [userBalance, setUserBalance] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const getAccount = async () => {
    let acc = await loadWeb3();
    setAccount(acc);
    try {
      let web3 = window.web3;
      let contractOf = new web3.eth.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );

      let publicPrice = await contractOf.methods.PUBLIC_PRICE().call();

      publicPrice = web3.utils.fromWei(publicPrice);
      publicPrice = parseFloat(publicPrice).toFixed(4);
      setTotalPrice(publicPrice);
    } catch (e) {
      console.log("Error in setting total amount");
    }
  };

  const getModalImages = async () => {
    setModalShow(true);
    try {
      let web3 = window.web3;
      let contractOf = new web3.eth.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );
      let dummyArray = [];
      let totaNftIds = await contractOf.methods.walletOfOwner(account).call();
      console.log("totaNftIds", totaNftIds);
      console.log("totaNftIds length", totaNftIds.length);

      let previous = parseInt(totaNftIds.length) - mintAmount;
      // console.log("previous", previous);

      for (let i = previous; i < totaNftIds.length; i++) {
        console.log("i==", totaNftIds[i]);
        let d = items.filter((e) => e.edition == totaNftIds[i]);
        console.log("d", d);
        dummyArray = [...dummyArray, d];
      }
      setNewMintedIds(dummyArray);
    } catch (e) {
      console.log("Error while loadig modal Images");
    }
  };
  const publicMint = async () => {
    if (account == "No Wallet") {
      toast.info("No Wallet Connected");
    } else if (account == "Wrong Network") {
      toast.info("Wrong Network");

      console.log("Not Connected");
    } else if (account == "Connect Wallet") {
      toast.info("Connect Wallet");
    } else {
      try {
        let web3 = window.web3;
        let contractOf = new web3.eth.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        let userBalance = await web3.eth.getBalance(account);
        console.log("balance", userBalance);
        let checkBool = await contractOf.methods.saleStarted().call();
        let publicPrice = await contractOf.methods.PUBLIC_PRICE().call();
        let totalprice = publicPrice * mintAmount;

        if (checkBool) {
          if (parseFloat(userBalance) > parseFloat(totalprice)) {
            // await contractOf.methods.mint(mintAmount).send({
            //   value: totalprice.toString(),
            //   from: account,
            // });
            getModalImages();
            toast.success("Transaction Successfull");
            // navigate("/gallery");
          } else {
            toast.info("Insufficient Balance!");
          }
        } else {
          toast.info("Oops! Public Sale Not Started Yet");
        }
      } catch (e) {
        toast.error("Transaction Failed!");
        console.log("Error while public minting", e);
      }
    }
  };
  const getPrice = async () => {
    try {
      let web3 = window.web3;
      let contractOf = new web3.eth.Contract(
        berryClubContractAbi,
        berryClubCntractAddress
      );
      let publicPrice = await contractOf.methods.PUBLIC_PRICE().call();
      publicPrice = web3.utils.fromWei(publicPrice);
      publicPrice = parseFloat(publicPrice).toFixed(4);
      setPublicSalePrice(publicPrice);
    } catch (e) {
      console.log("Error While getting public sale price", e);
    }
  };

  const increment = () => {
    console.log("Increment", mintAmount);
    if (mintAmount < 10) {
      let b = mintAmount + 1;
      let myTotalPrice = publicSalePrice * b;
      myTotalPrice = parseFloat(myTotalPrice).toFixed(4);

      setMintAmount(b);
      setTotalPrice(myTotalPrice);
    }
  };
  const decrement = () => {
    console.log("decrement", mintAmount);

    if (mintAmount > 1) {
      let b = mintAmount - 1;
      let myTotalPrice = publicSalePrice * b;

      setMintAmount(b);
      myTotalPrice = parseFloat(myTotalPrice).toFixed(4);

      setTotalPrice(myTotalPrice);
    }
  };
  useEffect(() => {
    setInterval(() => {
      getPrice();
    }, [15000]);
    getPrice();

    getAccount();
  }, []);

  return (
    <>
      <section id="public-sale">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h2>MINTING</h2>
              <img src={PublicSaleImg} alt="" className="pt-3" />
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-md-8 ps-box">
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="ps-mint-box">
                    <img src={Girl} alt="" width="400px" />
                    <div className="row">
                      <div className="input-group  mt-4 col-12">
                        <button
                          className="btn"
                          type="button"
                          id=""
                          style={{ color: "#595959", fontWeight: "700" }}
                          onClick={() => decrement()}
                        >
                          -
                        </button>
                        <p
                          //   type="text"
                          className="form-control number mt-3"
                          //   placeholder="1"
                          //   value="1"
                        >
                          {mintAmount}
                        </p>
                        <button
                          className="btn"
                          type="button"
                          id=""
                          style={{ color: "#595959" }}
                          onClick={() => increment()}
                        >
                          +
                        </button>
                        <span className="input-group-text form-control">
                          10 max
                        </span>
                      </div>
                      <hr className="my-3" />
                    </div>

                    <div className="total text-white">
                      <span className="text">Total</span>
                      <span className="value">{totalPrice} ETH</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8  col-info">
                  <div className="ps-info-box">
                    <div className="box-head">
                      <span className="text fw-bold">Price per Card</span>
                      <span className="value" style={{ fontWeight: "700" }}>
                        {publicSalePrice} ETH
                      </span>
                    </div>

                    <div className="box-body text-center">
                      <div className="content text-white">
                        <h4>Join the Minting right now!</h4>
                        <p>
                          You can participate in Minting by connecting wallet
                          and pressing Mint button.
                        </p>
                        <p>
                          The number of transitions per person is limited to 10,
                          and sanctions can be imposed without additional
                          guidance if bot actions are detected.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-7 col-12 mt-2">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-connect"
                              size="lg"
                              onClick={() => getAccount()}
                            >
                              {account === "No Wallet"
                                ? "Connect"
                                : account === "Connect Wallet"
                                ? "Connect"
                                : account === "Wrong Network"
                                ? account
                                : account.substring(0, 4) +
                                  "..." +
                                  account.substring(account.length - 4)}
                            </button>
                          </div>
                        </div>
                        <div className="col-md-5 col-12 mt-2">
                          <div className="d-grid gap-2">
                            <button
                              className="btn btn-Mint"
                              size="lg"
                              onClick={() => {
                                publicMint();
                                // setModalShow(true);
                              }}
                            >
                              Mint
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="buttons">
                        {/* <button className="connect m-1">Connect</button>
                                                <button className="mint m-1">Mint</button> */}
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
                >
                  <Modal.Body
                    className="modal-img"
                    style={{
                      background: "rgb(12,30,37)",
                      border: "3px dashed #2ADEEA",
                    }}
                  >
                    <div
                      className="staking d-flex justify-content-center "
                      id="presale"
                    >
                      <div className="imgArea  d-flex justify-content-center">
                        <img
                          className="stakingTop-image"
                          src={containerImage}
                        ></img>
                        <span className="imgArea-text">Congratulations</span>
                      </div>
                      <div className=" d-flex justify-content-end mb-4">
                        <div className="col-12 d-flex justify-content-end">
                          <IoMdClose
                            onClick={() => setModalShow(false)}
                            size={28}
                            style={{ color: "white", cursor: "pointer" }}
                          />
                        </div>
                      </div>
                      <div className="row d-flex justify-content-center flex-wrap flex-row mt-5 ">
                        {newMintedIds.map((post) => {
                          console.log("newMintedIds", post[0].name);
                          return (
                            <div className="col-4">
                              <img
                                src={post[0].image}
                                className=" m-1 mintImage"
                                alt="..."
                              />
                              <h5 className="image-name py-2 text-white">
                                {post[0].name}
                              </h5>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Modal.Body>
                </Modal>
              ) : (
                <></>
              )}
            </div>
            {/* <div className="col-md-4 text-center">
                        <div className="ps-mint-box">
                            <img src={Girl} alt="" />
                                <div class="input-group py-2 mt-4">
                                    <button class="btn-minus" type="button" id="">-</button>
                                    <input type="text" class="form-control number" placeholder="1" value="1" />
                                    <button class="btn-plus" type="button" id="">+</button>
                                    <span class="input-group-text form-control">3 max</span>
                                </div>
                                <hr class="my-3" /> 
                                
                                <div class="total text-white">
                                    <span class="text">Total</span>
                                    <span class="value">0.00 ETH</span>
                                </div>
                        </div>
                    </div> */}
            {/* <div className="col-md-8 offset-md-1 col-info">
                        <div className="ps-info-box">
                            <div className="box-head">
                                 <span className="text fw-bold">Price per Card</span>
                                <span className="value">0.00 ETH</span>
                            </div>
                       
                            <div className="box-body text-center">
                                <div className="content">
                                    <h4>Join the Minting right now!</h4>
                                    <p>You can participate in Minting by connecting wallet and pressing Mint button.</p>
                                    <p>The number of transitions per person is limited to 10, and sanctions can be imposed without additional guidance if bot actions are detected.</p>
                                </div>
                                <div className="buttons">
                                    <button className="connect m-1">Connect</button>
                                    <button className="mint m-1">Mint</button>
                                </div>
                            </div>
                        </div>
                       
                    </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PublicSale;
