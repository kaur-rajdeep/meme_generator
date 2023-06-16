import React from "react";
import memesData from "../memesData";

export default function Memes(){

    const [memeImage, setMemeImage]=React.useState("")
    
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return(
        <main>
        <div className="texts">
        <div className="inputs">
        <input type="text" placeholder="first text" id="first"/>
        <input type="text" placeholder="second text" id="second"/><br/>
        </div>
        <div className="meme">
        <button id="meme" onClick={getMemeImage}>Generate Meme</button>
        </div>
        </div>
        <div id="Image">
            <img src={memeImage} className="memeImage"/>
        </div>
        </main>
    )
}