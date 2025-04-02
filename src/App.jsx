import { useState } from 'react'
import './App.css'

let language = "JavaScript";

function App() {
  const [count, setCount] = useState(0)

  return (
      <h1>Guy React Project {language}</h1>
  )
}

export default App
