import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import './GoogleSearchBar.css';
import LogPage from './LogPage';
import LoginPage from './LoginPage';
import Header from './Header';
import GoogleSearchBar from './GoogleSearchBar';
import ShipDashboard from './ShipDashboard';


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
          <Route path="/search" element={<GoogleSearchBar />} />          
          <Route path="/ship" element={<ShipDashboard />} /> 
          <Route path="/" element={<h1>Guy React Project {language}</h1>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
