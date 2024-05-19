import React, { useState } from "react";

export default function TextForm(props) {
  const onUppercaseClick = ()=>{
    let uperText = text.toUpperCase();
    setText(uperText)
  }

  const onLowercaseClick = ()=>{
    let lowerText = text.toLowerCase();
    setText(lowerText)
  }

  const onCapitalizedwordClick = ()=>{
    let word = text.trim().split(' ');
    for (let i = 0; i < word.length; i++) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    let capitalizedWord = word.join(' ')
    setText(capitalizedWord)
  }

  const onCleartextClick = ()=>{
    setText("")
  }

  const onCopyClick = ()=>{
    navigator.clipboard.writeText(text);
  }

  const onRemoveSpacesClick = ()=>{
    let removeSpaces = text.trim().split(/ +/).join(' ');
    setText(removeSpaces)
  }

  const [isSpeaking, setIsSpeaking] = useState(false);
  const onListenClick = ()=>{
    if (!isSpeaking) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
    }
  }

  const onTextboxChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState("")
  return (
    <>
      <div className = "container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea className="form-control" id="TextBox" value={text} onChange={onTextboxChange} style={{backgroundColor: props.mode === 'dark' ? '#363636' : 'white', color: props.mode === 'dark' ? 'white' : 'black', placeholderColor: props.mode === 'dark' ? 'white' : 'black'}} placeholder="Enter Your Text" rows="8"></textarea>
          <button className="btn btn-primary my-3 m-1" onClick={onUppercaseClick}>Convert To Uppercase</button>
          <button className="btn btn-primary my-3 m-1" onClick={onLowercaseClick}>Convert To Lowerercase</button>
          <button className="btn btn-primary my-3 m-1" onClick={onCapitalizedwordClick}>Capitalized Word</button>
          <button className="btn btn-primary my-3 m-1" onClick={onRemoveSpacesClick}>Remove Extra Spaces</button>
          <button className="btn btn-primary my-3 m-1" onClick={onListenClick}>Listen Now</button>
          <button className="btn btn-success my-3 m-1" onClick={onCopyClick}>Copy To Clipboard</button>
          <button className="btn btn-danger my-3 m-1" onClick={onCleartextClick}>Clear Text</button>
        </div>
      </div>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Your Text Summary</h3>
        <p>Number of words: {text.split(/\s+/).filter((word) => { return word.length !== 0}).length}</p>
        <p>Number of  character: {text.length}</p>
        <p>Readding time(in Minutes): {0.008 * text.split(/\s+/).filter((word) => { return word.length !== 0}).length}</p>
      </div>
      <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h3>Preview</h3>
        <div className="card size=30px" style={{backgroundColor: props.mode === 'dark' ? '#363636' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}>
          <div className="card-body">
            {text ? text : "Nothing to preview!"}
          </div>
        </div>
      </div>
    </>
  );
}
