import { useState} from "react";
import toast , { Toaster } from "react-hot-toast";





interface TextFormProps {
    heading: string;
    mode: string;
}

const TextForm: React.FC<TextFormProps> = (props) => {
 
    const timeRead = (): { value: number; timeUnit: string } => {
        const timeCalc = 0.008 * text.split(" ").length;
        let timeValue;
        let timeUnit;
    
        if (timeCalc < 1) {
          timeValue = Math.round(0.008 * text.split(" ").length * 60);
          timeUnit = "seconds";
        } else {
          timeValue = Number((0.008 * text.split(" ").length).toFixed(2));
          timeUnit = "minutes";
        }
    
        return { value: timeValue, timeUnit: timeUnit };
      };


    // Toast Functions
    const copyNotify = () => toast.success('Text copied sucessfully');
    const pasteNotifyFail = () => toast.error('Paste fail');
    const pasteNotifySuccess = () => toast.success('Clipboard pasted')
    const clearSuccess = () => toast.success('Textbox has been cleared')
    // End of Toast Functions

    const handleUcClick = (): void => {
        let newText = text.toUpperCase();
        setText(newText)
    };
    
    const handleLcClick = (): void => {
        let newText = text.toLowerCase();
        setText(newText);
    };
    
    const handleClearClick = (): void => {
        let newText = "";
        setText(newText);
        clearSuccess();
    };

    const handleCopy = (): void => {
        const copyText = document.getElementById("myBox") as HTMLTextAreaElement | null;
        if (copyText) {
          copyText.select();
          navigator.clipboard.writeText(copyText.value);
          copyNotify()
        }
      };


      const handlePaste = async (): Promise<void> => {
        try {
          const clipboardText = await navigator.clipboard.readText();
          setText(clipboardText);
          pasteNotifySuccess();
        } catch (error) {
          pasteNotifyFail();
        }
      };


    const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {

        setText(e.target.value)
    }

    const [text, setText] = useState("");

    console.log(props.mode)

  

    return (
        <>
            <div><Toaster/></div>
            <div className="container">
            <h1>{props.heading}</h1>

                <div className="mb-3" >

                    <textarea className="form-control" id="myBox" rows={8} value={text} onChange={handleOnChange} style={props.mode == 'dark' ? {backgroundColor : '#212529' , color : 'white'} : {backgroundColor : 'white' , color : 'black'}  }></textarea>
                </div>
                
                <button className="btn btn-primary mx-2" onClick={handleUcClick}> To UPPERCASE</button>
                <button className="btn btn-primary mx-2" onClick={handleLcClick}>To lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handlePaste}>Paste Text</button>
            </div>

            <div className="container my-3">
                <h1>Your text Summery</h1>
                <p>{text.split(" ").length} Words, {text.length} Characters</p>
                <p>Average Time to read : {timeRead().value} {timeRead().timeUnit}</p>

                <h2>Preview</h2>
                <p>{text.length>0 ?text : "Enter your text to preview here"}</p>
            </div>

        </>

    )
}


export default TextForm