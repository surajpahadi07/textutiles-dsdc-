import React, { useState } from 'react'

export default function Textform() {
    //               text is  value and useState is method    (and)     useState is use for updating text value
    const [text, setText] = useState("");

    // function ....
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const btn1 = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const btn2 = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const btn3 = () => {
        let newText = text.toLowerCase();
        setText("");
    }
    const btn4 = () => {
        let newText = text.toLowerCase();
        setText("");
    }

    return (
        <div>
            <div className="mb-3">
                {/* css use in jsx     "style={{margin:'50px', padding:'10px;'}}"     */}
                <h1>Enter text here</h1>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                    value={text} onChange={handleOnChange}></textarea>
                <div className='p-2'>
                    <button className='btn btn-primary m-1' onClick={btn1}>UPPER CASE</button>
                    <button className='btn btn-primary m-1' onClick={btn2}>LOWER CASE</button>
                    <button className='btn btn-primary m-1' onClick={btn3}>CLEAR</button>
                    <button className='btn btn-primary m-1' onClick={btn4}>VIEW</button>
                </div>
                <div>
                    <h2>Your text Summary</h2>
                </div>
                <div>
                    <p>total character {text.split(" ").length } and total words {text.length}</p>
                </div>
            </div>
        </div>
    )
}