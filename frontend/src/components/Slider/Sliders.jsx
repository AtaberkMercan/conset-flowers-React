import React from 'react'
import "./Sliders.css"
const Sliders = () => {
  return (
      <section className="slider">
    <div className="slider-elements">
      <div className="slider-item ">
        <div className="slider-image">
          <img src="img/slider/flowers.png" className="img-fluid" alt="Conset Flower Ana Resim"/>
        </div>
        <div className="container">
          <p className="slider-title">SİZE ÖZEL ÇİÇEKLER</p>
          <h2 className="slider-heading">%70'e Varan İndirim Conset Flowersta</h2>
          <a href="#" className="btn btn-lg btn-primary">DAHA FAZLA BİLGİ</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Sliders