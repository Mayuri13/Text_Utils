import React from "react";
import { useState } from "react";

export default function text(props) {
  const [text, setText] = useState("");
  const onChangehandler = (event) => {
    setText(event.target.value)
  }

  const onClickUpListener = () => {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert("Converted to Upper Case", "success")
  }
  const onClickLowListener = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert("Converted to Lower Case", "success")
  }
  const onClickClearListener = () => {
    let newText = ''
    setText(newText)
    props.showAlert("Text cleared", "success")
  }

  //Copy Content example
  const copyContent = () => {
    var tex = document.getElementById("myText")
    tex.select();
    navigator.clipboard.writeText(tex.value);
    props.showAlert("the message has been copied to clipboard", "success")
  }

  //Removing extra space example
  const extraSpace = () => {
    var newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces removed", "success")
  }
  return (
    <>
      <h2 className='my-3'>{props.title}</h2>
      <div class="mb-3">
        <textarea className="form-control my-3" placeholder="Enter your Text here..." value={text} onChange={onChangehandler} id="myText" rows="10" style={{ backgroundColor: props.mode === 'dark' ? '#19293a' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
      </div>
      <button className={`btn btn-${props.color}`} onClick={onClickUpListener}>Upper Case</button>
      <button className={`btn btn-${props.color} mx-4`} onClick={onClickLowListener}>Lower Case</button>
      <button className={`btn btn-${props.color}`} onClick={onClickClearListener}>Clear Text</button>
      <button className={`btn btn-${props.color} mx-4`} onClick={copyContent}>Copy Text</button>
      <button className={`btn btn-${props.color}`} onClick={extraSpace}>Remove Extra Space</button>
      <h2 className='my-3'>Text Summary</h2>
      <p className='my-2'>{text.split(" ").filter((element)=>{
        return element.length!==0
      }).length} words and {text.length} characters</p>
    </>
  )
};