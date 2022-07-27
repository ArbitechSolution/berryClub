import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header";
import Home from "./pages/Home";
import Minting from "./pages/Minting";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Gallery from "./pages/Gallery";
import PublicSale from "./pages/PublicSale";
import NoPage from "./pages/NoPage";
import CreatingModal from "./Component/modal/creatingModal";
import AirDrop from "./Component/AirDrop/AirDrop";
import RandomBox from "./Component/Random-Box/RandomBox";
import Footer from "./Component/Footer";
import Stake from "./Component/Stake-Breed/Stake";
export default function App() {
  return (
    <div>
      <ToastContainer />{" "}
   
      {/* <CreatingModal /> */}
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/minting" element={<Minting />} />
          <Route path="/public-sale" element={<PublicSale />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/airdrop" element={<AirDrop/>}/>
          <Route path="/RandomBox" element={<RandomBox/>}/>
       <Route path="/stake" element={<Stake/>}/>
        </Route>
      </Routes>

    
    </div>
  );
}
