import { useState } from "react";





interface TextFormProps {
    heading :string;
}

const TextForm : React.FC<TextFormProps> = (props) =>{

    const handleUcClick = (): void => {
        
        let newText = text.toUpperCase();
        setText(newText)
      };

      const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
        
        setText(e.target.value)
      }

    const [text, setText] = useState("Enter Text here");

  
    return (
       
        <div>
            <h1>{props.heading}</h1>

        <div className="mb-3">
        
        <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handleOnChange}></textarea>
      </div>
        <button className="btn btn-primary"  onClick={handleUcClick}>UPPERCASE</button>
      </div>
        
    )
}


export default TextForm