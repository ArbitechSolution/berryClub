import { useEffect, useState } from "react";

import "./Minting.css";
import Footer from "../Component/Footer";
import PrivateSale from "../media/private-sale.png";
import FREEMINTING from "../media/FREE MINTING.png"
import { toast } from "react-toastify";
import { whiteListingArray } from "./whiteList";
import Girl from "../media/girl.png";
import { useTranslation } from "react-i18next";
import {
  berryClubCntractAddress,
  berryClubContractAbi,
} from "../Component/Utils/BerryClub";

import { loadWeb3 } from ".././Component/Api/api";
import { getSignatureTest } from "../Component/Api/signature";

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

  const getSignature = async () => {
    const userAddress = await loadWeb3();
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
        console.log("totaNftIds", totaNftIds);

        if (totaNftIds.length > 0) {
          console.log(" You have already performed minting");
          toast.info("You Have already Performed minting. ");
        } else {
          let presalePrice = await contractOf.methods.PRE_SALE_PRICE().call();
          let userBalance = await web3.eth.getBalance(account);

          let signature = await getSignatureTest();
          console.log("nonce = ", signature[0]);
          console.log("signature = ", signature[1]);
          let findAdd = whiteListingArray.find((item) => {
            console.log("userAddress", account == item.address);
            if (account == item.address) {
              return item.address;
            }
          });
          console.log(" Found address", findAdd);

          if (findAdd) {
            let am = findAdd.amount;
            let totalprice = am * presalePrice;
            if (parseFloat(userBalance) > parseFloat(totalprice)) {
              console.log("totalprice", typeof totalprice.toString());
              console.log("am", am);

              await contractOf.methods
                .claim_NFT(am, signature[0], signature[1])
                .send({
                  value: totalprice.toString(),
                  from: account,
                });
              toast.success("Transaction Successfull");
            } else {
              toast.info("Insufficient Balance");
            }
          } else {
            toast.info("Alas! You are not WhiteListed");
          }
        }
      }
    } catch (e) {
      console.log("Error While Minting", e);
      toast.error("Transaction Failed");
    }
  };

  useEffect(() => {
    getWalletAddress();
    getSignature();
  }, []);

  return (
    <>
      <section id="minting">
        <div className="container">
          <div className="row">
            <div className="section-title text-center">
              <h2 className="text-white">MINTING</h2>

              <img src={FREEMINTING} alt="" className="pt-3" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <div className="ps-info-box">
                <img src={Girl} alt="" />
                <h4 className="text-white">{t("mintPara1")}</h4>
                {/* <p>
                  {t("mintPara2")}
                  <a
                    className="anchorTags"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSebdQMsSC0QfFD3msXYLRr30C5i9zbzVYD2apyh_h6rJfAKfg/viewform"
                    target="_blank"
                  >
                    {t("mintPara3")}
                  </a>
                </p> */}
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
