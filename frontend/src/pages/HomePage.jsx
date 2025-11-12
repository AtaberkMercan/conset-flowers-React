import React from 'react'
import Header from '../components/Layout/Header/Header'
import Sliders from '../components/Slider/Sliders'
import Products from '../components/Products/Products'
import About from '../components/Aboutus/About'
import Contact from '../components/Contact/Contact'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

const HomePage = () => {
    return (
        <React.Fragment>
            <Header />
            <Sliders/>
            <Products />
            <About />
            <Contact />
            <Policy />
            <Footer />
        </React.Fragment>
    )
}

export default HomePage