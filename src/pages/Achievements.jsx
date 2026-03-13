import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiExternalLink } from 'react-icons/fi'

function Achievements() {
  const achievements = [
    {
      icon: FiAward,
      title: "4th Position in Web ka Hackathon",
      description: "Achieved 4th position in university-level hackathon",
      date: "Mar 2024",
      certificateLink: "https://drive.google.com/drive/folders/1U6ACFXcIeLnb7o5ruEpgrSEImUkgySYC?ths=true"
    },
    {
      icon: FiUsers,
      title: "AWS Student Community Day",
      description: "Participated in AWS Student Community Day Jalandhar workshop, organized by AWS",
      date: "Nov 2025",
      certificateLink: "https://drive.google.com/file/d/1wuYgvKGPf3-2IqO6flB6ry1Z27kaG3OY/view?usp=drive_link"
    }
  ]

  return (
    <div className="page">
      <section className="section">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="page-title"
        >
          Achievements & <span className="gradient-text">Recognition</span> 🏆
        </motion.h1>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1200px', 
          margin: '0 auto'
        }}>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03, y: -8 }}
                className="card"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                  <div style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '70px',
                    minHeight: '70px'
                  }}>
                    <Icon style={{ color: 'white' }} size={32} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      fontSize: '1.4rem', 
                      fontWeight: 'bold', 
                      marginBottom: '0.75rem', 
                      color: '#333',
                      lineHeight: '1.4'
                    }}>
                      {achievement.title}
                    </h3>
                    <p style={{ 
                      color: '#666', 
                      marginBottom: '0.75rem', 
                      lineHeight: '1.6',
                      fontSize: '1rem'
                    }}>
                      {achievement.description}
                    </p>
                    <p style={{ 
                      fontSize: '0.95rem', 
                      color: '#667eea', 
                      fontWeight: '600', 
                      marginBottom: '1rem' 
                    }}>
                      📅 {achievement.date}
                    </p>
                    
                    <motion.a
                      href={achievement.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        padding: '0.75rem 1.5rem',
                        background: 'linear-gradient(135deg, #667eea, #764ba2)',
                        color: 'white',
                        borderRadius: '10px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <FiExternalLink size={18} />
                      <span>View Certificate</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Achievements
