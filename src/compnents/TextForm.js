import React, { useState } from "react";

const TextForm = (props) => {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUppercase = () => {
    let newTextUpp = text.toUpperCase();
    setText(newTextUpp);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleClear = () => {
    let newTextCle = "";
    setText(newTextCle);
    props.showAlert("Text Cleared", "success");
  };

  const handleLowercase = () => {
    let newTextLow = text.toLowerCase();
    setText(newTextLow);
    props.showAlert("Converted to Lowercase", "success");
  };

  const [text, setText] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            placeholder="Enter Text Here"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <div className="btns">
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUppercase}
          >
            Convert To Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLowercase}
          >
            Convert To Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClear}
          >
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container grid my-4"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <div className="summary">
          <h2>Text Counter</h2>
          <p>
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }{" "}
            Words, {text.length} Chracters
          </p>
        </div>
        <div className="minutes">
          <h2> Minutes to Read </h2>
          <p>
            {0.008 *
              text.split("").filter((element) => {
                return element.length !== 0;
              }).length}
          </p>
        </div>
      </div>
      <div
        className="prev"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing To Preview"}</p>
      </div>
    </>
  );
};

export default TextForm;
