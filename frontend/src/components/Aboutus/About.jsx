import React from 'react';
import "./About.css";

const About = () => {
  return (
    
    <section className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="img/logo.png" alt="Çiçeklerimiz" />
          </div>
          <div className="about-text">
            <h1 className="about-title">Doğadan İlham Alan Çiçekler</h1>
            <p>
              Mağazamız, en taze çiçekleri ve özel aranjmanlarıyla sizlere hizmet vermektedir. Her buket, sevgi ve özenle hazırlanır. 
              Düğünler, doğum günleri veya özel günler için size özel tasarımlar sunuyoruz. Çiçeklerimizle yaşam alanlarınıza renk, 
              mutluluk ve enerji katıyoruz.
            </p>
            <p>
              Bizim için çiçek sadece bir süs değil; bir duygudur. Her zaman taze, doğal ve kaliteli ürünlerle müşterilerimizin 
              beklentilerini karşılamayı amaçlıyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
