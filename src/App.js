import React from "react";
import './App.css';
import Meme from "./Meme"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Meme generator with API call</h1>
        <h2>by lucasfras</h2>
      </header>
      <br />
      <Meme />
    </div>
  );
}

export default App;
