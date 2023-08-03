interface TextFormProps {
    heading :string;
}

const TextForm : React.FC<TextFormProps> = (props) =>{
    return (
       
        <div>
            <h1>{props.heading}</h1>

        <div className="mb-3">
        
        <textarea className="form-control" id="myBox" rows={8}></textarea>
      </div>
        <button className="btn btn-primary">UPPERCASE</button>
      </div>
        
    )
}


export default TextForm