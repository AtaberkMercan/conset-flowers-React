import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="subscribe-row">
                <div className="container">
                    <div className="footer-row-wrapper">
                        <div className="footer-subscribe-wrapper">
                            <div className="footer-subscribe">
                                <div className="footer-subscribe-top">
                                    <h3 className="subscribe-title">Sorularınız, özel siparişleriniz veya önerileriniz için her zaman yanınızdayız.</h3>
                                    <p className="subscribe-desc"> Sizden haber almak bizi mutlu eder!</p>
                                </div>
                                <div className="footer-subscribe-bottom">
                                    <form>
                                        <input type="text" placeholder="Enter your email address." />
                                        <button className="btn">Gönder</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact-wrapper">
                            <div className="footer-contact-top">
                                <h3 className="contact-title">
                                    Yardıma ihtiyacınız mı var? <br />
                                    (+90) 123 456 78 90
                                </h3>
                                
                            </div>
                            <div className="footer-contact-bottom">
                                <div className="download-app">
                                    <a href="#">
                                        <img src="img/footer/app-store.png" alt="Conset Flower Uygulaması" />
                                    </a>
                                    <a href="#">
                                        <img src="img/footer/google-play.png" alt="Conset Flower Uygulaması" />
                                    </a>
                                </div>
                                <p className="privacy-text">
                                    <strong>Mobil Uygulamamızı İndirin:</strong> Mobil uygulamamızı keşfedin.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widgets-row">
                <div className="container">
                    <div className="footer-widgets">
                        <div className="brand-info">
                            <div className="footer-logo">
                                <a href="index.html" className="logo">LOGO</a>
                            </div>
                            <div className="footer-desc">
                                <p> Doğanın en güzel renklerini ve kokularını sizinle buluşturmak için buradayız. Taze çiçekler, şık aranjmanlar ve özel buketlerle sevdiklerinize unutulmaz sürprizler hazırlayabilirsiniz.</p>
                            </div>
                            <div className="footer-contact">
                                <p>
                                    <a href="tel:555 555 55 55">(+800) 1234 5678 90</a> – <a
                                        href="mailto:info@example.com">info@example.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="widget-nav-menu">
                            <h4>Bilgi</h4>
                            <ul className="menu-list">
                                <li>
                                    <a href="#">Hakkımızda</a>
                                </li>
                                <li>
                                    <a href="#">Gizlilik Politikası</a>
                                </li>
                                <li>
                                    <a href="#">İade Politikası</a>
                                </li>
                                <li>
                                    <a href="#">Kargo Politikası</a>
                                </li>
                            </ul>
                        </div>

                        <div className="widget-nav-menu">
                            <h4>Mağaza</h4>
                            <ul className="menu-list">
                                <li>
                                    <a href="#">Çok Satanlar</a>
                                </li>
                                <li>
                                    <a href="#">İndirim</a>
                                </li>
                                <li>
                                    <a href="#">En Yeni Ürünler</a>
                                </li>
                                <li>
                                    <a href="#">İndirimli Ürünler</a>
                                </li>
                            </ul>
                        </div>
                        <div className="widget-nav-menu">
                            <h4>Kategoriler</h4>
                            <ul className="menu-list">
                                <li>
                                    <a href="#">Güller</a>
                                </li>
                                <li>
                                    <a href="#">Laleler</a>
                                </li>
                                <li>
                                    <a href="#">Orkideler</a>
                                </li>
                                <li>
                                    <a href="#">Ayçiçekleri</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-row">
                <div className="container">
                    <div className="footer-copyright">
                        <div className="site-copyright">

                        </div>
                        <a href="#">
                            <img src="img/footer/cards.png" alt="Conset Flower Ödeme Yöntemleri" />
                        </a>
                        <div className="footer-menu">
                            <ul className="footer-menu-list">
                                <li className="list-item">
                                    <a href="#">Gizlilik Politikası</a>
                                </li>
                                <li className="list-item">
                                    <a href="#">İade Koşulları</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer