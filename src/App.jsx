import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import Resume from './pages/Resume'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <div className="bg-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>

        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer style={{ textAlign: 'center', padding: '2rem', marginTop: '3rem', background: 'rgba(255,255,255,0.8)' }}>
          <p>© 2026 Himanshu Saraswat. Made with ❤️ using React</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
