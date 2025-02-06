import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import "./styles.css"

const Spring = () => {
    const [selectedPic, setSelectedPic] = useState(1);

    return (
        <div className="row h-100 spring-content">
            <div className="col-6 h-100 marquee-container">
                <Marquee direction="down" className="h-100 mx-auto marquee-thing" autoFill={true}>
                    <div className="marquee-img-container">
                        <img className="marquee-img" src="images/spring/01.png" />
                    </div>
                    <div className="marquee-img-container">
                        <img className="marquee-img" src="images/spring/02.jpg" />
                    </div>
                    <div className="marquee-img-container">
                        <img className="marquee-img" src="images/spring/03.jpg" />
                    </div>
                </Marquee>
            </div>
            <div className="col-6 h-100 spring-pic-container">
                <img className="spring-pic-img w-100" src="images/spring/02.jpg" />
            </div>
        </div>
    )
}

export default Spring;