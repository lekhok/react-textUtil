import {useState} from 'react'

// import About from "./Components/About/About"
import Navbar from "./Components/Navbar/Navbar"
import TextForm from "./Components/Textform/TextForm"





const App = () => {

  const [mode, setMode] = useState('light')

  const toggleMode  = (): void   => {
    if (mode=='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#27374D'
      
    } 
    else {
      setMode('light')
      document.body.style.backgroundColor = '#f8f9fa'
    }
  }

  return (
    <div>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3">
      
       <TextForm heading="Enter your text below" mode = {mode}/>

      </div>
      {/* <About /> */}
    </div>
  )
}

export default App