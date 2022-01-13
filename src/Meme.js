import React, {useState, useEffect} from "react";

export default function Meme() {


    const [allMeme, setAllMeme] = useState([])
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })


    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }
        ))
    }

    function getNewMeme() {
        const random = Math.floor(Math.random() * allMeme.length);
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMeme[random].url
        }))
    }


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    }, [])


    return (
        <main>
            <div className="form">

                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    onChange={handleChange}
                    name="topText"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    onChange={handleChange}
                    name="bottomText"
                />
                <button className="form--button" onClick={getNewMeme}>
                    Get new meme image
                </button>
            </div>

            <div className="meme">
                <img src={meme.randomImage} alt="meme" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}