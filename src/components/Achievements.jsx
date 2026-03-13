import { motion } from 'framer-motion'
import { FiTrophy, FiAward, FiUsers, FiExternalLink } from 'react-icons/fi'

function Achievements() {
  const achievements = [
    {
      icon: FiTrophy,
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
    },
  ]

  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ padding: '2rem' }}
      >
        <h1 className="page-title">
          Achievements & <span className="gradient-text">Recognition</span> 🏆
        </h1>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1200px', 
          margin: '2rem auto',
          padding: '0 1rem'
        }}>
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="achievement-card-with-cert"
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="achievement-icon-box">
                    <Icon style={{ color: 'white' }} size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>
                      {achievement.title}
                    </h3>
                    <p style={{ color: '#666', marginBottom: '0.5rem', lineHeight: '1.6' }}>
                      {achievement.description}
                    </p>
                    <p style={{ fontSize: '0.875rem', color: '#667eea', fontWeight: '600', marginBottom: '1rem' }}>
                      {achievement.date}
                    </p>
                    
                    {achievement.certificateLink && (
                      <motion.a
                        href={achievement.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="certificate-link-btn"
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                      >
                        <FiExternalLink size={18} />
                        <span>View Certificate</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

export default Achievements
