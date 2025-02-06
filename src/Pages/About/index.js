import React from "react";
import Header from "./Header";
import "./styles.css";

const About = () => {
    return (
        <div className="about-content">
            <Header />
            <div className="about-container w-100">
                <div className="row">
                    <div className="col">
                        <p className="about-intro-1 text-center">I'm Ying Ying Tao.</p>
                        <p className="about-intro-2 text-center">Stylist & Fashion Designer</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <img className="about-image" src="images/spring/03.jpg"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="about-desc text-center mx-auto">Ying Ying Tao is a fashion designer from China with a passion for creating innovative and stylish designs. With experience working on various fashion projects and contributing to renowned magazines, Ying Ying blends artistic vision with modern trends to craft unique and compelling pieces. Driven by creativity and a deep understanding of fashion’s evolving landscape, Ying Ying continues to push boundaries, delivering designs that inspire and captivate.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;