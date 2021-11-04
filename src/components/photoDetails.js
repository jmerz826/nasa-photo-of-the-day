import React from "react";
import styled from 'styled-components';

const StyledDetails = styled.div`
    p {
    display: inline-block;
    width: 60%;
    line-height: 1.5;
    text-align:center;
    }

`


const PhotoDetails = (props) => {
    
    return (
        <StyledDetails>
            <p>{props.caption}</p>
        </StyledDetails>
    )
}

export default PhotoDetails;