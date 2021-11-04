import React from "react";
import '../App.css';
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding:2%;
  margin-top: 5%;
  background-color: ${p => p.theme.tertiaryColor};
  color: white;
`

const Footer = (props) => {
    return (
        <StyledFooter>
            Copyright: {props.copyright}
        </StyledFooter>
    )
}

export default Footer;