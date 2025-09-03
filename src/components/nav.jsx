import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, } from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/Library.svg";
import { Link } from 'react-router-dom'




const Nav = () => {
    function openMenu() {
        document.body.classList += "menu--open"
    }

    function closeMenu() {
        document.body.classList.remove("menu--open");
    }
    return (
        <nav>
            <div className="nav__container">
                <Link to="/">
                    <img src={LibraryLogo} className="logo" alt="" />
                </Link>
                <ul className= "nav__links">
                    <li className= "nav__link">
                        <Link to="/" className="nav__list">
                            Home
                        </Link>
                    </li>
                    <li className= "nav__link">
                        <Link to="/books" className="nav__list">
                            Books
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon = {faBars} />
                    </button>
                    <li className= "nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon= "shopping-cart" />
                        </Link>
                        <span className="cart__length">2</span>
                    </li>                
                </ul>
                <div className="menu__backdrop" onClick={closeMenu}>
                    <button className="btn__menu btn__menu--close">
                        <FontAwesomeIcon icon = {faTimes} />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__link">
                            <Link to="/" className="menu__list">
                                Home
                            </Link>
                        </li>
                        <li className="menu__link">
                            <Link to="/books" className="menu__list">
                                Books
                            </Link>
                        </li>
                        <li className="menu__link">
                            <Link to="/cart" className="menu__list">
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;