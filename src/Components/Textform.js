import React, {useState} from 'react'


export default function Textform(props) {
    const[text, setText] = useState('Enter text here');
    // <link rel="stylesheet" href="./Textformstyle.css" />

    const HandleupClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
    }

const handleonChange = (event) => {
    setText(event.target.value);
  }

const clear = () => {
    setText('');
    if (text.length > 0) {
        props.showAlert("Text cleared", "success");
    }
    else {
        props.showAlert("Text is already empty", "warning");
    }}

  return (
    <>
    <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
       <h1>{props.heading}</h1>
<div className="mb-3"  >
  
 <textarea
  className="form-control"
  value={text}
  onChange={handleonChange}
  id="exampleFormControlTextarea1"
  rows="3"
  style={{
    backgroundColor: props.mode === 'dark' ? '#212529' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black'
  }}
></textarea>

  
</div>
<div className="btn-1"> <button className="primary" onClick={HandleupClick}>Change to Uppercase</button>
 <button  className="Clear" onClick={clear}>Clear</button>
</div>
   </div>

   <div className="container my-4" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>Your TextSummary</h1>
    <p>{text.trim().split(' ').length} words and {text.length} characters</p>
    <p>{0.008 * text.split(' ').length} Minutes to read</p>
    <h3>Preview</h3>
    <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
    </div>
    
    </>
    
  )
}
