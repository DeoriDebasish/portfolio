import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar/>
        
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/projects" element = {<Projects/>}/>
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element = {<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
