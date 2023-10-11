import React from "react";
import memesData from "../memesData";

export default function Memes(){
  // const [memeImage, setMemeImage] = React.useState(
  //   "http://i.imgflip.com/1bij.jpg"
  // );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <main>
      <div className="texts">
        <div className="inputs">
          <input type="text" placeholder="first text" id="first" />
          <input type="text" placeholder="second text" id="second" />
          <br />
        </div>
        <div className="meme">
          <button id="meme" onClick={getMemeImage}>
            Generate Meme
          </button>
        </div>
      </div>
      <div id="Image">
        <img src={meme.randomImage} className="memeImage" />
      </div>
    </main>
  );
}