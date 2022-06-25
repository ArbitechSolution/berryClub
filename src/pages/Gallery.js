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
import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../Component/Utils/BerryClub";
import { loadWeb3 } from "../Component/Api/api";

const Gallery = () => {
  let dummayArr = [];
  let dummayArrfil = [];
  let [items, setItems] = useState(Data);
  let [buttonTxt, setButtonText] = useState("CONNECT WALLET");
  let [account, setAccount] = useState();

  let [filterItems, setFilterItems] = useState(Data);
  const [arrSliceLimit, setarrSliceLimit] = useState(12);
  let limit = 12;
  let [myNftArray, setmyNftArray] = useState([]);
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

  const getWalletAddress = async () => {
    try {
      let acc = await loadWeb3();
      console.log("Account=", acc);
      setButtonText(acc);
      setAccount(acc);
    } catch (e) {
      console.log("Error while getting user Address");
    }
  };

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

    for (let i = sumInitLimitfil; i < sumLimitfil; i++) {
      // console.log(`myFilteredLocalData${i}`, myFilteredLocalData[i]);
      dummayArrfil = [...dummayArrfil, myFilteredLocalData[i]];
    }
    setsumInitLimitfil(sumInitLimitfil + 12);
    setsumLimitfil(sumLimitfil + 12);
    console.log("DummyArray from Filterd Data", dummayArrfil);
    setImageArray(dummayArrfil);
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

  const handleFilter = (param) => {
    const updatedItems = items.filter((x) => {
      let n = x.attributes.filter((a) => a.trait_type === param);
      return n.length > 0;
    });
    setFilterItems(updatedItems);
  };

  // const handleFilter = (param) => {
  //   console.log("Image rrasdfasd1", imageArray);
  //   dummayArrfil.length = 0;
  //   console.log("Image rrasdfasd2", dummayArrfil);

  //   window.localStorage.clear();
  //   setPrefixing(true);
  //   console.log("for loop", param);

  //   const updatedItems = Data.filter((curElem) => {
  //     // console.log("curElem", curElem);
  //     for (var i = 0; i < curElem.attributes.length; i++) {
  //       if (curElem.attributes[i].trait_type === param) {
  //         return curElem.attributes[i].trait_type === param;
  //       }
  //     }
  //   });
  //   // console.log("Updated Item Length", updatedItems.length);
  //   if (updatedItems.length >= 1) {
  //     if (updatedItems.length < 9000) {
  //       console.log("sent to Local Storage", dummayArrfil.length);
  //       window.localStorage.setItem(
  //         "myLocalData",
  //         JSON.stringify(updatedItems)
  //       );
  //       setImageArrayLength(updatedItems.length);
  //       // setImageArray(updatedItems);
  //       // console.log("updated items", updatedItems);
  //       getImages();
  //     } else {
  //       console.log(" Local Storage set to Null");

  //       window.localStorage.setItem("myLocalData", JSON.stringify(null));
  //       setImageArrayLength(updatedItems.length);
  //       getImages();
  //     }
  //   } else {
  //     // console.log("No Data found Agains this trait type");
  //     console.log("hahhaha bro no images try again");

  //     setImageArrayLength(0);
  //   }
  // };
  const reloadAll = (param) => {
    window.localStorage.clear();
    // localStorage.clear();
    getImages();
  };

  const increaseLimit = () => {
    let l = 12;
    console.log("limit after scroll", l + 12);
    let length = filterItems.length;
    if (arrSliceLimit < length) {
      setarrSliceLimit((arrSliceLimit) => arrSliceLimit + 12);
    }
  };
  //Search Feature needs to be fixed....

  const handleScroll = (e) => {
    console.log("Scrolling");
    // setShowLoading(true);
    let winTop = e.target.documentElement.scrollTop;
    let winHeight = window.innerHeight;
    let scrollHeight = e.target.documentElement.scrollHeight;
    let sumHeight = parseInt(winTop) + parseInt(winHeight) + 60;
    // console.log("sumHeight", limit, sumHeight, scrollHeight);

    if (sumHeight + 1 >= scrollHeight) {
      increaseLimit();
      console.log("calling function on scrolling");
    }
  };

  const getMyNfts = async () => {
    try {
      if (account == "No Wallet") {
        setButtonText("Connect Wallet");
        console.log("Not Connected");
      } else if (account == "Wrong Network") {
        setButtonText("Wrong Network");
        console.log("Not Connected");
      } else if (account == "Connect Wallet") {
        setButtonText(account);
        console.log("Not Connected");
      } else {
        let dummy = [];
        const web3 = window.web3;
        const contractOf = new web3.eth.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        let totaNftIds = await contractOf.methods.walletOfOwner(account).call();
        for (let i = 0; i < totaNftIds.length; i++) {
          console.log("totaNftIdds", totaNftIds[i]);
          let d = items.filter((e) => e.edition == totaNftIds[i]);
          dummy = [...dummy, d];
          console.log("filtered =", d);
        }
        setmyNftArray(dummy);
      }
    } catch (e) {
      console.log("error while getting nfts", e);
    }
  };

  useEffect(() => {
    setInterval(() => {
      // setarrSliceLimit((arrS liceLimit) => arrSliceLimit + 12);
    }, 1500);
    // window.localStorage.clear();
    getImages();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleSearch = () => {
    let value = searchItembyEdition.current.value;
    let d = items.filter((e) => e.edition == value);
    setFilterItems(d);
  };

  useEffect(() => {
    getMyNfts();
  }, [account]);

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
                              <button
                                onClick={() => handleFilter("Background")}
                              >
                                Background
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Clothing")}>
                                Clothing
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Earrings")}>
                                Earrings
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Eye color")}>
                                Eye color
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Glasses")}>
                                Glasses
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Hand")}>
                                Hand
                              </button>
                            </li>
                            <hr />
                            {/* <li>
                              <button onClick={() => handleFilter("Hat")}>
                                Hat
                              </button>
                            </li>
                            <hr /> */}
                            <li>
                              <button onClick={() => handleFilter("Lips")}>
                                Lips
                              </button>
                            </li>
                            <hr />
                            {/* <li>
                              <button onClick={() => handleFilter("Mask")}>
                                Mask
                              </button>
                            </li>
                            <hr /> */}
                            <li>
                              <button
                                onClick={() => handleFilter("Neck jewelry")}
                              >
                                Neck jewelry
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Skin")}>
                                Skin
                              </button>
                            </li>
                            <hr />
                            <li>
                              <button onClick={() => handleFilter("Wings")}>
                                Wings
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-9 main-gallery">
                      <div className="head d-flex justify-content-between">
                        <div className="total">{filterItems.length} items</div>
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
                              onClick={handleSearch}
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
                            {/* <InfiniteScroll
                              dataLength={filterItems.length}
                              next={20}
                              hasMore={true}
                              loader={<h4>Loading...</h4>}
                            > */}
                            {filterItems
                              .slice(0, arrSliceLimit)
                              .map((post, i) => {
                                // console.log("post mage", post.image);
                                return (
                                  <div
                                    className="col-6 col-sm-4 col-md-4 image-box"
                                    key={post.dna}
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
                            {/* </InfiniteScroll> */}

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
                    <div className="col-12   text-center py-5">
                      <div className="row gallery-items d-flex text-center pt-5">
                        {myNftArray.map((post) => {
                          console.log("post image myNft ", myNftArray);
                          console.log("post imaes,", post[0].name);
                          return (
                            <div
                              className="col-6 col-sm-4 col-md-4 image-box"
                              key={post[0].dna}
                            >
                              <img
                                src={post[0].image}
                                className="lazyload img img-fluid"
                                alt="NO:ZE"
                                loading="lazy"
                              />

                              <h5 className="image-name py-2">
                                {post[0].name}
                              </h5>
                            </div>
                          );
                        })}
                      </div>

                      {/* <p>
                        Please connect your wallet to view your BerryClub NFTs.
                      </p> */}
                      <button
                        onClick={() => getWalletAddress()}
                        className="connect-wallet mt-4"
                      >
                        {buttonTxt}
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
