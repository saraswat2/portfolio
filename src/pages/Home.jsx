import { motion } from 'framer-motion'
import { FiGithub, FiMail } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import profilePhoto from '/myphotos.png'

function Home() {
  const skills = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'Git', 'GitHub']
  
  const titles = [
    'Software Developer',
    'Full Stack Developer',
    'Cloud Computing Enthusiast'
  ]
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="dark-hero-page">
      <div className="dark-hero-container">
        <motion.div 
          className="dark-hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="dark-hero-greeting">Hello</h1>
            <h2 className="dark-hero-name">I'm <span style={{ color: '#ff6b6b' }}>Himanshu</span></h2>
            <div style={{ minHeight: '90px', display: 'flex', alignItems: 'center' }}>
              <motion.h3 
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.8 }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="dark-hero-title"
                style={{
                  background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: 'none'
                }}
              >
                {titles[currentTitleIndex]}
              </motion.h3>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: '1.1rem',
              color: '#b0b0b0',
              marginBottom: '2rem',
              lineHeight: '1.8'
            }}
          >
            Passionate about building scalable web applications and solving complex problems. 
            Specialized in full-stack development and cloud technologies.
          </motion.p>

          <motion.div 
            className="dark-hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '1.5rem', marginBottom: '2.5rem' }}
          >
            <Link to="/projects" style={{ textDecoration: 'none' }}>
              <motion.button 
                className="dark-btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255, 107, 107, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ff6b6b, #ff5252)',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>🚀 Get a project</span>
              </motion.button>
            </Link>
            <Link to="/resume" style={{ textDecoration: 'none' }}>
              <motion.button 
                className="dark-btn-secondary"
                whileHover={{ 
                  scale: 1.05, 
                  background: 'rgba(255, 107, 107, 0.15)',
                  borderColor: '#ff6b6b'
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                📄 My resume
              </motion.button>
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              marginTop: '0rem'
            }}
          >
            <p style={{ 
              fontSize: '0.85rem', 
              color: '#888', 
              marginBottom: '1rem', 
              textTransform: 'uppercase', 
              letterSpacing: '3px',
              fontWeight: '600'
            }}>
              ⚡ Tech Stack
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {skills.map((skill, index) => (
                <motion.span 
                  key={index} 
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.8 + index * 0.08, 
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
                    background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.2), rgba(255, 142, 83, 0.2))',
                    borderColor: '#ff6b6b',
                    y: -8
                  }}
                  style={{
                    padding: '0.7rem 1.3rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '10px',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    color: '#e0e0e0',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="dark-hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            style={{
              position: 'relative',
              width: '400px',
              height: '400px'
            }}
          >
            {/* Gradient glow background */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 107, 107, 0.3), transparent 70%)',
              filter: 'blur(30px)',
              zIndex: 0
            }} />
            
            {/* Photo container */}
            <div style={{
              position: 'relative',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
              padding: '5px',
              boxShadow: '0 20px 60px rgba(255, 107, 107, 0.4)',
              zIndex: 1
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                background: '#1a1a2e'
              }}>
                <img 
                  src={profilePhoto} 
                  alt="Himanshu Saraswat"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.section 
        className="dark-about-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <h2 className="dark-section-title">What I Do</h2>
        <div className="dark-about-content">
          <motion.div 
            className="dark-about-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(255, 107, 107, 0.2)' }}
          >
            <motion.div 
              className="dark-card-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              💻
            </motion.div>
            <h3>Full Stack Development</h3>
            <p>Building end-to-end web applications using React, Node.js, and modern frameworks</p>
          </motion.div>
          <motion.div 
            className="dark-about-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(255, 142, 83, 0.2)' }}
          >
            <motion.div 
              className="dark-card-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              ☁️
            </motion.div>
            <h3>Cloud Computing</h3>
            <p>Deploying and managing scalable applications on cloud platforms like AWS</p>
          </motion.div>
          <motion.div 
            className="dark-about-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            whileHover={{ y: -10, boxShadow: '0 20px 60px rgba(102, 126, 234, 0.2)' }}
          >
            <motion.div 
              className="dark-card-icon"
              whileHover={{ rotate: 360, scale: 1.2 }}
              transition={{ duration: 0.6 }}
            >
              🧩
            </motion.div>
            <h3>Problem Solving</h3>
            <p>500+ problems solved on LeetCode with strong DSA and algorithmic skills</p>
          </motion.div>
        </div>
      </motion.section>

      <motion.div 
        className="dark-stats-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        {[
          { number: "500+", label: "LeetCode Problems", icon: "🎯" },
          { number: "10+", label: "Projects Completed", icon: "🚀" },
          { number: "5+", label: "Certifications", icon: "🏆" },
          { number: "6.5", label: "CGPA", icon: "📚" }
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="dark-stat-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 + index * 0.1, type: 'spring' }}
            whileHover={{ 
              y: -10, 
              scale: 1.05,
              boxShadow: '0 20px 60px rgba(255, 107, 107, 0.3)'
            }}
          >
            <motion.div 
              style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {stat.icon}
            </motion.div>
            <div className="dark-stat-number">{stat.number}</div>
            <div className="dark-stat-label">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="dark-contact-bar"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6 }}
      >
        <motion.a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshusaraswat525@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="dark-contact-link"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiMail size={20} />
        </motion.a>
        <motion.a 
          href="https://github.com/saraswat2" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dark-contact-link"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiGithub size={20} />
        </motion.a>
        <motion.a 
          href="https://leetcode.com/u/him525/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="dark-contact-link"
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <SiLeetcode size={20} />
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Home
