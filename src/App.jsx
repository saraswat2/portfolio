import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'
import Achievements from './pages/Achievements'
import ThemeSwitcher from './components/ThemeSwitcher'
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'crimson')

  useEffect(() => {
    if (theme === 'crimson') {
      document.documentElement.removeAttribute('data-theme')
    } else {
      document.documentElement.setAttribute('data-theme', theme)
    }
    localStorage.setItem('theme', theme)
  }, [theme])
  return (
    <div className="app">
      <div className="bg-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <Navbar />

      <main>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer>
        <p>© 2026 Himanshu Saraswat. Made with ❤️ using React</p>
      </footer>

      <ThemeSwitcher current={theme} onChange={setTheme} />
    </div>
  )
}

export default App
