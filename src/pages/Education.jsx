import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab, India",
      duration: "Since Aug 2023",
      cgpa: "6.5 CGPA",
      icon: "🎓"
    },
    {
      degree: "Intermediate (12th Grade)",
      institution: "SSD Inter-College, Hathras, Uttar Pradesh",
      duration: "Apr 2021 - Mar 2022",
      cgpa: "60.2%",
      icon: "📚"
    },
    {
      degree: "Matriculation (10th Grade)",
      institution: "SSD Inter-College, Hathras, Uttar Pradesh",
      duration: "Apr 2019 - Mar 2020",
      cgpa: "82%",
      icon: "📖"
    }
  ]

  const certifications = [
    {
      title: "C/C++/Java Programming",
      issuer: "iamneo",
      date: "Aug 2025",
      icon: "💻",
      link: "https://drive.google.com/drive/folders/1U6ACFXcIeLnb7o5ruEpgrSEImUkgySYC?ths=true"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "Sep 2024",
      icon: "🌐",
      link: "https://drive.google.com/drive/folders/1U6ACFXcIeLnb7o5ruEpgrSEImUkgySYC?ths=true"
    },
    {
      title: "Software Development Processes and Methodologies",
      issuer: "Coursera",
      date: "Apr 2024",
      icon: "🚀",
      link: "https://coursera.org/verify/JUPX4MJQAVL2"
    },
    {
      title: "Cipher Schools (EdTech Company) Certificate",
      issuer: "Cipher Schools",
      date: "Jun 2025",
      icon: "🎓",
      link: "#"
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
          Education & <span style={{ color: '#ff6b6b' }}>Certifications</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Education</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '4rem' }}>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '2rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'center'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  minWidth: '80px',
                  textAlign: 'center'
                }}>
                  {edu.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>
                    {edu.degree}
                  </h3>
                  <p style={{ color: '#b0b0b0', marginBottom: '0.5rem' }}>
                    {edu.institution}
                  </p>
                  <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem' }}>
                    <span style={{ color: '#ff6b6b' }}>📅 {edu.duration}</span>
                    <span style={{ color: '#ff6b6b' }}>📊 {edu.cgpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Certifications</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '2rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at center, rgba(255,107,107,0.1), transparent)',
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                />
                
                <div style={{ fontSize: '3rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                  {cert.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>
                  {cert.title}
                </h3>
                <p style={{ color: '#b0b0b0', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>
                  {cert.issuer}
                </p>
                <span style={{ color: '#ff6b6b', fontSize: '0.9rem', display: 'block', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                  {cert.date}
                </span>
                
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    background: '#ff6b6b',
                    color: '#fff',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <FiExternalLink size={18} />
                  View Certificate
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Education
