import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab, India",
      duration: "Since Aug 2023",
      score: "6.8 CGPA",
      icon: "🎓",
      color: "#ff6b6b",
      current: true
    },
    {
      degree: "Intermediate (12th Grade)",
      field: "Science Stream",
      institution: "SSD Inter-College, Hathras, Uttar Pradesh",
      duration: "Apr 2021 - Mar 2022",
      score: "60.2%",
      icon: "📚",
      color: "#ff8e53",
      current: false
    },
    {
      degree: "Matriculation (10th Grade)",
      field: "General Studies",
      institution: "SSD Inter-College, Hathras, Uttar Pradesh",
      duration: "Apr 2019 - Mar 2020",
      score: "82%",
      icon: "📖",
      color: "#667eea",
      current: false
    }
  ]

  const certifications = [
    {
      title: "C/C++/Java Programming",
      issuer: "iamneo",
      date: "Aug 2025",
      image: "/portfolio/cpp.png",
      link: "https://drive.google.com/file/d/1mcplo-CaHKQt3Hsz3kQ1ctnOfMZ51LBS/view?usp=drive_link"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "Sep 2024",
      image: "/portfolio/image2.png",
      link: "https://drive.google.com/drive/folders/1U6ACFXcIeLnb7o5ruEpgrSEImUkgySYC?ths=true"
    },
    {
      title: "Software Development Processes and Methodologies",
      issuer: "Coursera",
      date: "Apr 2024",
      image: "/portfolio/image1.png",
      link: "https://coursera.org/verify/JUPX4MJQAVL2"
    },
    {
      title: "Cipher Schools Certificate",
      issuer: "Cipher Schools",
      date: "Jun 2025",
      image: "/portfolio/image5.png",
      link: "https://drive.google.com/file/d/11kWv-_ZI2e0sUYI6J4mj1uxRpdcnQMCB/view?usp=drive_link"
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
          Education & <span style={{ color: '#ff6b6b' }}>Certificates</span>
        </motion.h1>

        {/* Timeline */}
        <div style={{ position: 'relative', marginBottom: '56px' }}>
          {/* vertical line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0, bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #ff6b6b, #667eea)',
            transform: 'translateX(-50%)',
            zIndex: 0
          }} />

          {education.map((edu, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  marginBottom: '40px',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {/* dot on timeline */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.15, type: 'spring' }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '32px',
                    transform: 'translate(-50%, -50%)',
                    width: '20px', height: '20px',
                    borderRadius: '50%',
                    background: edu.color,
                    boxShadow: `0 0 0 4px rgba(26,26,46,1), 0 0 0 6px ${edu.color}`,
                    zIndex: 2
                  }}
                />

                {/* card */}
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  style={{
                    width: '44%',
                    background: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '20px',
                    border: `1px solid ${edu.color}40`,
                    padding: '28px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default'
                  }}
                >
                  {/* glow top bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, ${edu.color}, transparent)`
                  }} />

                  {/* bg glow */}
                  <div style={{
                    position: 'absolute',
                    top: '-40px', right: '-40px',
                    width: '120px', height: '120px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${edu.color}20, transparent)`,
                    pointerEvents: 'none'
                  }} />

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{
                      fontSize: '2.2rem',
                      width: '56px', height: '56px',
                      borderRadius: '14px',
                      background: `${edu.color}20`,
                      border: `1px solid ${edu.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {edu.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '700' }}>
                          {edu.degree}
                        </h3>
                        {edu.current && (
                          <span style={{
                            padding: '2px 10px',
                            background: `${edu.color}30`,
                            border: `1px solid ${edu.color}`,
                            borderRadius: '20px',
                            fontSize: '0.7rem',
                            color: edu.color,
                            fontWeight: '700',
                            letterSpacing: '0.5px'
                          }}>CURRENT</span>
                        )}
                      </div>
                      <p style={{ color: edu.color, fontSize: '0.9rem', fontWeight: '600', marginBottom: '6px' }}>
                        {edu.field}
                      </p>
                      <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '12px' }}>
                        📍 {edu.institution}
                      </p>
                      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <span style={{
                          padding: '4px 12px',
                          background: 'rgba(255,255,255,0.07)',
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          color: '#ccc'
                        }}>📅 {edu.duration}</span>
                        <span style={{
                          padding: '4px 12px',
                          background: `${edu.color}20`,
                          borderRadius: '20px',
                          fontSize: '0.8rem',
                          color: edu.color,
                          fontWeight: '700'
                        }}>📊 {edu.score}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Certifications */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '28px', color: '#fff', textAlign: 'center', fontWeight: '700' }}>
            🏅 <span style={{ color: 'var(--accent)' }}>Certificates</span>
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px'
          }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -8 }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '100%', height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px',
                    background: 'linear-gradient(to top, rgba(26,26,46,0.95), transparent)'
                  }} />
                </div>
                <div style={{ padding: '16px' }}>
                  <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '4px', lineHeight: '1.4' }}>{cert.title}</h3>
                  <p style={{ color: '#ff8e53', fontWeight: '600', fontSize: '0.9rem', marginBottom: '4px' }}>{cert.issuer}</p>
                  <span style={{ color: '#888', fontSize: '0.8rem', display: 'block', marginBottom: '12px' }}>📅 {cert.date}</span>
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '6px 14px',
                      background: 'linear-gradient(135deg, #ff6b6b, #ff8e53)',
                      color: '#fff', borderRadius: '8px',
                      textDecoration: 'none', fontWeight: '600', fontSize: '0.85rem'
                    }}
                  >
                    <FiExternalLink size={14} /> View Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Education
