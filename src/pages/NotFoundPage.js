import React from "react";

import { Link } from "react-router-dom";

import "./NotFoundPage.css";
import notFoundImage from "../images/not-found-page-image.jpg";

const NotFoundPage = () => {
    return (
        <div className="not-found-page-container">
            <img src={notFoundImage} alt="not-found-img" />
            <Link to="/bary-portfolio">Back to home page</Link>
        </div>
    );
}

export default NotFoundPage;