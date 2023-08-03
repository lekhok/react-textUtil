import Navbar from "./Components/Navbar/Navbar"
import TextForm from "./Components/Textform/TextForm"


const App = () => {
  return (
    <div>
      <Navbar title="TextUtils" aboutText="About Us" />

      <div className="container my-3">
      <TextForm heading="Enter your text below" />
      </div>
      
    </div>
  )
}

export default App