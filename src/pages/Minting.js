import "./Minting.css";
import Footer from "../Component/Footer";
import PrivateSale from "../media/private-sale.png";
import Girl from "../media/girl.png";
import { useTranslation } from "react-i18next";
import { loadWeb3 } from ".././Component/Api/api";
const Minting = () => {
  let [t, i18n] = useTranslation();
  // let [account, setAccount] = useState();
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
              <button className="mint-btn">MINT</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Minting;
