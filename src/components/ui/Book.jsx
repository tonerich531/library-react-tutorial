import React from "react";
import { Link } from "react-router-dom"
import Rating from "./Rating";
import Price from "./Price";



const Book = ({ book }) => {
function imageLoad() {

}

   
    return (
       <div className="book">
            <Link to={`/books/${book.id}`}>
                <figure className="book__img--wrapper">
                    <img src={ book.url } className="book__img" alt="" onLoad={imageLoad} />
                </figure>
            </Link>
            <div className="book__title">
                <Link to={`/books/${book.id}`} className="book__title--link">
                    {book.title}
                </Link>
            </div>
            <div className="book__ratings">
                <Rating rating={book.rating} />
            </div>
            <div className="book__price">
                <Price salePrice={book.saleprice} originalPrice={book.originalPrice} />
            </div>
        </div>
    );
};

export default Book;