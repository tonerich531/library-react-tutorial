import React from "react";
import Logo from "../assets/Library.svg"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row row__column">
                    <a href="/">
                        <figure className="footer__logo">
                            <img src={Logo} className="footer__logo--img" alt="" />
                        </figure>
                    </a>
                    <div className="footer__list">
                        <a href="/" className="footer__link">Home</a>
                        <a href="/" className="footer__link nocursor">About</a>
                        <a href="/books" className="footer__link nocursor">Books</a>
                        <a href="/cart" className="footer__link">Cart</a>
                    </div>
                    <div className="footer__copyright">
                        Copyright &copy; 2021 Library
                    </div>
                </div>
            </div>
        </footer>
    );
    
}

export default Footer;