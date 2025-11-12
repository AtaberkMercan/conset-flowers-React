import React from 'react'
import "./Contact.css";
import { useState } from 'react';
import '@ant-design/v5-patch-for-react-19';
import { message } from 'antd';
const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:5000/api/contacts/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                message.success("İletişime Geçtiğiniz İçin Teşekkür Ederiz.");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: ""
                });

            } else {
                if (data.errors) {
                    if (data.errors.email) {
                        message.error(data.errors.email);
                    }
                    if (data.errors.name) message.error(data.errors.name);
                    if (data.errors.subject) message.error(data.errors.subject);
                    if (data.errors.message) message.error(data.errors.message);
                } else if (data.error) {
                    message.error(data.error);
                }
            }
        } catch (error) {
            console.log(error);
            message.error("Sunucu hatası. Daha sonra tekrar deneyin.");
        }
    };

    return (
        <section className="contact">
            <div className="contact-top">
                <div className="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9633698339308!2d28.929441087738052!3d41.04793012296828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab1d021adf417%3A0xba3a3fdfdbb5f5d!2sEy%C3%BCp%20Sultan%20Camii!5e0!3m2!1str!2str!4v1665091191675!5m2!1str!2str"
                        width="100%" height="500" style={{ border: "0" }} allowFullscreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="contact-bottom">
                <div className="container">
                    <div className="contact-titles">
                        <h2>İletişim</h2>
                        <p>Bizimle iletişime geçmekten çekinmeyin! Mağazamıza uğrayabilir, telefon veya e-posta yoluyla bize ulaşabilirsiniz.
                            Sorularınızı yanıtlamaktan, siparişlerinizi planlamaktan ve size özel çiçek aranjmanları hazırlamaktan mutluluk duyarız.
                            Her zaman taze ve özenli hizmet anlayışımızla yanınızdayız. </p>
                    </div>
                    <div className="contact-elements">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="required">
                                <label>
                                    İsim
                                    <span>*</span>
                                </label>
                                <input type="text" value={formData.name} required onChange={handleInputChange} name="name" />
                            </div>
                            <div className="required">
                                <label>
                                    E-Mail Adresi
                                    <span>*</span>
                                </label>
                                <input type="text" value={formData.email}  required onChange={handleInputChange} name="email" />
                            </div>
                            <div className="required">
                                <label>
                                    Konu
                                    <span>*</span>
                                </label>
                                <input type="text" value={formData.subject}  required onChange={handleInputChange} name="subject" />
                            </div>
                            <div className="required">
                                <label>
                                    Mesajınız
                                    <span>*</span>
                                </label>
                                <textarea id="author" value={formData.message}  name="message" type="text" defaultValue="" size="30" required="" onChange={handleInputChange} ></textarea>
                            </div>
                            <button className="btn btn-sm form-button">Gönder</button>
                        </form>
                        <div className="contact-info">
                            <div className="contact-info-item">
                                <div className="contact-info-texts">
                                    <strong> Conset Flowers</strong>
                                    <p className="contact-street">
                                        Conset Flowers
                                        "Samsun-Cumhuriyet Mah. 123. Sok. No:10"</p>
                                    <a href="tel:Phone: +1 1234 567 88">Telefon: +1 1234 567 88</a>
                                    <a href="mailto:Email: contact@example.com">Email: contact@example.com</a>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-info-texts">
                                    <strong> Çalışma Saatleri</strong>
                                    <p className="contact-date">
                                        Pazartesi - Cuma : 9.00 - 17.00</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact