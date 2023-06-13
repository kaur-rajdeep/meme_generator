import React from "react";

export default function Inputs(){
    return(
        <div className="texts">
        <div className="inputs">
        <input type="text" placeholder="first text" id="first"/>
        <input type="text" placeholder="second text" id="second"/><br/>
        </div>
        <div className="meme">
        <button id="meme">Generate Meme</button>
        </div>
        </div>
    )
}