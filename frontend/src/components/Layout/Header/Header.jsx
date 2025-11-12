import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <header>
            <div className="global-notification">

            </div>
            <div className="header-row">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-mobile">
                            <i className="bi bi-list" id="btn-menu"></i>
                        </div>
                        <div className="header-left">
                            <a href="index.html" className="logo">
                                <img
                                    src="/img/logo.png"
                                    alt="Çiçekçi Dükkanı Logo"
                                    style={{
                                        width: '220px',     
                                        height: 'auto',     
                                        display: 'block',    
                                        margin: '0 auto',   
                                        cursor: 'pointer'    
                                    }}
                                />
                            </a>
                        </div>
                        <div className="header-center" id="sidebar">
                            <nav className="navigation">
                                <ul className="menu-list">
                                    <li className="menu-list-item">
                                        <a href="index.html" className="menu-link active">
                                            Ana Sayfa
                                        </a>
                                    </li>
                                    <li className="menu-list-item megamenu-wrapper">
                                        <a href="shop.html" className="menu-link">
                                            Mağaza
                                        </a>
                                    </li>
                                    <li className="menu-list-item">
                                        <a href="blog.html" className="menu-link">
                                            Blog
                                        </a>
                                    </li>
                                    <li className="menu-list-item">
                                        <a href="contact.html" className="menu-link">
                                            İletişim
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <i className="bi-x-circle" id="close-sidebar"></i>
                        </div>
                        <div className="header-right">
                            <div className="header-right-links">
                                <a href="account.html" className="header-account">
                                    <i className="bi bi-person"></i>
                                </a>
                                <button className="search-button">
                                    <i className="bi bi-search"></i>
                                </button>
                                <a href="#">
                                    <i className="bi bi-heart"></i>
                                </a>
                                <div className="header-cart">
                                    <a href="cart.html" className="header-cart-link">
                                        <i className="bi bi-bag"></i>
                                        <span className="header-cart-count">0</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header