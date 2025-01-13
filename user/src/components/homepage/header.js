import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import "./header.css"
const Header=()=>{
    return(
        <div className="header">
            <div className="title">
                <p>TravelWebsite</p>
            </div>
            <div className="nav-menu">
                <nav>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="login-section">
                 <Button>SignIn</Button>
            </div>
        </div>
    )
}

export default Header