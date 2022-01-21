import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.div`
    background-color: ${props => props.theme.secondaryColor};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2%;

    h1 {
        font-style: italic;
    }
`
const BoldSpan = styled.span`
    font-weight: bold;
    text-decoration: underline;
    background-color: ${p => p.theme.primaryColor};
`

const Header = (props) => {
    return (
        <HeaderStyled>
            <p>Displayed photo from: <BoldSpan>{props.date}</BoldSpan></p>
            <h1>🚀🚀 NASA Photo of the Day! 🚀🚀</h1>
            <a href="https://www.nasa.gov" target="_blank">Nasa's Website!</a>
        </HeaderStyled>
    )
}

export default Header;