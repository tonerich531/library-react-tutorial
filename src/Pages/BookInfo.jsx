import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"
import { faStar } from "@fortawesome/free-solid-svg-icons";


const BookInfo = ({ books }) => {
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to= "/books" className="book__link">
                                <FontAwesomeIcon icon = "arrow-left" />
                            </Link>
                            <Link to="/book" className='book__link'>
                            <h2 className="book__selected--title--top">
                                Book</h2>                                                           
                            </Link>
                            <div className="book__selected">
                                <figure className="book__selected--figure">
                                    <img src="" alt="" />
                                </figure>
                                <div className="book__selected--description">
                                    <h2 className="book__selected--title">
                                        <FontAwesomeIcon icon="star" m/>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default BookInfo;