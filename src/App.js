import React from 'react';
import Navbar from "./Navbar/Navbar"
import Start from "./Start/Start"
import "./assets/style.css"
import About from "../src/About/About"
import Section from './Section/Section';
import System from './System/System';
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import FooterEnd from './Footer/FooterEnd';


function App() {
    return (
        <div className="wrapper">
            <Navbar />
            <div className='content'>
                <Start />
                <About />
                <Section />
                <System />
                <Contact />
            </div>
            <Footer />
            <FooterEnd/>
        </div>
    );
}

export default App;