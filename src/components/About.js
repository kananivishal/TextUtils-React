import React from 'react'

export default function About(props) {
  return (
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>About Text Utils</h2>
      <p>
        Text Utils is a simple and powerful web application designed to provide various text manipulation functions. With Text Utils, you can easily:
      </p>
      <ul>
        <li>Convert text to uppercase</li>
        <li>Convert text to lowercase</li>
        <li>Capitalize each word in the text</li>
        <li>Copy text to the clipboard</li>
        <li>And more!</li>
      </ul>
      <p>
        Our goal is to make text manipulation as straightforward and efficient as possible. Whether you are working on a project, editing content, or just need to quickly adjust some text, Text Utils is here to help.
      </p>
    </div>
  )
}
