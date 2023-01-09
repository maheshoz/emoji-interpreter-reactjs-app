import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "🏀": "Basketball",
  "🎸": "Guitar",
  "🐺": "Wolf"
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (userInput in emojiDictionary) {
      setEmojiMeaning(meaning);
    } else {
      setEmojiMeaning("we don't have this in DB");
    }
    // console.log(meaning);
    // if(meaning === undefined){
    //   meaning = "we don't have this in DB";
    // }
    // setEmojiMeaning(meaning);
  }

  // console.log( Object.keys(emojiDictionary))
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setEmojiMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Inside out</h1>
      <input onChange={emojiInputHandler} />

      <h2> {emojiMeaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map((emoji, index) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

// VISER - view , interact, state in Event handler, render
