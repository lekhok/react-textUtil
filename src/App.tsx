import {useState} from 'react'
import toast  from "react-hot-toast";

import About from "./Components/About/About"
import Navbar from "./Components/Navbar/Navbar"
import TextForm from "./Components/Textform/TextForm"
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';




const App = () => {

  const [mode, setMode] = useState('light')

  const toggleMode  = (): void   => {
    if (mode=='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#27374D'
      toast('Hello Darkness!',
  {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#333',
      color: '#fff',
    },
  }
);
      
    } 
    else {
      setMode('light')

      toast('The light has prevailed', {
        icon: '👏',
      });


      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <div>
      <Router>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>


<div className="container my-3">
  
  
          <Routes>
            <Route path="/about" element={<About />}>
            </Route>
            <Route path="/" element={<TextForm  heading="Enter your text below" mode = {mode}/>}>
            </Route>
          </Routes>
          
        </div>
        </Router>
    </div>
  )
}

export default App