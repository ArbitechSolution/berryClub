import "./Home.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../Component/Footer";
import Logo from "../media/logo.png";
import MainLogo from "../media/main-logo.png";
import OpenSea from "../media/opensea.png";
import BerryAuction from "../media/berryauction.png";
import ManBlack1 from "../media/man-black-1.png";
import ManBlack2 from "../media/man-black-2.png";
import Girl from "../media/girl.png";
import ZE from "../media/gallery-ze.png";
import G1 from "../media/g-1.png";
import G2 from "../media/g-2.png";
import G3 from "../media/g-3.png";
import G4 from "../media/g-4.png";
import Gblack from "../media/girl-in-black.jpg";
import Gred from "../media/girl-in-red.png";
import Ggrey from "../media/girl-in-grey.png";
import ComingSoon from "../media/coming-soon.png";
import RoadmapGirl from "../media/roadmap-girl.png";
import RoadmapMen from "../media/roadmap-men.png";
import RootOne from "../media/root-one.png";
import MetaCube from "../media/meta-cube.png";
import BerryAuction2 from "../media/berry-auction.png";
import BitBerry from "../media/bit-berry.png";
import BitBerrySwap from "../media/bit-berry-swap.png";
import SodaPlay from "../media/soda-play.png";
import ToTheMoon from "../media/to-the-moon.png";
import { useTranslation } from "react-i18next";

const Home = () => {
  let [t, i18n] = useTranslation();

  const options1 = {
    autoplay: false,
    // autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 5,
    loop: true,
    responsive: {
      0: {
        autoplay: true,
        items: 2,
        dots: true,
      },
      769: {
        autoplay: true,
        items: 3,
        dots: true,
      },
      1200: {
        autoplay: true,
        items: 4,
        dots: true,
      },
      1300: {
        items: 5,
        dots: false,
      },
    },
  };

  const options2 = {
    autoplay: false,
    // autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 7,
    loop: true,
    responsive: {
      0: {
        autoplay: true,
        items: 2,
        dots: true,
      },
      769: {
        autoplay: true,
        items: 3,
        dots: true,
      },
      1200: {
        autoplay: true,
        items: 5,
        dots: true,
      },
      1300: {
        items: 7,
        dots: false,
      },
    },
  };

  return (
    <>
      <section id="home">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <img
              src={MainLogo}
              alt=""
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div
              className="pt-4 d-inline justify-content-center text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a className="btn btn-cta" href="#link">
                <img src={OpenSea} alt="" /> Buy on OpenSea
              </a>
              <a className="btn btn-cta" href="#link">
                <img src={BerryAuction} alt="" /> Buy on BerryAuction
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="gallery">
        <div className="container">
          <div
            className="section-title text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>GALLERY</h2>
          </div>
          <div
            className="galler-section"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <OwlCarousel className="owl-theme" {...options1}>
              <div className="img">
                <img src={G1} alt="" />
              </div>
              <div className="img">
                <img src={G2} alt="" />
              </div>
              <div className="img text-center">
                <img src={ZE} alt="" />
                <h3 className="pt-3">NO:ZE</h3>
              </div>
              <div className="img">
                <img src={G3} alt="" />
              </div>
              <div className="img">
                <img src={G4} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <div className="row pt-5">
            <div
              className="col-md-4 left text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={ManBlack1} alt="" />
              <img src={ManBlack2} alt="" />
            </div>
            <div className="col-md-4 center text-center">
              <img
                src={Logo}
                className="img img-fluid pt-5 pb-4"
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <p data-aos="fade-up" data-aos-delay="500">
                {t("homePara1")}
              </p>
              <p data-aos="fade-up" data-aos-delay="600">
                {t("homePara2")}
              </p>
              <p data-aos="fade-up" data-aos-delay="700">
                {t("homePara3")}
              </p>
              <a
                href="#link"
                className="btn btn-join my-3"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                Join Us Now
              </a>
            </div>
            <div
              className="col-md-4 right text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <img src={Girl} alt="" />
            </div>
          </div>
          <div className="row pt-5">
            <OwlCarousel
              className="owl-theme"
              {...options2}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="img">
                <img src={Gblack} alt="" />
              </div>
              <div className="img">
                <img src={G1} alt="" />
              </div>
              <div className="img">
                <img src={G2} alt="" />
              </div>
              <div className="img">
                <img src={Gred} alt="" />
              </div>
              <div className="img">
                <img src={G3} alt="" />
              </div>
              <div className="img">
                <img src={G4} alt="" />
              </div>
              <div className="img">
                <img src={Ggrey} alt="" />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <section id="roadmap">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h2>ROADMAP</h2>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-md-4 left text-center ">
              <div className="img">
                <img src={RoadmapGirl} alt="" />
              </div>
            </div>
            <div className="col-md-4 center text-center ">
              <div className="coming-soon pt-5 pt-md-0">
                <img src={ComingSoon} alt="" />
              </div>
            </div>
            <div className="col-md-4 right text-center ">
              <div className="img">
                <img src={RoadmapMen} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="partners-projects">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h2>PARTNERS</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 partners text-center">
              <img src={RootOne} alt="" />
              <img src={MetaCube} alt="" />
            </div>
          </div>
          <div className="row">
            <div className="section-title text-center">
              <h2>PROJECTS</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 projects text-center">
              <img src={BerryAuction2} alt="" />
              <img src={BitBerry} alt="" />
              <img src={BitBerrySwap} alt="" />
            </div>
            <div className="col-12 text-center">
              <img src={SodaPlay} alt="" />
              <img src={ToTheMoon} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <div className="row">
            {" "}
            <div className="section-title text-center">
              {" "}
              <h2>FAQs</h2>
            </div>
          </div>
          <div className="row pt-4">
            <div className="accordion accordion-flush text-light" id="faqs">
              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq1")}
                  </button>
                </span>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p>{t("faqA1")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq2")}
                  </button>
                </span>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p>{t("faqA2")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h3 className="pe-3">Q.</h3> {t("faq3")}
                  </button>
                </span>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p>{t("faqA3")}</p>
                  </div>
                </div>
              </div>

              <div
                className="accordion-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <h3 className="pe-3">Q.</h3>
                    {t("faq4")}
                  </button>
                </span>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#faqs"
                >
                  <div className="accordion-body d-flex flex-row align-items-baseline">
                    <h3 className="pe-3">A.</h3>
                    <p>{t("faqA4")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
