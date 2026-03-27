import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

function Achievements() {
  const achievements = [
    {
      title: "4th Position in Web ka Hackathon",
      description: "Achieved 4th position in university-level hackathon",
      date: "Mar 2024",
      image: "/portfolio/hackathon.png",
      certificateLink: "https://drive.google.com/file/d/12lWML5bILeB4_THt2PvhLa5hNLiEeuxl/view?usp=drive_link"
    },
    {
      title: "AWS Student Community Day",
      description: "Participated in AWS Student Community Day Jalandhar workshop, organized by AWS",
      date: "Nov 2025",
      image: "/portfolio/image3.jpg",
      certificateLink: "https://drive.google.com/file/d/1wuYgvKGPf3-2IqO6flB6ry1Z27kaG3OY/view?usp=drive_link"
    }
  ]

  return (
    <div className="dark-hero-page">
      <div className="dark-page-container">
        <motion.h1 className="dark-page-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          Achievements & <span style={{ color: 'var(--accent)' }}>Recognition</span> 🏆
        </motion.h1>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2rem', maxWidth: '900px', margin: '0 auto'
        }}>
          {achievements.map((achievement, index) => (
            <motion.div key={index}
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -8 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                border: '1px solid rgba(255,255,255,0.1)',
                overflow: 'hidden', cursor: 'pointer'
              }}>
              <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={achievement.image} alt={achievement.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '60px',
                  background: 'linear-gradient(to top, rgba(26,26,46,0.9), transparent)'
                }} />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#fff', marginBottom: '8px', lineHeight: '1.4', fontWeight: '700' }}>
                  {achievement.title}
                </h3>
                <p style={{ color: '#b0b0b0', marginBottom: '8px', lineHeight: '1.6', fontSize: '0.9rem' }}>
                  {achievement.description}
                </p>
                <span style={{ color: '#888', fontSize: '0.8rem', display: 'block', marginBottom: '16px' }}>
                  📅 {achievement.date}
                </span>
                <motion.a href={achievement.certificateLink} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    padding: '8px 18px',
                    background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                    color: '#fff', borderRadius: '8px',
                    textDecoration: 'none', fontWeight: '600', fontSize: '0.88rem'
                  }}>
                  <FiExternalLink size={15} /> View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements
