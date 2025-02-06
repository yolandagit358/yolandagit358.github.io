import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Home = () => {
    return (
        <div className="web-content">
            <div className="home-image">
                <img src="/images/homepic.jpg"/>
            </div>
            <div className="home-menu-item" id="home-menu-1">
                <Link className="home-menu-link" to="/works">WORKS</Link>
            </div>
            <div className="home-menu-item" id="home-menu-2">
                <Link className="home-menu-link" to="/projects">PROJECTS</Link>
            </div>
            <div className="home-menu-item" id="home-menu-3">
                <Link className="home-menu-link" to="/noirdenoir">NOIR DE NOIR</Link>
            </div>
            <div className="home-menu-item" id="home-menu-4">
                <Link className="home-menu-link" to="/about">ABOUT</Link>
            </div>
            <div className="home-menu-item" id="home-menu-5">
                <Link className="home-menu-link" to="/contact">CONTACT</Link>
            </div>
            <div className="home-menu-name">
                <span>YINGYING TAO</span>
            </div>
        </div>
    )
}

export default Home;