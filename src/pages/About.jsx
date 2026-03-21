import { motion } from 'framer-motion'

function About() {
  return (
    <div className="dark-hero-page">
      <div className="dark-page-container">
        <motion.h1
          className="dark-page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          About <span style={{ color: '#ff6b6b' }}>Me</span>
        </motion.h1>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              padding: '3rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '200%',
                height: '200%',
                background: 'radial-gradient(circle, rgba(255,107,107,0.1) 0%, transparent 70%)',
                animation: 'rotate 20s linear infinite',
                pointerEvents: 'none'
              }}></div>
              
              <motion.p
                style={{ fontSize: '1.2rem', lineHeight: '2', color: '#e0e0e0', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Hello! I'm <motion.strong 
                  style={{ color: '#ff6b6b', fontSize: '1.3rem' }}
                  whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(255,107,107,0.8)' }}
                >Himanshu Saraswat</motion.strong>, a Software Engineer driven by a passion for architecting 
                high-performance web systems with real-world impact. I blend a rigorous understanding of{' '}
                <strong style={{ color: '#ff6b6b' }}>Data Structures & Algorithms</strong> (proven by{' '}
                <strong style={{ color: '#ff6b6b' }}>200+ LeetCode problems</strong>) with practical full-stack development.
              </motion.p>
              
              <motion.p
                style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#b0b0b0', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                I leverage tools like <strong style={{ color: '#ff6b6b' }}>Java, Spring Boot, React.js, and MySQL</strong> to 
                build efficient, scalable solutions. Highly proficient in{' '}
                <strong style={{ color: '#ff8e53' }}>AWS and cloud infrastructure</strong>, continuously exploring modern 
                cloud technologies to bridge the gap between development and deployment, with a track record of 
                delivering robust systems and optimized web applications.
              </motion.p>
              
              <motion.p
                style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#b0b0b0', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Currently pursuing my <strong style={{ color: '#ff6b6b' }}>Computer Science degree at LPU, Punjab</strong>, 
                I am committed to continuous learning and contributing to the future of technology.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              style={{ marginTop: '2rem' }}
            >
              <h3 style={{ fontSize: '2rem', color: '#ff6b6b', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(255,107,107,0.3)' }}>
                Interests & Hobbies
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {[
                  { icon: '💻', text: 'Competitive Programming' },
                  { icon: '🚀', text: 'Web Development' },
                  { icon: '☁️', text: 'Cloud Computing' },
                  { icon: '🤖', text: 'AI & Machine Learning' },
                  { icon: '📚', text: 'Reading Tech Blogs' },
                  { icon: '🎯', text: 'Problem Solving' }
                ].map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    style={{
                      background: 'rgba(255, 107, 107, 0.1)',
                      padding: '1rem 1.5rem',
                      borderRadius: '30px',
                      border: '2px solid rgba(255, 107, 107, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{interest.icon}</span>
                    <span style={{ color: '#fff', fontWeight: '600' }}>{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {[
              { icon: '🧩', number: '200+', label: 'LeetCode Problems', color: '#ff6b6b' },
              { icon: '🚀', number: '10+', label: 'Projects Completed', color: '#ff8e53' },
              { icon: '🏆', number: '5+', label: 'Certifications', color: '#667eea' },
              { icon: '📚', number: '6.5', label: 'CGPA', color: '#764ba2' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: -10, boxShadow: `0 10px 40px ${stat.color}40` }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '2rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${stat.color}20, transparent)`,
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  style={{ fontSize: '3rem', marginBottom: '0.5rem' }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  style={{ fontSize: '2.5rem', fontWeight: '700', color: stat.color, marginBottom: '0.5rem' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                >
                  {stat.number}
                </motion.div>
                <div style={{ color: '#b0b0b0', fontSize: '0.95rem' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
