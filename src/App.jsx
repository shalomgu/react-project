import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LogPage from './LogPage';
import LoginPage from './LoginPage';
import Header from './Header';

let language = "JavaScript";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/log" element={<LogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<h1>Guy React Project {language}</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
