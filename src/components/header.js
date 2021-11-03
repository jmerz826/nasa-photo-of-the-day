import React from "react";
import './header.css';

const Header = (props) => {
    return (
        <div className="header-container">
            <p>{props.date}</p>
            <h1>🚀🚀 NASA Photo of the Day! 🚀🚀</h1>
            <a href="https://www.nasa.gov" target="_blank">Nasa's Website!</a>
        </div>
    )
}

export default Header;