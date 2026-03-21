import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

function Projects() {
  const projects = [
    {
      title: "Gym Management System",
      description: "Developed a Gym Management System to manage member registration, attendance tracking, trainers, plans, and payments efficiently. Implemented CRUD operations with a structured backend to ensure secure data handling and smooth gym operations.",
      tech: ["Java", "Spring Boot", "MySQL", "REST APIs"],
      github: "https://github.com/saraswat2",
      date: "Feb 2026"
    },
    {
      title: "Website Design Project",
      description: "Built a responsive landing page prototype using semantic HTML and modular CSS. Implemented auto play hero demo video, testimonial carousel, and demo-request form with client-side validation. Organized assets and prepared the site for GitHub Pages.",
      tech: ["HTML5", "CSS3", "JavaScript", "Google Fonts", "Git"],
      github: "https://github.com/saraswat2",
      date: "Jan 2026"
    },
    {
      title: "Dice Game",
      description: "Created a smooth user input/output system for repeated gameplay, score updates, session control using loops and conditional logic. Executes random dice rolls, manages score tracking, and resolves win-loss logic.",
      tech: ["C++", "STL", "Console I/O", "Loops & Conditional Logic"],
      github: "https://github.com/saraswat2",
      date: "Jun 2025"
    },
    {
      title: "Library Management System",
      description: "Built a Library Management System to handle book inventory, member registration, issue/return tracking, and fine calculation. Implemented using OOP principles with efficient data structures for fast search and retrieval operations.",
      tech: ["C++", "Data Structures", "Algorithms", "OOP"],
      github: "https://github.com/saraswat2",
      date: "2025"
    }
  ]

  return (
    <div className="dark-hero-page">
      <div className="dark-page-container">
        <motion.h1
          className="dark-page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span style={{ color: '#ff6b6b' }}>Projects</span>
        </motion.h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 107, 107, 0.2)',
                  borderBottomLeftRadius: '10px',
                  fontSize: '0.85rem',
                  color: '#ff6b6b',
                  fontWeight: '600'
                }}
              >
                {project.date}
              </motion.div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff', marginTop: '1rem' }}>
                {project.title}
              </h3>
              <p style={{ color: '#b0b0b0', marginBottom: '1.5rem', lineHeight: '1.7', fontSize: '1rem' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.4rem 1rem',
                      background: 'rgba(255, 107, 107, 0.1)',
                      border: '1px solid rgba(255, 107, 107, 0.3)',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      color: '#ff6b6b'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '5px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  <FiGithub /> Code
                </motion.a>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    background: '#ff6b6b',
                    borderRadius: '5px',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '0.9rem'
                  }}
                >
                  <FiExternalLink /> View
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
