import React, {useState} from 'react'

export default function TextForm(props) {
    

    const HandleUpClick = ()=>{
        let newTxt = text.toUpperCase();
        setText(newTxt);
        props.showAlert("Converted to upper case", "success")
    }
    const HandleLoClick = ()=>{
        let newTxt = text.toLowerCase();
        setText(newTxt);
        props.showAlert("Converted to lower case", "success")
    }
    const HandleClearClick = ()=>{
        setText('');
        props.showAlert("Text cleared from text area", "success")
    }
    const HandleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied text to clipboard", "success")
    }
    const HandleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed from the text", "success")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const [text, setText] = useState('')
    
    return (
        <>
            <div className='container' style= {{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value ={text} onChange={handleOnChange} style ={{backgroundColor: props.mode==='light'?'white':'#212529', color: props.mode === 'dark' ? 'white' : 'black'}} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn mx-2 my-2" style={{backgroundColor: props.mode === 'dark' ? '#1f1f7e' : '#000080', color: 'white'}} onClick={HandleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className="btn mx-2 my-2" style={{backgroundColor: props.mode === 'dark' ? '#1f1f7e' : '#000080', color: 'white'}} onClick={HandleLoClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className="btn mx-2 my-2" style={{backgroundColor: props.mode === 'dark' ? '#1f1f7e' : '#000080', color: 'white'}} onClick={HandleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn mx-2 my-2" style={{backgroundColor: props.mode === 'dark' ? '#1f1f7e' : '#000080', color: 'white'}} onClick={HandleCopy}>Copy to Clipboard</button>
                <button disabled={text.length===0} className="btn mx-2 my-2" style={{backgroundColor: props.mode === 'dark' ? '#1f1f7e' : '#000080', color: 'white'}} onClick={HandleExtraSpaces}>Remove extra Spaces</button>
            </div>

            <div className="container my-3" style= {{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text: "Nothing to preview" }</p>
            </div>
        </>    
    )
}
