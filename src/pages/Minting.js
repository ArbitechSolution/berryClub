import { useEffect, useState } from "react";

import "./Minting.css";
import Footer from "../Component/Footer";
import PrivateSale from "../media/private-sale.png";
import toast, { Toaster } from "react-hot-toast";
import Girl from "../media/girl.png";
import { useTranslation } from "react-i18next";
import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../Component/Utils/BerryClub";

import { loadWeb3 } from ".././Component/Api/api";

const Minting = () => {
  let [t, i18n] = useTranslation();
  let [account, setAccount] = useState();

  const getWalletAddress = async () => {
    try {
      let acc = await loadWeb3();
      console.log("Account=", acc);
      setAccount(acc);
    } catch (e) {
      console.log("Error while getting user Address");
    }
  };
  const mintNfts = async () => {
    try {
      if (account == "No Wallet") {
        //   setBtTxt("Connect Wallet")
        console.log("Not Connected");
      } else if (account == "Wrong Network") {
        //   setBtTxt("Wrong Network")
        console.log("Not Connected");
      } else if (account == "Connect Wallet") {
        console.log("Not Connected");
      } else {
        const web3 = window.web3;
        let contractOf = new web3.eth.Contract(
          berryClubContractAbi,
          berryClubCntractAddress
        );
        let totaNftIds = await contractOf.methods.walletOfOwner(account).call();
        if (totaNftIds.length > 0) {
          console.log(" You have already performed minting");
          toast.error("You Have Performed minting already ", {
            position: "top-right",
          });
        } else {
          await contractOf.methods.claim_NFT().send({
            from: account,
          });
          toast.success("Transaction Successfull", {
            position: "top-right",
          });
        }
      }
    } catch (e) {
      console.log("Error While Minting", e);
      toast.error("Transaction Failed", {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    getWalletAddress();
  }, []);

  return (
    <>
      <section id="minting">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h2>MINTING</h2>
              <img src={PrivateSale} alt="" className="pt-3" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="ps-info-box">
                <img src={Girl} alt="" />
                <h4>{t("mintPara1")}</h4>
                <p>
                  {t("mintPara2")}
                  <a
                    className="anchorTags"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSebdQMsSC0QfFD3msXYLRr30C5i9zbzVYD2apyh_h6rJfAKfg/viewform"
                    target="_blank"
                  >
                    {t("mintPara3")}
                  </a>
                </p>
              </div>
              <button onClick={() => mintNfts()} className="mint-btn">
                MINT
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Minting;
