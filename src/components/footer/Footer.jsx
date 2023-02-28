import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <footer id="footer">
            <a href="#" className="footer__logo">
                DONIK
            </a>

            <ul className="permalinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#services">Services</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a target="_blank" href="https://facebook.com">
                    <FaFacebookF />
                </a>
                <a target="_blank" href="https://github.com/doniyortojikhonov">
                    <BsGithub />
                </a>
                <a
                    target="_blank"
                    href="https://www.linkedin.com/in/doniyor-tojikhonov-2ab5b3205/"
                >
                    <FaLinkedinIn />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Doniyor Tojikhonov. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;
