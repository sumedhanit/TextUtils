import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");
  const handleUpCase = () => {
    console.log("uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (e) => {
    console.log("changeClick");
    setText(e.target.value);
  };
  const handleClearText = () => {
    console.log("clearText");
    setText("");
  };
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className="Container">
        <div className="mb-3">
          <h1
            style={{
              color: props.mode === "dark" ? "white" : "black",
            }}
          >
            {props.heading}
          </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#1f2532" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn-primary mx-1" onClick={handleUpCase}>
          Convert to UpperCase
        </button>
        <button className="btn-primary mx-1" onClick={handleLowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn-primary mx-1" onClick={handleCopyText}>
          Copy text
        </button>
        <button className="btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length - 0.008} Minutes read time</p>
        <h3>Preview</h3>
        <p>
          {text.length >= 1
            ? text
            : "Enter something in above text box to preview it here"}
        </p>
      </div>
    </>
  );
}
