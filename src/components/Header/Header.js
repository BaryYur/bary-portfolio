import React, { useContext, useState } from "react";

import MainContext from "../../context/main-context";

import AOS from "aos";
import "aos/dist/aos.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./Header.css";
import heroImg from "../../images/hero-image.png";

const Header = () => {
    const mainCtx = useContext(MainContext);
    const [activeLink, setActiveLink] = useState("home");

    const scrollToSection = (section) => {
        const element = document.getElementById(section);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <div className="main-header" id="top">
            <header className={mainCtx.themeName === "business" ? "dark-header" : ""}>
                <div className="header-wrapper">
                    <div className="logo">LOGO</div>
                    <nav>
                        <ul>
                            <li>
                                <button
                                    className={activeLink === "home" ? "active main-link" : "main-link"}
                                    onClick={() => {
                                        scrollToSection("top");
                                        onUpdateActiveLink("home");
                                    }}
                                >Home</button>
                            </li>
                            <li>
                                <button
                                    className={activeLink === "skills" ? "active main-link" : "main-link"}
                                    onClick={() => {
                                        scrollToSection("skills");
                                        onUpdateActiveLink("skills");
                                    }}
                                >Skills</button>
                            </li>
                            <li>
                                <button
                                    className={activeLink === "about" ? "active main-link" : "main-link"}
                                    onClick={() => {
                                        scrollToSection("about");
                                        onUpdateActiveLink("about");
                                    }}
                                >About</button>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/yura-baryshev-012125266/" target="_blank">
                                    <LinkedInIcon />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <TelegramIcon />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/BaryYur" target="_blank">
                                    <GitHubIcon />
                                </a>
                            </li>
                            <li>
                                <button
                                    title="Change theme"
                                    onClick={() => {
                                        mainCtx.themeName === "light" ?
                                            mainCtx.htmlTag.setAttribute("data-theme","business") :
                                            mainCtx.htmlTag.setAttribute("data-theme","light");
                                        mainCtx.changeTheme();
                                    }}
                                >
                                    {mainCtx.themeName === "business" ? <LightModeIcon className="light-icon" /> : <DarkModeIcon className="dark-icon" />}
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="hero-container">
                <div className="hero-titles">
                    <h2>Welcome to my Portfolio</h2>
                    <h1>Hi, I'm Yura</h1>
                    <h3>Frontend developer</h3>
                    <p>Lorem ipsum, lorem ipsum</p>
                </div>
                <div>
                    <img data-aos="zoom-in-up" src={heroImg} />
                </div>
            </div>
        </div>
    );
}

export default Header;


AOS.init({
    // Global settings:
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50,
    delay: 0,
    duration: 800,
    easing: "ease",
    once: true,
    mirror: false,
    anchorPlacement: "top-bottom",
});