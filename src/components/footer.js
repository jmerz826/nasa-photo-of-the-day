import React from "react";
import '../App.css';

const Footer = (props) => {
    return (
        <footer>
            Copyright: {props.copyright}
        </footer>
    )
}

export default Footer;