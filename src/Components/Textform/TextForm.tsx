import { useState } from "react";





interface TextFormProps {
    heading: string;
}

const TextForm: React.FC<TextFormProps> = (props) => {

    const handleUcClick = (): void => {
        let newText = text.toUpperCase();
        setText(newText)
    };
    
    const handleLcClick = (): void => {
        let newText = text.toLowerCase();
        setText(newText)
    };
    
    const handleClearClick = (): void => {
        let newText = "";
        setText(newText)
    };



    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {

        setText(e.target.value)
    }

    const [text, setText] = useState("");


    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>

                <div className="mb-3">

                    <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUcClick}> To UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLcClick}>To lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h1>Your text Summery</h1>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>Average Time to read : {0.008 * text.split(" ").length} Minutes</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>

        </>

    )
}


export default TextForm