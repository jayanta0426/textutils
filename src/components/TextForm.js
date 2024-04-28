import React, {useState} from 'react'

export default function TextForm(props) {

    const handleToRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces is removed", "success");
    }

    const handleToCopyText = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }

    const handleClearText = () =>{
        setText('');
        props.showAlert("Text is cleared", "success");
    }

    const handleLowerCase= () =>{

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }
    
    const handleUpperCase= () =>{

        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handelOnChange= (event) =>{

        setText(event.target.value);
    }
  
    const [text, setText] = useState ('');
    
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" onChange={handelOnChange} id="myBox" rows="8" value={text} style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
            </div>
            <button disabled = {text.trim().length === 0} className='btn btn-primary mx-2' onClick={handleUpperCase}>Covert to Uppper Case</button>
            <button disabled = {text.trim().length === 0} className='btn btn-primary mx-2' onClick={handleLowerCase}>Covert to Lower Case</button>
            <button disabled = {text.trim().length === 0} className='btn btn-primary mx-2' onClick={handleToRemoveExtraSpaces}>Remove Extra Spaces</button>
            <button disabled = {text.trim().length === 0} className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
            <button disabled = {text.trim().length === 0} className='btn btn-primary mx-2' onClick={handleToCopyText}>Copy Text</button>
        </div>

        <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h3>Your text summary</h3>
            <p>{text.trim().length > 0 ? text.split(" ").length -1 : 0} words and {text.trim().length} characters</p>
            <p>{text.trim().length>0 ? 0.008 * text.split(" ").length : 0} Minutes to read</p>
            <h3>Preview</h3>
            <p>{ text.length>0 ? text : "Nothing to Preview"}</p>
        </div>
        </>
    )
}
