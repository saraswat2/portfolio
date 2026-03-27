import { motion } from 'framer-motion'

function About() {
  return (
    <div className="dark-hero-page">
      <div className="dark-page-container">
        <motion.h1 className="dark-page-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          About <span style={{ color: 'var(--accent)' }}>Me</span>
        </motion.h1>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px', marginBottom: '24px' }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div style={{
              background: 'rgba(255,255,255,0.05)',
              backdropFilter: 'blur(10px)',
              padding: '40px', borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              position: 'relative', overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute', top: '-50%', right: '-50%',
                width: '200%', height: '200%',
                background: 'radial-gradient(circle, rgba(255,107,107,0.06) 0%, transparent 70%)',
                animation: 'rotate 20s linear infinite', pointerEvents: 'none'
              }} />
              <motion.p style={{ fontSize: '17px', lineHeight: '2', color: '#e0e0e0', marginBottom: '20px', position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                Hello! I'm <motion.strong style={{ color: 'var(--accent)', fontSize: '18px' }}
                  whileHover={{ scale: 1.1 }}>Himanshu Saraswat</motion.strong>, a Software Engineer driven by a passion for architecting
                high-performance web systems with real-world impact. I blend a rigorous understanding of{' '}
                <strong style={{ color: 'var(--accent)' }}>Data Structures & Algorithms</strong> (proven by{' '}
                <strong style={{ color: 'var(--accent)' }}>200+ LeetCode problems</strong>) with practical full-stack development.
              </motion.p>
              <motion.p style={{ fontSize: '16px', lineHeight: '1.9', color: '#b0b0b0', marginBottom: '20px', position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                I leverage tools like <strong style={{ color: 'var(--accent)' }}>Java, Spring Boot, React.js, and MySQL</strong> to
                build efficient, scalable solutions. Highly proficient in{' '}
                <strong style={{ color: 'var(--accent2)' }}>AWS and cloud infrastructure</strong>.
              </motion.p>
              <motion.p style={{ fontSize: '16px', lineHeight: '1.9', color: '#b0b0b0', position: 'relative', zIndex: 1 }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                Currently pursuing my <strong style={{ color: 'var(--accent)' }}>Computer Science degree at LPU, Punjab</strong>,
                committed to continuous learning and contributing to the future of technology.
              </motion.p>
            </div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} style={{ marginTop: '24px' }}>
              <h3 style={{ fontSize: '22px', color: 'var(--accent)', marginBottom: '16px' }}>Interests & Hobbies</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {[
                  { icon: '💻', text: 'Competitive Programming' },
                  { icon: '🚀', text: 'Web Development' },
                  { icon: '☁️', text: 'Cloud Computing' },
                  { icon: '🤖', text: 'AI & Machine Learning' },
                  { icon: '📚', text: 'Reading Tech Blogs' },
                  { icon: '🎯', text: 'Problem Solving' },
                ].map((interest, index) => (
                  <motion.div key={index}
                    initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    style={{
                      background: 'rgba(255,107,107,0.1)', padding: '8px 16px', borderRadius: '30px',
                      border: '1.5px solid rgba(255,107,107,0.3)',
                      display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'
                    }}>
                    <span style={{ fontSize: '18px' }}>{interest.icon}</span>
                    <span style={{ color: '#fff', fontWeight: '600', fontSize: '13px' }}>{interest.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { icon: '🧩', number: '200+', label: 'LeetCode Problems', color: '#ff6b6b' },
              { icon: '🚀', number: '10+',  label: 'Projects Completed', color: '#ff8e53' },
              { icon: '🏆', number: '5+',   label: 'Certifications',     color: '#667eea' },
              { icon: '📚', number: '6.8',  label: 'CGPA',               color: '#a78bfa' },
            ].map((stat, index) => (
              <motion.div key={index}
                initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: -8, boxShadow: `0 10px 40px ${stat.color}30` }}
                style={{
                  background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)',
                  padding: '22px', borderRadius: '15px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textAlign: 'center', position: 'relative', overflow: 'hidden', cursor: 'pointer'
                }}>
                <motion.div style={{ fontSize: '32px', marginBottom: '6px' }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}>
                  {stat.icon}
                </motion.div>
                <div style={{ fontSize: '28px', fontWeight: '700', color: stat.color, marginBottom: '4px' }}>{stat.number}</div>
                <div style={{ color: '#b0b0b0', fontSize: '13px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
