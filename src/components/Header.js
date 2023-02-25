import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Header.css";
import heroImg from "../images/hero-image.jpg";

const Header = () => {
    return (
        <div className="main-header">
            <header>
                <div className="header-wrapper">
                    <div className="logo">LOGO</div>
                    <nav>
                        <ul>
                            <li>
                                <a className="main-link" href="">Home</a>
                            </li>
                            <li>
                                <a className="main-link" href="">Skills</a>
                            </li>
                            <li>
                                <a className="main-link" href="">About</a>
                            </li>
                            <li>
                                <a href="">
                                    <LinkedInIcon fontSize="large" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <TelegramIcon fontSize="large" />
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="hero-container">
                    <div>
                        <h1>Welcome to my portfolio</h1>
                    </div>
                    <div>
                        <img src={heroImg} />
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;