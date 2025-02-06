import React, {useState} from "react";
import Header from "./Header";
import Wang from "./Wang";
import Elle from "./Elle";
import Artwork from "./Artwork";
import "./styles.css";

const Projects = () => {
    const [projectstate, setprojectstate] = useState("");

    const renderContent = () => {
        switch(projectstate) {
            case "elle":
                return (<Elle />);
            case "wang":
                return (<Wang />);
            case "artwork":
                return (<Artwork />);
            default:
                return (<div className="projects-menu">
                    <div className="projects-menu-item" onClick={()=>setprojectstate("artwork")}>Artwork</div>
                    <div className="projects-menu-item" onClick={()=>setprojectstate("elle")}>ELLE</div>
                    <div className="projects-menu-item" onClick={()=>setprojectstate("wang")}>FENGCHEN WANG</div>
                </div>)
        }
    }

    return (
        <div className="projects-content">
            <Header />
            {renderContent()}
        </div>
    )
}

export default Projects;