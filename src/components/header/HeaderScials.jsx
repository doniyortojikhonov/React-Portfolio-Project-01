import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderScials = () => {
    return (
        <div className="header__socials">
            <a target="_blank" href="https://linkedin.com">
                <BsLinkedin />
            </a>
            <a target="_blank" href="https:/github.com">
                <FaGithub />
            </a>
            <a target="_blank" href="https:/dribbble.com">
                <FiDribbble />
            </a>
        </div>
    );
};

export default HeaderScials;
