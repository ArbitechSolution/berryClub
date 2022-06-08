import "./Gallery.css";
import { useState, useEffect, useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../Component/Footer";
import Data from "./metadata.json";
import ZE from "../media/gallery-ze.png";
import G1 from "../media/g-1.png";
import G2 from "../media/g-2.png";
import G3 from "../media/g-3.png";
import G4 from "../media/g-4.png";
import { Loading } from "react-loading-dot";
import Thumb from "../media/placeholder.jpg";

const Gallery = () => {
  let [items, setItems] = useState(Data);
  // let [filterData, setFilterData] = useState([]);
  let filterData = useRef([]);
  let [limit, setLimit] = useState(12);
  let [preFixing, setPrefixing] = useState(false);
  let [initialLimit, setInitialLimit] = useState(0);
  let [showLoading, setShowLoading] = useState(true);
  let [imageArray, setImageArray] = useState([]);
  let dummayArr = [];

  let [imageArrayLength, setImageArrayLength] = useState(Data.length);
  let sumLimit = 12;
  let sumInitLimit = 0;

  const gallery1 = {
    autoplay: false,
    autoplayhoverpause: true,
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

  const getImages = () => {
    let myFilteredLocalData = JSON.parse(localStorage.getItem("myLocalData"));
    console.log("myFilteredLocalData", myFilteredLocalData);
    console.log("Filtered length", myFilteredLocalData);

    if (myFilteredLocalData) {
      console.log("myFilteredLocalData length", myFilteredLocalData.length);
      setImageArrayLength(myFilteredLocalData.length);
      console.log("Will Load Filter Data", filterData.length);
      for (let i = sumInitLimit; i < sumLimit; i++) {
        let myData = myFilteredLocalData[i];
        dummayArr = [...dummayArr, myData];
      }
      sumInitLimit = sumInitLimit + 12;
      sumLimit = sumLimit + 12;
      console.log("DummyArray from Filterd Data", dummayArr);
      setImageArray(dummayArr);
      setShowLoading(false);
      setPrefixing(false);
    } else {
      console.log("Will Load All Data");
      setImageArrayLength(Data.length);

      console.log("items", items);
      for (let i = sumInitLimit; i < sumLimit; i++) {
        let myData = items[i];
        dummayArr = [...dummayArr, myData];
      }
      sumInitLimit = sumInitLimit + 12;
      sumLimit = sumLimit + 12;
      console.log("DummyArray from all data", dummayArr);
      setImageArray(dummayArr);
      setShowLoading(false);
      setPrefixing(false);

      // setImageArrayLength(imageArray.length);
    }
  };

  const filterItem = (param) => {
    setPrefixing(true);
    setImageArray(null);

    console.log("Param in filter = ", param);
    console.log("setPrefixing", preFixing);
    const updatedItems = Data.filter((curElem) => {
      localStorage.clear();

      // return curElem.attributes[0].trait_type === param;

      for (var i = 0; i < curElem.attributes.length; i++) {
        if (curElem.attributes[i].trait_type === param) {
          return curElem.attributes[i].trait_type === param;
        }
      }
    });
    console.log("Updated Item Length", updatedItems.length);
    if (updatedItems.length >= 1) {
      if (updatedItems.length < 10000) {
        localStorage.setItem("myLocalData", JSON.stringify(updatedItems));
        setImageArrayLength(updatedItems.length);
        // setImageArray(updatedItems);
        console.log("updated items", updatedItems);
        getImages();
      } else {
        localStorage.setItem("myLocalData", JSON.stringify(null));
        setImageArrayLength(updatedItems.length);
        getImages();
      }
    } else {
      console.log("No Data found Agains this trait type");
      setImageArrayLength(0);
    }

    // filterData.current.value = updatedItems;
    // setFilterData(updatedItems);
    // setItems(updatedItems);

    // setImageArrayLength(updatedItems.length);
    // for (let i = sumInitLimit; i < sumLimit; i++) {
    //   let myFilteredData = updatedItems[i];
    //   filteredArray = [...filteredArray, myFilteredData];
    // }
    // sumInitLimit = sumInitLimit + 12;
    // sumLimit = sumLimit + 12;
    // console.log("filteredArray", filteredArray);
    // setImageArray(filteredArray);
    // setShowLoading(false);
    // setImageArray(updatedItems);
  };

  const reloadAll = (param) => {
    localStorage.clear();
    getImages();
    // setFilterData([]);
    // filterData.current.value = [];
    // const loadAllData = Data.filter((curElem) => {
    //   return curElem.description === "";
    // });

    // setItems(loadAllData);
  };

  //Search Feature needs to be fixed....

  const SearchValue = (value) => {
    const searchItem = Data.filter((curElem) => {
      return curElem.edition === value;
    });

    setItems(searchItem);
  };
  const handleScroll = (e) => {
    console.log("Scrolling");
    setShowLoading(true);
    let winTop = e.target.documentElement.scrollTop;
    let winHeight = window.innerHeight;
    let scrollHeight = e.target.documentElement.scrollHeight;
    let sumHeight = parseInt(winTop) + parseInt(winHeight) + 160;
    if (sumHeight + 1 >= scrollHeight) {
      setInitialLimit(limit + 12);
      setLimit(limit + 12);
      getImages();

      console.log("Reached at the bottom of the page");
    }
    // console.log("winTop", winTop);
    // console.log("winHeight", winHeight);
    // console.log("scrollHeight", scrollHeight);
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    getImages();
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <section id="gallery">
        <div className="container">
          <div className="section-title text-center">
            <h2>GALLERY</h2>
          </div>
          <div className="galler-section">
            <OwlCarousel className="owl-theme" {...gallery1}>
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

      <section id="tabs">
        <div className="m-4">
          <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
              <a href="#all" className="nav-link active" data-bs-toggle="tab">
                ALL
              </a>
            </li>
            <li className="nav-item">
              <a href="#my-nft" className="nav-link" data-bs-toggle="tab">
                MY NFT
              </a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="all">
              <section id="MainGallery">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3 filter">
                      <div className="filter-box">
                        <div className="top-bar d-flex justify-content-between">
                          <div className="filter-title">
                            <h4>Filter</h4>
                          </div>
                          <div className="reload">
                            <button onClick={() => reloadAll()}>
                              <i className="fa-solid fa-rotate-right"></i>
                            </button>
                          </div>
                        </div>
                        <hr className="main-hr" />
                        <div className="all-filters ">
                          <ul>
                            <li>
                              <button onClick={() => filterItem("Background")}>
                                Background
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Clothing")}>
                                Clothing
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Earrings")}>
                                Earrings
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Eye color")}>
                                Eye color
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Glasses")}>
                                Glasses
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Hand")}>
                                Hand
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Hat")}>
                                Hat
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Lips")}>
                                Lips
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Mask")}>
                                Mask
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button
                                onClick={() => filterItem("Neck jewelry")}
                              >
                                Neck jewelry
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Skin")}>
                                Skin
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => filterItem("Wings")}>
                                Wings
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 main-gallery">
                      <div className="head d-flex justify-content-between">
                        <div className="total">{imageArrayLength} items</div>
                        <div className="search-box">
                          <input
                            type="number"
                            placeholder="Number"
                            onChange={(e) => SearchValue(e.target.value)}
                            name="Number"
                            id=""
                          />
                        </div>
                      </div>
                      {preFixing ? (
                        <p className="mt-5 ms-5">
                          No Image Against this Trait type
                        </p>
                      ) : (
                        // <Loading className="ms-5" />
                        <div className="row gallery-items d-flex text-center pt-5">
                          {/* // Data.filter(items=> items.attributes[0].trait_type === value ).map(post =>{ */}
                          {/* <img
                          src={post.image}
                          className="img img-fluid"
                          alt=""
                        /> */}

                          {imageArray
                            .sort((a, b) => a.edition - b.edition)
                            .map((post, i) => {
                              // console.log("post mage", post.image);
                              return (
                                <div
                                  className="col-6 col-sm-4 col-md-4 image-box"
                                  key={post.name}
                                >
                                  <img
                                    blurRadius={100}
                                    src={post.image}
                                    className="lazyload img img-fluid"
                                    alt="NO:ZE"
                                    loading="lazy"
                                  />
                                  <h5 className="image-name py-2">
                                    {post.name}
                                  </h5>
                                </div>
                              );
                            })}
                          <div>
                            {showLoading && <button>Loading...</button>}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="tab-pane fade" id="my-nft">
              <section id="myNFT">
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center py-5">
                      <p>
                        Please connect your wallet to view your BerryClub NFTs.
                      </p>
                      <button className="connect-wallet mt-4">
                        CONNECT WALLET
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
export default Gallery;
