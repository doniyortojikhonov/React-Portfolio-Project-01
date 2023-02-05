import React from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderScials from "./HeaderScials";
import ME from "../../assests/me.png";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Hajia Bintu</h1>
                <h5 className="text-light">FullStack Developer</h5>
                <CTA />
                <HeaderScials />
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
