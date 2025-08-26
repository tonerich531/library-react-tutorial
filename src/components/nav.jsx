import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
    return (
        <nav>
            <div className="nav__container">
                <a href="/">
                    <img src="" alt="" />                
                </a>
                ul.nav__links
                    li.nav__link
                        a href="/" className="nav__list"
                            Home
                        a
                    li.nav__link
                        a href="/" className="nav__list"
                            Library
                        a
                    li.nav__link
                        a href="/" className="nav__list"
                            About
                        a
                    <button className="btn__menu">
                        <FontAwesomeIcon icon = {faBars} />
                    </button>                    
                ul
            </div>
        </nav>
    );
}

export default Nav;