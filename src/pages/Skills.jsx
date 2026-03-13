import { motion } from 'framer-motion'

function Skills() {
  const technicalSkills = [
    { name: 'C', icon: 'devicon-c-plain', level: 85, color: '#A8B9CC' },
    { name: 'C++', icon: 'devicon-cplusplus-plain', level: 90, color: '#00599C' },
    { name: 'Java', icon: 'devicon-java-plain', level: 85, color: '#007396' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain', level: 88, color: '#F7DF1E' },
    { name: 'HTML5', icon: 'devicon-html5-plain', level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: 'devicon-css3-plain', level: 90, color: '#1572B6' },
    { name: 'React', icon: 'devicon-react-original', level: 85, color: '#61DAFB' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', level: 80, color: '#339933' },
    { name: 'MySQL', icon: 'devicon-mysql-plain', level: 82, color: '#4479A1' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain', level: 78, color: '#47A248' },
    { name: 'Git', icon: 'devicon-git-plain', level: 88, color: '#F05032' },
    { name: 'GitHub', icon: 'devicon-github-original', level: 90, color: '#fff' },
    { name: 'VS Code', icon: 'devicon-vscode-plain', level: 95, color: '#007ACC' },
    { name: 'Figma', icon: 'devicon-figma-plain', level: 75, color: '#F24E1E' }
  ]

  const softSkills = [
    { name: 'Problem-Solving', icon: '🧩', level: 95, color: '#ff6b6b' },
    { name: 'Team Player', icon: '🤝', level: 90, color: '#ff8e53' },
    { name: 'Adaptability', icon: '🔄', level: 88, color: '#667eea' },
    { name: 'Communication', icon: '💬', level: 85, color: '#764ba2' },
    { name: 'Time Management', icon: '⏰', level: 92, color: '#f093fb' },
    { name: 'Leadership', icon: '👑', level: 87, color: '#4facfe' }
  ]

  return (
    <div className="dark-hero-page">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      
      <div className="dark-page-container">
        <motion.h1
          className="dark-page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span style={{ color: '#ff6b6b' }}>Skills</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#fff', textAlign: 'center', textShadow: '0 0 20px rgba(255,107,107,0.3)' }}>
            Technical <span style={{ color: '#ff6b6b' }}>Arsenal</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}>
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, type: 'spring' }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -15,
                  boxShadow: `0 20px 40px ${skill.color}40`
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '2rem',
                  borderRadius: '20px',
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
                    background: `radial-gradient(circle at center, ${skill.color}20, transparent)`,
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                />
                
                <motion.i
                  className={`${skill.icon} colored`}
                  style={{ fontSize: '4rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: index * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    rotate: 360,
                    scale: 1.2,
                    transition: { duration: 0.6 }
                  }}
                />
                
                <h3 style={{ color: '#fff', marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600', position: 'relative', zIndex: 1 }}>
                  {skill.name}
                </h3>
                
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <motion.div
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                      borderRadius: '10px',
                      boxShadow: `0 0 10px ${skill.color}`,
                      position: 'relative'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5 + index * 0.05, duration: 1 }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        right: '5px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: '#fff',
                        fontSize: '0.7rem',
                        fontWeight: 'bold'
                      }}
                    >
                      {skill.level}%
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#fff', textAlign: 'center', textShadow: '0 0 20px rgba(255,107,107,0.3)' }}>
            Soft <span style={{ color: '#ff6b6b' }}>Skills</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 2,
                  boxShadow: `0 20px 50px ${skill.color}40`
                }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '2.5rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: `radial-gradient(circle, ${skill.color}20, transparent 70%)`,
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1, rotate: 180 }}
                  transition={{ duration: 0.6 }}
                />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                  <motion.div
                    style={{ fontSize: '3rem' }}
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                      {skill.name}
                    </h3>
                    <div style={{ fontSize: '1.5rem', fontWeight: '700', color: skill.color }}>
                      {skill.level}%
                    </div>
                  </div>
                </div>
                
                <div style={{
                  width: '100%',
                  height: '12px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <motion.div
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd, ${skill.color})`,
                      borderRadius: '10px',
                      boxShadow: `0 0 20px ${skill.color}`,
                      position: 'relative'
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1.2 }}
                  >
                    <motion.div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
