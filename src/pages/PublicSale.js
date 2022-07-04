import './PublicSale.css';
import Footer from '../Component/Footer';
import PublicSaleImg from '../media/public-sale.png';
import Girl from '../media/girl.png';

const PublicSale = () => {
    return (

        <>
            <section id="public-sale">
                <div className="container">
                    <div className="row">
                        <div className="section-title text-center">
                            <h2>MINTING</h2>
                            <img src={PublicSaleImg} alt="" className='pt-3' />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center mt-5">
                        <div className='col-md-8 ps-box'>
                            <div className='row'>
                                <div className="col-md-4 text-center">
                                    <div className="ps-mint-box">
                                        <img src={Girl} alt="" width="400px" />
                                        <div className='row'>
                                            <div class="input-group  mt-4 col-12">
                                                <button class="btn" type="button" id="" style={{ color: "#595959", fontWeight: "700" }}>-</button>
                                                <input type="text" class="form-control number" placeholder="1" value="1" />
                                                <button class="btn" type="button" id="" style={{ color: "#595959" }}>+</button>
                                                <span class="input-group-text form-control">3 max</span>
                                            </div>
                                            <hr class="my-3" />
                                        </div>

                                        <div class="total text-white">
                                            <span class="text">Total</span>
                                            <span class="value">0.00 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8  col-info">
                                    <div className="ps-info-box">
                                        <div className="box-head">
                                            <span className="text fw-bold">Price per Card</span>
                                            <span className="value" style={{ fontWeight: "700" }}>0.00 ETH</span>
                                        </div>

                                        <div className="box-body text-center">
                                            <div className="content">
                                                <h4>Join the Minting right now!</h4>
                                                <p>You can participate in Minting by connecting wallet and pressing Mint button.</p>
                                                <p>The number of transitions per person is limited to 10, and sanctions can be imposed without additional guidance if bot actions are detected.</p>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-7 col-12 mt-2'>
                                                    <div className="d-grid gap-2">
                                                        <button className='btn btn-connect' size="lg">
                                                            CONNECT WALLET
                                                        </button>

                                                    </div>
                                                </div>
                                                <div className='col-md-5 col-12 mt-2'>
                                                <div className="d-grid gap-2">
                                                        <button className='btn btn-Mint' size="lg">
                                                            Mint
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="buttons">
                                                {/* <button className="connect m-1">Connect</button>
                                                <button className="mint m-1">Mint</button> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-4 text-center">
                        <div className="ps-mint-box">
                            <img src={Girl} alt="" />
                                <div class="input-group py-2 mt-4">
                                    <button class="btn-minus" type="button" id="">-</button>
                                    <input type="text" class="form-control number" placeholder="1" value="1" />
                                    <button class="btn-plus" type="button" id="">+</button>
                                    <span class="input-group-text form-control">3 max</span>
                                </div>
                                <hr class="my-3" /> 
                                
                                <div class="total text-white">
                                    <span class="text">Total</span>
                                    <span class="value">0.00 ETH</span>
                                </div>
                        </div>
                    </div> */}
                        {/* <div className="col-md-8 offset-md-1 col-info">
                        <div className="ps-info-box">
                            <div className="box-head">
                                 <span className="text fw-bold">Price per Card</span>
                                <span className="value">0.00 ETH</span>
                            </div>
                       
                            <div className="box-body text-center">
                                <div className="content">
                                    <h4>Join the Minting right now!</h4>
                                    <p>You can participate in Minting by connecting wallet and pressing Mint button.</p>
                                    <p>The number of transitions per person is limited to 10, and sanctions can be imposed without additional guidance if bot actions are detected.</p>
                                </div>
                                <div className="buttons">
                                    <button className="connect m-1">Connect</button>
                                    <button className="mint m-1">Mint</button>
                                </div>
                            </div>
                        </div>
                       
                    </div> */}
                    </div>
                </div>

            </section>
            <Footer />
        </>
    );
};

export default PublicSale;
