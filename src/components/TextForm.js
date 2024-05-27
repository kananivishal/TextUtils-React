import React, { useState } from "react";

export default function TextForm(props) {
  const onUppercaseClick = () => {
    let uperText = text.toUpperCase();
    setText(uperText)
    props.showAlert("success", "Convert to Uppercase!")
  }

  const onLowercaseClick = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText)
    props.showAlert("success", "Convert To Lowercase!")
  }

  const onCapitalizedwordClick = () => {
    let word = text.trim().split(' ');
    for (let i = 0; i < word.length; i++) {
      word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }
    let capitalizedWord = word.join(' ')
    setText(capitalizedWord)
    props.showAlert("success", "Convert to Capitalized!")
  }

  const onCleartextClick = () => {
    setText("")
    props.showAlert("warning", "Text Cleared!")
  }

  const onCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Text Copied To Clipboard!")
  }

  const onRemoveSpacesClick = () => {
    let removeSpaces = text.trim().split(/ +/).join(' ');
    setText(removeSpaces)
    props.showAlert("success", "Extra Spaces Removed!")
  }

  const [isSpeaking, setIsSpeaking] = useState(false);
  const onListenClick = () => {
    if (!isSpeaking) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.onend = () => {
        setIsSpeaking(false);
      };
      window.speechSynthesis.speak(utterance);
      props.showAlert("success", "Reading the text aloud. Please listen!")
    }
  }

  const onTextboxChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("")
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3 className="mb-3">{props.heading}</h3>
        <div className="mb-4">
          <textarea className="form-control mb-3" id="TextBox" value={text} onChange={onTextboxChange} style={{ backgroundColor: props.mode === 'dark' ? '#363636' : 'white', color: props.mode === 'dark' ? 'white' : 'black', placeholderColor: props.mode === 'dark' ? 'white' : 'black' }} placeholder="Enter Your Text" rows="8"></textarea>
          <button disabled={text.length===0} className="btn btn-primary my-2 m-1" onClick={onUppercaseClick}>Convert To Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary my-2 m-1" onClick={onLowercaseClick}>Convert To Lowerercase</button>
          <button disabled={text.length===0} className="btn btn-primary my-2 m-1" onClick={onCapitalizedwordClick}>Capitalized Word</button>
          <button disabled={text.length===0} className="btn btn-primary my-2 m-1" onClick={onRemoveSpacesClick}>Remove Extra Spaces</button>
          <button disabled={text.length===0} className="btn btn-primary my-2 m-1" onClick={onListenClick}>Listen Now</button>
          <button disabled={text.length===0} className="btn btn-success my-2 m-1" onClick={onCopyClick}>Copy To Clipboard</button>
          <button disabled={text.length===0} className="btn btn-danger my-2 m-1" onClick={onCleartextClick}>Clear Text</button>
        </div>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Your Text Summary</h3>
        <p>Number of words: {text.split(/\s+/).filter((word) => { return word.length !== 0 }).length}</p>
        <p>Number of  character: {text.length}</p>
        <p>Readding time(in Minutes): {0.008 * text.split(/\s+/).filter((word) => { return word.length !== 0 }).length}</p>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Preview</h3>
        <div className="card size=30px" style={{ backgroundColor: props.mode === 'dark' ? '#363636' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
          <div className="card-body">
            {text ? text : "Nothing to preview!"}
          </div>
        </div>
      </div>
    </>
  );
}
