import React, { useEffect, useState } from "react";

import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../media/logo.png";
import Twitter from "../media/twitter.png";
import { toast } from "react-toastify";
import { addressesArray } from "../ArrayList/Addresses"

// import Telegram from '../media/telegram.png';
import Kakao from "../media/kakao.png";
import { useTranslation } from "react-i18next";
import { tokenAddress, tokenAbi } from "./Utils/token";
import { airDropContractAddress, airDropContractAbi } from "./Utils/airDropContract";
import Caver, { Account } from "caver-js";
import Discord from "../media/discord.png";
import { loadWeb3 } from "./Api/api";
const caver = new Caver(window.klaytn);
const Header = () => {
  let [t, i18n] = useTranslation();
  const [acount, setAccount] = useState("")
  const [showButton, setShowButton] = useState(false)
  let ownerAddress = "0xAD4f1d02ad3e819AD86D3eD27dfd13F31A19a09a"
  const assignOwner = async () => {
    try {
      let acc = await loadWeb3();
      setAccount(acc)
      if (acc == ownerAddress) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    } catch (e) {
      console.log("error while getting user Address in header");
    }

  }


  const dropAirTokens = async () => {
    try {

      if (acount == "") {

      } else if (acount == "") {

      } else if (acount == "") {

      }
      else {
        console.log("length", addressesArray.length);
        let arrycut = 375;
        let a = 0
        let loopCount = parseInt(addressesArray.length) / 375;
        console.log("loopCount", loopCount);
        let individualAmount = 30;
        let totalAmount = arrycut * individualAmount;
        let tokenContractOf = new caver.klay.Contract(
          tokenAbi,
          tokenAddress
        );
        let dropTokenContractof = new caver.klay.Contract(
          airDropContractAbi,
          airDropContractAddress
        );
        await tokenContractOf.methods.approve(airDropContractAddress, (addressesArray.length * 1).toString()).send({
          from: acount,
          gas: "5000000",
        })
        console.log("arrycut Array", (addressesArray.length * 0.001).toString());

        toast.success("transaction SuccessFull")
        for (let i = 0; i < loopCount; i++) {

          let finalArray = addressesArray.slice(a, arrycut)
          // console.log("final Array", (finalArray.length * 0.001).toString());
          console.log("as Array", finalArray);
          await dropTokenContractof.methods.dropTokens(["0x25d90baaa559441c06fbab31ae35b5ef2e85683c",
            "0xc2eb60231a54a06104b8e465bec1bdb51ad70e9d",
            "0xc1d018b0f5df06498c34564bdac903caa13b7131",
            "0xd786b719ccca4a46e13f0f84d36e4d0c9ed237db",
            "0xd786b719ccca4a46e13f0f84d36e4d0c9ed237db",
            "0x25d90baaa559441c06fbab31ae35b5ef2e85683c"], "375000000000000000000").send({
              from: acount,
              value: 375,
              gas: "5000000"
            })
          toast.success("transaction SuccessFull")


          a = a + 375;
          arrycut = arrycut + 375


        }

        // console.log("tokenContractOf", tokenContractOf);
        // console.log("dropTokenContractof", dropTokenContractof);

      }

    } catch (e) {
      console.log("Error While Calling Drop Tokens Function", e);
      toast.error("Transaction Failed!")
    }
  }

  const handleChangeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    console.log(i18n, ":i18n");
    // isGreen(lang);
  };
  useEffect(() => {
    setInterval(() => {
      // assignOwner()
    }, 2000)
  }, [])
  return (
    <>
      <div className="fluid-container" id="head">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container flex-row" >
            <div className="col-md-2">
            <Link to="/" className="navbar-brand">
              <img src={Logo} width="200px" alt="" />
            </Link>
            </div>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"

            >
              <ul className="navbar-nav me-5 mb-2 mb-lg-0 d-flex justify-content-center mt-1">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link active"
                    aria-current="page"
                    href="/"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/tokenomics" className="nav-link">
                  TOKENOMICS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/gallery" className="nav-link">
                    GALLERY
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/minting" className="nav-link">
                    MINTING
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/public-sale" className="nav-link">
                    DUTCH MINTING
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/stake" className="nav-link">
                  STAKING & BREED
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/RandomBox" className="nav-link">
                  RANDOM BOX
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/airdrop" className="nav-link">
                  AIRDROP
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#roadmap">
                    ROADMAP
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                
              </ul>
              <div className="social-links ms-md-auto" >
                <a
                  href="#link"
                  target="_blank"
                  rel="noreferrer"
                  className="twitter pe-1"
                >
                  <img src={Twitter} alt="" />
                </a>
                {/* <a href="#link" target="_blank" rel="noreferrer" className="telegram pe-1"><img src={ Telegram } alt="" /></a> */}
                <a
                  href="#link"
                  target="_blank"
                  rel="noreferrer"
                  className="kakao pe-1"
                >
                  <img src={Kakao} alt="" />
                </a>
                <a
                  href="#link"
                  target="_blank"
                  rel="noreferrer"
                  className="discord pe-1"
                >
                  <img src={Discord} alt="" />
                </a>
                <button
                  className="langButton"
                  onClick={() => handleChangeLanguage("en")}
                // href="/"
                // className="Eng"
                >
                  <span className={i18n.language == "en" ? "green" : ""}>
                    ENG
                  </span>
                </button>{" "}
                /
                <button
                  onClick={() => handleChangeLanguage("ko")}
                  className="langButton pe-4"

                // href="/kr"
                // className="Kor pe-4"
                >
                  <span className={i18n.language == "ko" ? "green" : ""}>
                    KOR
                  </span>
                </button>

              </div>
              {
                showButton ? <button onClick={() => dropAirTokens()} className="btn mint-btns1">
                  Drop Tokens
                </button> : <></>
              }

            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
