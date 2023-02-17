import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        
        <div className="navi">
            <div className="link1">
                <Link className="link" to="/">
                    <div>All</div>
                </Link>
                <Link className="link" to="/kinder">
                    <div>Kinder</div>
                </Link>
                <Link className="link" to="/herren">
                    <div>Herren</div>
                </Link>

                <Link className="link" to="/frauen">
                    <div>Frauen</div>
                </Link>

                <div>
                    <select>
                        <option>Englisch</option>
                        <option>Deutsch</option>
                        <option>Arabisch</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
