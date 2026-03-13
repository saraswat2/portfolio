import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/">
        <motion.h2
          whileHover={{ scale: 1.1 }}
          className="logo"
        >
          HS
        </motion.h2>
      </Link>
      
      <div className="nav-links">
        {navItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  )
}

export default Navbar
