import React from "react";

function Header(){
    return (
        <div className="header_container">
        <div className="logo_header">
        <img src="logo.jpg" alt="logo" className="logo"/>
        <p className="header">Meme Generator</p>
        </div>
        <p className="project">React Project</p>
        </div>
    )
}

export default Header;