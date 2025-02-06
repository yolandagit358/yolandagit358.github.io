import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";

const Header = () => {
    let navigate = useNavigate();

    function changeLocation(placeToGo){
        navigate(placeToGo, { replace: true });
        window.location.reload();
    }

    return (
        <div className="header-container position-absolute top-0">
            <div className="web-header">
                <div className="header-menu-item" id="home-menu-1">
                    <Link className="header-menu-link" onClick={() => changeLocation('/works')}>WORKS</Link>
                </div>
                <div className="header-menu-item" id="home-menu-2">
                    <Link className="header-menu-link" onClick={() => changeLocation('/projects')}>PROJECTS</Link>
                </div>
                <div className="header-menu-item" id="home-menu-3">
                    <Link className="header-menu-link" onClick={() => changeLocation('/noirdenoir')}>NOIR DE NOIR</Link>
                </div>
                <div className="header-menu-item" id="home-menu-4">
                    <Link className="header-menu-link" onClick={() => changeLocation('/about')}>ABOUT</Link>
                </div>
                <div className="header-menu-item" id="home-menu-5">
                    <Link className="header-menu-link" onClick={() => changeLocation('/contact')}>CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;