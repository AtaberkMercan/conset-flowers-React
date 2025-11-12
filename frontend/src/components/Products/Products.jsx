import React from 'react'
import "./Products.css"

const Products = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="section-title">
                    <h2>Öne Çıkan Çiçekler</h2>
                    <p>Modern Koleksiyonumuz</p>
                </div>
                <div className="product-wrapper product-carousel">
                    <div className="glide__track" data-glide-el="track">
                        <ul className="product-list glide__slides" id="product-list">
                            <li className="product-item glide__slide glide__slide--active">
                                <div className="product-image">
                                    <a href="#">
                                        <img src="img/products/product1/floweritem.png" alt="Conset Flower Güller" className="img1" />
                                        <img src="img/products/product1/floweritem.png" alt="Conset Flower Güller" className="img2" />
                                    </a>
                                </div>
                                <div className="product-info">
                                    <a href="$" className="product-title">
                                        Gül Çeşitleri
                                    </a>
                                    <ul className="product-star">
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-half"></i>
                                        </li>
                                    </ul>
                                    <div className="product-prices">
                                        <strong className="new-price">108.00 TL</strong>
                                        <span className="old-price">165.00 TL</span>
                                    </div>
                                    <span className="product-discount">-22%</span>
                                    <div className="product-links">
                                        <button className="add-to-cart">
                                            <i className="bi bi-basket-fill"></i>
                                        </button>
                                        <button>
                                            <i className="bi bi-heart-fill"></i>
                                        </button>
                                        <a href="#" className="product-link">
                                            <i className="bi bi-eye-fill"></i>
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-share-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="product-item glide__slide glide__slide--active">
                                <div className="product-image">
                                    <a href="#">
                                        <img src="img/products/product2/floweritem2.png" alt="Conset Flower Papatyalar" className="img1" />
                                        <img src="img/products/product2/floweritem2.png" alt="Conset Flower Papatyalar" className="img2" />
                                    </a>
                                </div>
                                <div className="product-info">
                                    <a href="$" className="product-title">
                                        Papatya Çeşitleri
                                    </a>
                                    <ul className="product-star">
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-half"></i>
                                        </li>
                                    </ul>
                                    <div className="product-prices">
                                        <strong className="new-price">108.00 TL</strong>
                                        <span className="old-price">165.00 TL</span>
                                    </div>
                                    <span className="product-discount">-22%</span>
                                    <div className="product-links">
                                        <button className="add-to-cart">
                                            <i className="bi bi-basket-fill"></i>
                                        </button>
                                        <button>
                                            <i className="bi bi-heart-fill"></i>
                                        </button>
                                        <a href="#" className="product-link">
                                            <i className="bi bi-eye-fill"></i>
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-share-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="product-item glide__slide glide__slide--active">
                                <div className="product-image">
                                    <a href="#">
                                        <img src="img/products/product3/floweritem3.png" alt="Conset Flower Laleler" className="img1" />
                                        <img src="img/products/product3/floweritem3.png" alt="Conset Flower Laleler" className="img2" />
                                    </a>
                                </div>
                                <div className="product-info">
                                    <a href="$" className="product-title">
                                        Lale Çeşitleri
                                    </a>
                                    <ul className="product-star">
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-fill"></i>
                                        </li>
                                        <li>
                                            <i className="bi bi-star-half"></i>
                                        </li>
                                    </ul>
                                    <div className="product-prices">
                                        <strong className="new-price">108.00 TL</strong>
                                        <span className="old-price">165.00 TL</span>
                                    </div>
                                    <span className="product-discount">-22%</span>
                                    <div className="product-links">
                                        <button className="add-to-cart">
                                            <i className="bi bi-basket-fill"></i>
                                        </button>
                                        <button>
                                            <i className="bi bi-heart-fill"></i>
                                        </button>
                                        <a href="#" className="product-link">
                                            <i className="bi bi-eye-fill"></i>
                                        </a>
                                        <a href="#">
                                            <i className="bi bi-share-fill"></i>
                                        </a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                    <div className="glide__arrows" data-glide-el="controls">
                        <button className="glide__arrow glide__arrow--left">
                            <i className="bi bi-chevron-left"></i>
                        </button>
                        <button className="glide__arrow glide__arrow--right">
                            <i className="bi bi-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products