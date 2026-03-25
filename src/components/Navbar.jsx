import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { name: 'Home',         id: 'home' },
    { name: 'About',        id: 'about' },
    { name: 'Skills',       id: 'skills' },
    { name: 'Projects',     id: 'projects' },
    { name: 'Education',    id: 'education' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact',      id: 'contact' },
  ]

  // Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollY = window.scrollY + 80

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollY) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.offsetTop - 60
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        whileHover={{ scale: 1.1 }}
        className="logo"
        onClick={() => scrollTo('home')}
        style={{ cursor: 'pointer' }}
      >
        HS
      </motion.h2>

      <div className="nav-links">
        {navItems.map((item) => (
          <a
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={activeSection === item.id ? 'active' : ''}
            style={{ cursor: 'pointer' }}
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar




