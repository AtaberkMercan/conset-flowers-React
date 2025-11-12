import React from 'react'
import "./Policy.css"
const Policy = () => {
  return (
      <section className="policy">
    <div className="container">
      <ul className="policy-list">
        <li className="policy-item">
          <i className="bi bi-truck"></i>
          <div className="policy-texts">
            <strong>ÜCRETSİZ KARGO</strong>
            <span> 100TL ve üzeri</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-headset"></i>
          <div className="policy-texts">
            <strong>Destek 24/7</strong>
            <span>24 Saat </span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-arrow-clockwise"></i>
          <div className="policy-texts">
            <strong> GERİ İADE</strong>
            <span>24 saat içerisinde iade</span>
          </div>
        </li>
        <li className="policy-item">
          <i className="bi bi-credit-card"></i>
          <div className="policy-texts">
            <strong> ÖDEME YÖNTEMİ </strong>
            <span>Güvenli Ödeme</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
  )
}

export default Policy