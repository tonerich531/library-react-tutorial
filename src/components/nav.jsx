import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/Library.svg";




const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src={LibraryLogo} className="logo" alt="" />
                </a>
                <ul className= "nav__links">
                    <li className= "nav__link">
                        <a href="/" className="nav__list">
                            Home
                        </a>
                    </li>
                    <li className= "nav__link">
                        <a href="/" className="nav__list">
                            Library
                        </a>
                    </li>
                    <li className= "nav__link">
                        <a href="/" className="nav__list">
                            About
                        </a>
                    </li>
                    <button className="btn__menu">
                        <FontAwesomeIcon icon = {faBars} />
                    </button>
                    <li className= "nav__icon">
                        <a href="/cart" className="nav__link">
                        <FontAwesomeIcon icon= "shopping-cart" />
                        </a>
                        <span className="cart__length">2</span>
                    </li>                
                </ul>
                <div className="menu__backdrop">
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon = {faTimes} />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__link">
                            <a href="/" className="menu__list">
                                Home
                            </a>
                        </li>
                        <li className="menu__link">
                            <a href="/" className="menu__list">
                                Books
                            </a>
                        </li>
                        <li className="menu__link">
                            <a href="/cart" className="menu__list">
                                Cart
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;