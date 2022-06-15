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

const Gallery = () => {
  let dummayArr = [];
  let dummayArrfil = [];
  let [items, setItems] = useState(Data);
  let [fiteredItems, setFilteredItems] = useState(Data);
  let [limit, setLimit] = useState(12);
  let [preFixing, setPrefixing] = useState(false);
  let [initialLimit, setInitialLimit] = useState(0);
  let [showLoading, setShowLoading] = useState(false);
  let [imageArray, setImageArray] = useState([]);
  let searchItembyEdition = useRef();
  let [toggle, settoggle] = useState(true);
  let [imageArrayLength, setImageArrayLength] = useState(Data.length);
  let [sumLimitfil, setsumLimitfil] = useState(12);
  let [sumInitLimitfil, setsumInitLimitfil] = useState(0);

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

  const gettingMyfilteredImages = () => {
    console.log("Image rrasdfasd23", dummayArrfil);
    let myFilteredLocalData = JSON.parse(
      window.localStorage.getItem("myLocalData")
    );
    console.log("myFilt rrasdfasd234", myFilteredLocalData);
    setShowLoading(true);
    setImageArrayLength(myFilteredLocalData.length);
    console.log("sumInitLimitfil", sumInitLimitfil);
    console.log("sumInitLimitfil1", sumLimitfil);

    // for (let i = sumInitLimitfil; i < sumLimitfil; i++) {
    //   // console.log(`myFilteredLocalData${i}`, myFilteredLocalData[i]);
    //   dummayArrfil = [...dummayArrfil, myFilteredLocalData[i]];
    // }
    setsumInitLimitfil(sumInitLimitfil + 12);
    setsumLimitfil(sumLimitfil + 12);
    console.log("DummyArray from Filterd Data", dummayArrfil);
    setImageArray(myFilteredLocalData);
    setShowLoading(false);
    setPrefixing(false);
  };

  const getImages = () => {
    // dummayArrfil = [];
    setImageArray([]);
    let myFilteredLocalData = JSON.parse(
      window.localStorage.getItem("myLocalData")
    );
    console.log("myFilteredLocalData", myFilteredLocalData);

    if (myFilteredLocalData) {
      gettingMyfilteredImages();
    } else {
      console.log("Will Load All Data");
      setImageArrayLength(Data.length);

      // console.log("items", items);
      for (let i = sumInitLimit; i < sumLimit; i++) {
        let myData = items[i];
        dummayArr = [...dummayArr, myData];
      }
      sumInitLimit = sumInitLimit + 12;
      sumLimit = sumLimit + 12;
      // console.log("DummyArray from all data", dummayArr);
      setImageArray(dummayArr);
      setShowLoading(false);
      setPrefixing(false);

      // setImageArrayLength(imageArray.length);
    }
  };

  const filterItem = (param) => {
    console.log("Image rrasdfasd1", imageArray);
    dummayArrfil.length = 0;
    console.log("Image rrasdfasd2", dummayArrfil);

    window.localStorage.clear();
    setPrefixing(true);
    console.log("for loop", param);

    const updatedItems = Data.filter((curElem) => {
      // console.log("curElem", curElem);
      for (var i = 0; i < curElem.attributes.length; i++) {
        if (curElem.attributes[i].trait_type === param) {
          return curElem.attributes[i].trait_type === param;
        }
      }
    });
    // console.log("Updated Item Length", updatedItems.length);
    if (updatedItems.length >= 1) {
      if (updatedItems.length < 9000) {
        console.log("sent to Local Storage", dummayArrfil.length);
        window.localStorage.setItem(
          "myLocalData",
          JSON.stringify(updatedItems)
        );
        setImageArrayLength(updatedItems.length);
        // setImageArray(updatedItems);
        // console.log("updated items", updatedItems);
        getImages();
      } else {
        console.log(" Local Storage set to Null");

        window.localStorage.setItem("myLocalData", JSON.stringify(null));
        setImageArrayLength(updatedItems.length);
        getImages();
      }
    } else {
      // console.log("No Data found Agains this trait type");
      console.log("hahhaha bro no images try again");

      setImageArrayLength(0);
    }
  };

  const reloadAll = (param) => {
    window.localStorage.clear();
    // localStorage.clear();
    getImages();
  };

  //Search Feature needs to be fixed....

  const SearchValue = () => {
    setShowLoading(false);
    let dummArr = [];
    setPrefixing(true);
    setImageArray([]);
    let value = searchItembyEdition.current.value;
    console.log("User Searched for ", value);
    for (let i = 0; i <= Data.length; i++) {
      console.log("for loop", i);
      console.log("Edition", Data[i].edition);
      if (Data[i].edition == value) {
        console.log("Edition Entered IF ", Data[i].edition);
        dummArr.push(Data[i]);
        setImageArrayLength(1);
        setPrefixing(false);

        console.log("Hurrah got the id", Data[i]);
        return;
      }
      setShowLoading(false);
      setImageArray(dummArr);
    }
    // const searchItem = Data.find((a) => {
    //   return a.edition === value;
    // });
    // const searchItem = Data.filter((curElem) => {
    //   return curElem.edition === value;
    // });
    // setImageArray(searchItem);
  };
  const handleScroll = (e) => {
    console.log("Scrolling");
    setShowLoading(true);
    let winTop = e.target.documentElement.scrollTop;
    let winHeight = window.innerHeight;
    let scrollHeight = e.target.documentElement.scrollHeight;
    let sumHeight = parseInt(winTop) + parseInt(winHeight);
    if (sumHeight + 1 >= scrollHeight) {
      setInitialLimit(limit + 12);
      setLimit(limit + 12);
      getImages();

      console.log("Reached at the bottom of the page");
    }
  };

  useEffect(() => {
    window.localStorage.clear();
    getImages();
  }, []);

  useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
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
                            {/* <li>
                              <button onClick={() => filterItem("Hat")}>
                                Hat
                              </button>
                            </li>
                            <hr /> */}
                            <li>
                              <button onClick={() => filterItem("Lips")}>
                                Lips
                              </button>
                            </li>
                            <hr />
                            {/* <li>
                              <button onClick={() => filterItem("Mask")}>
                                Mask
                              </button>
                            </li>
                            <hr /> */}
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
                          <span>
                            <input
                              type="number"
                              ref={searchItembyEdition}
                              placeholder="Number"
                              name="Number"
                              id=""
                            />
                          </span>
                          <span>
                            <button
                              onClick={() => SearchValue()}
                              className="ms-4 mySearchButton"
                            >
                              Search
                            </button>
                          </span>
                        </div>
                      </div>

                      <div>
                        {preFixing ? (
                          <p className="mt-5 ms-5">No Image Against this Id</p>
                        ) : (
                          // <Loading className="ms-5" />

                          <div className="row gallery-items d-flex text-center pt-5">
                            {/* // Data.filter(items=> items.attributes[0].trait_type === value ).map(post =>{ */}
                            {/* <img
                          src={post.image}
                          className="img img-fluid"
                          alt=""
                        /> */}

                            {imageArray.map((post, i) => {
                              // console.log("post mage", post.image);
                              return (
                                <div
                                  className="col-6 col-sm-4 col-md-4 image-box"
                                  key={i}
                                >
                                  <img
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
                            {/* <div>
                            {showLoading ? (
                              <button>Loading...</button>
                            ) : (
                              <p>Loading Completed</p>
                            )}
                          </div> */}
                          </div>
                        )}
                      </div>
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
