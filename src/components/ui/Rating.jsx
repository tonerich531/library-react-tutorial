import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../components/ui/Rating.jsx";


const Rating  () => {
    return (
        <div className="book__rating">            
            {new Array(Math.floor(rating)).fill(0).map((_, index) => (
                <FontAwesomeIcon icon= "star" key={index} />
            ))}

            {!Number.isInteger(rating) && (
                <FontAwesomeIcon icon= "star-half-alt" />                
            )}
            
        </div>
    );    
}

export default Rating;