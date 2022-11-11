import React from 'react'
import memesData from '../memesData'

export default function Meme() {
  // function handleonMouseOver(){
  //   console.log("Mouse Hovered")
  // }
  const [url, setUrl] = React.useState('')
  let imgUrl
  function getMemeImage() {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    imgUrl = memesArray[randomNumber].url
    setUrl(function (url) {
      return imgUrl
    })
    console.log(url)
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
        <img src={url} className="meme--image" alt="meme-img" />
      </div>
    </main>
  )
}
