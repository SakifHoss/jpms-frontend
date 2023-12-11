import React from "react"
import myImage from "../images/react-icon-small.png";
import "./style.css"

export default function Navbar() {
    return (
        <nav className="fixed-navbar">
            <img class="nav--icon" src={myImage} alt="" />
            <h3 className="nav--logo_text">Al jazeera company</h3>
            <ul class="nav-bar-homepage">
                <li style={{ marginRight: "20px" , marginTop: "10px"}}><a  className="icon" href="#" style={{ textDecoration: "none", color: "#fff" }}>Home</a></li>
                <li  style={{ marginRight: "20px" , marginTop: "10px"}}><a  className="icon" href="#" style={{ textDecoration: "none", color: "#fff" }}>Contact Us</a></li>
                <li style={{ marginRight: "20px" , marginTop: "10px"}}><a  className="icon" href="#" style={{ textDecoration: "none", color: "#fff" }}>Properties</a></li>
                <li style={{ marginRight: "20px" , marginTop: "10px"}}><a  className="icon" href="#" style={{ textDecoration: "none", color: "#fff" }}>Map</a></li>
                <li ><button class="signup_button_homepage" href="#">Sign In</button> </li>
            </ul>
        </nav>
    )
}

