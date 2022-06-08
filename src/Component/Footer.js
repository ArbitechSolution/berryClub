import './Footer.css';
import { Outlet, Link } from "react-router-dom";
import Logo from '../media/logo.png';
import Twitter from '../media/twitter.png';
// import Telegram from '../media/telegram.png';
import Kakao from '../media/kakao.png';
import Discord from '../media/discord.png';

const Footer = () => {
    return (
        <>  
            <footer id="footer" data-aos="fade-down" data-aos-delay="100" data-aos-offset="0">
                <div className="container">
                    <div className="row">
                    <div className="col-md-3 d-flex justify-content-center align-items-center text-center"><a href="/" className="logo"><img src= { Logo } alt="" className="img-fluid" /></a></div>
                    <div className="col-md-6 py-3 py-md-0 text-center">
                        <p className="m-0"><a href="mailto:help@metacube.app">help@metacube.app</a></p>
                        <p className="m-0">&copy; 2022 METACUBE ALL RIGHTS RESERVED</p>
                    </div>
                    <div className="col-md-3 social">
                        <a href="https://twitter.com/crazyapegoongye" target="_blank" rel="noreferrer" className="twitter"><img src= { Twitter } alt="" /></a>
                        {/* <a href="https://t.me/+5VvQvVvtYIA2OTc9" target="_blank" rel="noreferrer" className="telegram"><img src= { Telegram } alt="" /></a> */}
                        <a href="https://open.kakao.com/o/gzwaZ0be" target="_blank" rel="noreferrer" className="kakao"><img src= { Kakao } alt="" /></a>
                        <a href="https://discord.gg/GJB55Rwbfe" target="_blank" rel="noreferrer" className="discord"><img src= { Discord } alt="" /></a> 
                    </div>
                    </div>
                </div>
            </footer>
            <Outlet />
        </>

    );
}

export default Footer;