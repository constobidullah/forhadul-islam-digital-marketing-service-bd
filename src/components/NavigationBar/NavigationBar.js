import React from 'react';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <nav>
            <h1>Farhad Digital Marketing Expert</h1>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;