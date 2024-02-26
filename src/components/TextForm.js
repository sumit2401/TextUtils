import React, {useState} from 'react'



export default function TextForm(props) {

    const handleUpClick = ()=>{
        console.log("uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        console.log("uppercase was clicked" +  text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = ()=>{
      console.log("uppercase was clicked" +  text);
      let newText = "";
      setText(newText)
  }
  const handleEmailExtract = () => {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);// this synatx allowus to change the value inside the boxes... 

    }
    const handleCopy=()=>{
      console.log('text successfully copy')
      var text= document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handleSpace=()=>{
       let newText = text.split(/[ ]+/); // (/[]+/) is javascript regex
       setText(newText.join(" "));
    }
    // Declare a new state variable, which we'll call "text" and the 'setText ' variable is used to edit the state 
    const [text, setText] = useState('Enter text here');
    // text = "new text"; //wrong way to change the state
    // setText("new text");// correct way to change the state 
  return (
    <>
    {/* first {} for writing down the javascript and the scond {} is to create the object in the javascript */}
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      
        <h1>{props.heading}</h1> 
        <div className="mb-3">
            {/* we use onchange event listener to write the comments or anything in the text box */}
            <textarea className="form control" id="myBox" value={text} onChange={handleOnChange} cols="80" rows="10" style={{backgroundColor:props.mode==='dark'?'#221f1f':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
  <button  className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
  <button  className="btn btn-primary mx-4"  onClick={handleLowClick}>Lowercase</button>
  <button  className="btn btn-primary mx-2"  onClick={handleClearClick}>Clear</button>
  <button  className="btn btn-primary mx-2"  onClick={handleEmailExtract}>Email Extract</button>
  <button  className="btn btn-primary mx-2"  onClick={handleCopy}>Copy Text</button>
  <button  className="btn btn-primary mx-2"  onClick={handleSpace}>Extra Spaces Remove</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    {/* text.split(" ").length --> gives us the number of words in the para ... we split it after every space  */}
     {/* text.length--> simply gives us the length of character or number of characters */}
     <p>{0.008*text.split(" ").length} minutes takes to read this para</p>
     <h2>Preview</h2>
     <p>{text.length>0?text:"Enter your text to preview"}</p>
     <h2>Email</h2>
     <p>{handleEmailExtract()+" "}</p>
    </div>
    </>
  )
}
