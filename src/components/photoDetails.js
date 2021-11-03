import React from "react";
import './photoDetails.css';

const PhotoDetails = (props) => {
    
    return (
        <div className="photo-caption">
            <p>{props.caption}</p>
        </div>
    )
}

export default PhotoDetails;