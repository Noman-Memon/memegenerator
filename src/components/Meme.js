import React from 'react'
// import memesData from '../memesData'

export default function Meme() {
  // function handleonMouseOver(){
  //   console.log("Mouse Hovered")
  // }
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
})
function handlechange(event){
  const {name, value} = event.target
  setMeme(prevMeme=>({
    ...prevMeme,
    [name]:value
  }))
}
console.log(meme)
// const [allMemeImages, setAllMemeImages] = React.useState(memesData)
const [allMemeImages, setAllMemeImages] = React.useState([])

React.useEffect(()=>{
  async function getMemes(){
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemeImages(data.data.memes)
  }
  getMemes()

}, [])
console.log(allMemeImages)

function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length)
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" onChange={handlechange} className="form--input" name='topText' value={meme.topText}/>
        <input type="text" placeholder="Bottom text" onChange={handlechange} className="form--input" name='bottomText' value={meme.bottomText}/>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
        <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt='meme' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
      </div>
    </main>
  )
}
