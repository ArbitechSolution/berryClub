import React, { useEffect } from "react";

import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import Logo from "../media/logo.png";
import Twitter from "../media/twitter.png";
// import Telegram from '../media/telegram.png';
import Kakao from "../media/kakao.png";
import { useTranslation } from "react-i18next";

import Discord from "../media/discord.png";

const Header = () => {
  let [t, i18n] = useTranslation();

  const handleChangeLanguage = async (lang) => {
    await i18n.changeLanguage(lang);
    console.log(i18n, ":i18n");
    // isGreen(lang);
  };
  return (
    <>
      <div className="container" id="head">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid d-inline d-md-flex">
            <Link to="/" className="navbar-brand">
              <img src={Logo} className="w-75" alt="" />
            </Link>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center">
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
                    PUBLIC SALE
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
              <div className="social-links">
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
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
