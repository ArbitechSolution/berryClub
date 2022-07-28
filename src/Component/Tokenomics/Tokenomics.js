import React from "react";
import "./Tokenomics.css";
import Ellipse41 from "../../media/Ellipse 41-01.png";
import { GoPrimitiveDot } from "react-icons/go";
import {FaGreaterThan, FaStarOfLife} from "react-icons/fa"
function Tokenomics() {
    return (
        <div className="airdrop-image">
            <div className="container">
                <div className="row airdrop-image1 d-flex justify-content-center">
                    <div className="col-md-11 col-11 airdrop-every mt-5 mb-5">
                        <div className="col-12 d-flex justify-content-center mb-2 mt-4">
                            <h3 className="randombox-he">Tokenomics</h3>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-11">
                                <div className="row d-flex justify-content-center mt-2">
                                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                                        <span className="tokenomics-span">Token Name:</span>
                                        <br />
                                        <span className="tokenomics-span1">Berry Club</span>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center mt-3">
                                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                                        <span className="tokenomics-span">Symbol:</span>
                                        <br />
                                        <span className="tokenomics-span1">BCB</span>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3">
                                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                                        <span className="tokenomics-span">Total Supply:</span>
                                        <br />
                                        <span className="tokenomics-span1">1,000,000,000</span>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3">
                                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                                        <span className="tokenomics-span">Decimals:</span>
                                        <br />
                                        <span className="tokenomics-span1">18</span>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3">
                                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                                        <span className="tokenomics-span">Chain</span>
                                        <br />
                                        <span className="tokenomics-span1">Klaytn</span>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3">
                                    <div className="col-md-7 tokenomics-box ps-4 pt-2 pb-2">
                                        <span className="tokenomics-span">Contract Address</span>
                                        <br />
                                        <span className="tokenomics-span1">
                                            0x6B...f499
                                        </span>
                                    </div>
                                </div>
                                <div className=" tokenomics-p ms-md-5 mt-3">
                                    *3% buy and sell tax will be paid automatically to NFT Holders
                                </div>
                            </div>

                            <div className="col-md-5 col-11 d-flex justify-content-center align-items-center">
                                <img src={Ellipse41} className="token-images" />
                                {/* <span className="tokenomic-span21 positions1">50%</span>
                                <span className="tokenomic-span21 positions2">20%</span>
                                <span className="tokenomic-span21 positions3">15%</span>
                                <span className="tokenomic-span21 positions4">13%</span>
                                <span className="tokenomic-span21 positions5">2%</span> */}
                            </div>
                            <div className="col-md-3 col-11 mt-5">
                                <div className="row d-flex justify-content-center">
                                    <div
                                        className="col-md-8 pt-2"
                                        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.25)" }}
                                    >
                                        <span className="tokenomics-span11 ">
                                            <GoPrimitiveDot size={23} style={{ color: "#00A3FE" }} />{" "}
                                            Stake Reward
                                        </span>
                                        <br />
                                        <span
                                            className="tokenomics-span1 ms-4"
                                            class
                                            style={{ color: "#00A3FE" }}
                                        >
                                            50%{" "}
                                            <span
                                                className="tokenomics-span1 ms-2"
                                                style={{ color: "#ffffff" }}
                                            >
                                                500,000,000
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3">
                                    <div
                                        className="col-md-8 pt-2"
                                        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.25)" }}
                                    >
                                        <span className="tokenomics-span11 ">
                                            <GoPrimitiveDot size={23} style={{ color: "#01982B" }} />{" "}
                                            Ecosystem
                                        </span>
                                        <br />
                                        <span
                                            className="tokenomics-span1 ms-4"
                                            class
                                            style={{ color: "#01982B" }}
                                        >
                                            20%{" "}
                                            <span
                                                className="tokenomics-span1 ms-2"
                                                style={{ color: "#ffffff" }}
                                            >
                                                200,000,000
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center mt-3">
                                    <div
                                        className="col-md-8 pt-2"
                                        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.25)" }}
                                    >
                                        <span className="tokenomics-span11 ">
                                            <GoPrimitiveDot size={23} style={{ color: "#EA7202" }} />{" "}
                                            Team
                                        </span>
                                        <br />
                                        <span
                                            className="tokenomics-span1 ms-4"
                                            class
                                            style={{ color: "#EA7202" }}
                                        >
                                            15%{" "}
                                            <span
                                                className="tokenomics-span1 ms-2"
                                                style={{ color: "#ffffff" }}
                                            >
                                                150,000,000
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center mt-3">
                                    <div
                                        className="col-md-8 pt-2"
                                        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.25)" }}
                                    >
                                        <span className="tokenomics-span11 ">
                                            <GoPrimitiveDot size={23} style={{ color: "#B61FD1" }} />{" "}
                                            Marketing
                                        </span>
                                        <br />
                                        <span
                                            className="tokenomics-span1 ms-4"
                                            class
                                            style={{ color: "#B61FD1" }}
                                        >
                                            13%{" "}
                                            <span
                                                className="tokenomics-span1 ms-2"
                                                style={{ color: "#ffffff" }}
                                            >
                                                130,000,000
                                            </span>
                                        </span>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center mt-3">
                                    <div
                                        className="col-md-8 pt-2"
                                        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.25)" }}
                                    >
                                        <span className="tokenomics-span11 ">
                                            <GoPrimitiveDot size={23} style={{ color: "#A5BB19" }} />{" "}
                                            Airdrop
                                        </span>
                                        <br />
                                        <span
                                            className="tokenomics-span1 ms-4"
                                            class
                                            style={{ color: "#A5BB19" }}
                                        >
                                            2%{" "}
                                            <span
                                                className="tokenomics-span1 ms-2"
                                                style={{ color: "#ffffff" }}
                                            >
                                                20,000,000
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-10 col-11 tokenomics-boxes1">
                    <div className="col-12 d-flex justify-content-center mb-2 mt-4">
                            <h3 className="randombox-he">Tokenomics</h3>
                        </div>

                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li mt-1"><FaGreaterThan size={18} style={{color: "#00A5FF"}}/>&nbsp;We issued a10k berry girl NFT card base on klaytn.</li>
                        </ul>
                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li mt-1"><FaGreaterThan size={18} style={{color: "#00A5FF"}}/>&nbsp;NFT holders can stake and get a $BCB token reward everyday.</li>
                        </ul>
                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li1 mt-1"><FaStarOfLife size={18} style={{color: "#2EBA85"}}/>&nbsp;*8k common nft card +20 a day</li>
                        </ul>
                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li1 mt-1"><FaStarOfLife size={18} style={{color: "#2EBA85"}}/>&nbsp;*2k genesis nft card +100 a day with breeding -> two common nft cards + some $BCB token need to breed.</li>
                        </ul>
                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li mt-1"><FaGreaterThan size={18} style={{color: "#00A5FF"}}/>&nbsp;After breed, two cards burned forever.</li>
                        </ul>
                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li mt-1"><FaGreaterThan size={18} style={{color: "#00A5FF"}}/>&nbsp;When user stakes first time, give bonus 300 $BCB token (all card apply even free and dutch nft card).</li>
                        </ul>
                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li1 mt-1"><FaStarOfLife size={18} style={{color: "#2EBA85"}}/>&nbsp; *Booster nft card(500ea)</li>
                        </ul>
                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li mt-1"><FaGreaterThan size={18} style={{color: "#00A5FF"}}/>&nbsp;Get 500ea boost nft stake card from a random box.</li>
                        </ul>
                        <ul className="tokenomics-ul">
                            <li className="tokenomics-li mt-1"><FaGreaterThan size={18} style={{color: "#00A5FF"}}/>&nbsp;Can earn +150 $BCB token a day(stake in Genesis pool).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tokenomics;
