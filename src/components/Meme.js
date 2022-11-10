import React from 'react'

export default function Meme() {
  function handleonMouseOver(){
    console.log("Mouse Hovered")
  }
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onMouseOver={handleonMouseOver}className="form--button">Get a new meme image 🖼</button>
      </form>
    </main>
  )
}
