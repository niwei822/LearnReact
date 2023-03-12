import React from "react"

export default function Meme() {
    return (
        <section className="">
        <img 
            src="./images/troll-face.png" 
            className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
    </section>
    );
}
const [memeImage,setMemeImage] = React.setState("")
function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // memesArray[randomNumber].url  <-- this line is incomplete!
    setMemeImage(memeImage => memesArray[randomNumber].url)
}