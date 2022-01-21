import React from "react";
import styled from 'styled-components';

const StyledDetails = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    p {
    width: 60%;
    display:inline-block;
    line-height: 1.5;
    text-align:center;
    }
    
`


const PhotoDetails = (props) => {
    return (
        <StyledDetails>
            <p>{props.caption}</p>
        </StyledDetails>
    );
}

export default PhotoDetails;