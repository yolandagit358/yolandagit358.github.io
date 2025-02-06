import React, { useState } from "react";
import Header from "./Header";
import Spring from "./Spring";
import Decons from "./Decons";
import Meue from "./Meue";
import Lafume from "./Lafume";
import Lencre from "./Lencre";
import "./styles.css";
import Delire from "./Delire";

const Works = () => {
    const [workState, setWorkState] = useState("");

    const renderContent = () => {
        switch (workState) {
            case "spring":
                return (<Spring />);
            case "decons":
                return (<Decons />);
            case "lafume":
                return (<Lafume />);
            case "meue":
                return (<Meue />);
            case "lencre":
                return (<Lencre />);
            case "delire":
                return (<Delire />);
            default:
                return (<div className="works-menu">
                    <div className="works-menu-item" onClick={() => setWorkState("spring")}>2021 SPRING/SUMMER</div>
                    <div className="works-menu-item" onClick={() => setWorkState("decons")}>DECONSTRUCTIONS</div>
                    <div className="works-menu-item" onClick={() => setWorkState("lafume")}>LA FUMÉE</div>
                    <div className="works-menu-item" onClick={() => setWorkState("meue")}>MEUE...</div>
                    <div className="works-menu-item" onClick={() => setWorkState("lencre")}>L’ENCRE et L’EAU</div>
                    <div className="works-menu-item" onClick={() => setWorkState("delire")}>DÉLIRE DU TOUCHER</div>
                </div>)
        }
    }

    return (
        <div className="works-content">
            <Header />
            {renderContent()}
        </div>
    )
}

export default Works;