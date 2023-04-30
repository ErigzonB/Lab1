import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer"
import './Main.css';

const Main = ({ children }) => {

    return (
        <div>
        <div className='page-container'>
                    <Navigation />
        <div className='content-wrap'>
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;