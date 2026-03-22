import { motion } from 'framer-motion'
import { SiC, SiCplusplus, SiJavascript, SiHtml5, SiCss, SiReact, SiNodedotjs, SiMysql, SiMongodb, SiGit, SiGithub, SiSpringboot } from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa'

function Skills() {
  const technicalSkills = [
    { name: 'C',           icon: SiC,          level: 85, color: '#A8B9CC' },
    { name: 'C++',         icon: SiCplusplus,  level: 90, color: '#00599C' },
    { name: 'Java',        icon: FaJava,        level: 85, color: '#f89820' },
    { name: 'JavaScript',  icon: SiJavascript, level: 88, color: '#F7DF1E' },
    { name: 'HTML5',       icon: SiHtml5,      level: 95, color: '#E34F26' },
    { name: 'CSS3',        icon: SiCss,       level: 90, color: '#1572B6' },
    { name: 'React',       icon: SiReact,      level: 85, color: '#61DAFB' },
    { name: 'Node.js',     icon: SiNodedotjs,  level: 80, color: '#339933' },
    { name: 'MySQL',       icon: SiMysql,      level: 82, color: '#4479A1' },
    { name: 'MongoDB',     icon: SiMongodb,    level: 78, color: '#47A248' },
    { name: 'Git',         icon: SiGit,        level: 88, color: '#F05032' },
    { name: 'GitHub',      icon: SiGithub,     level: 90, color: '#ffffff' },
    { name: 'Spring Boot', icon: SiSpringboot, level: 80, color: '#6DB33F' },
    { name: 'AWS',         icon: FaAws,        level: 75, color: '#FF9900' },
  ]

  const softSkills = [
    { name: 'Problem-Solving', icon: '🧩', level: 95, color: '#ff6b6b' },
    { name: 'Team Player',     icon: '🤝', level: 90, color: '#ff8e53' },
    { name: 'Adaptability',    icon: '🔄', level: 88, color: '#667eea' },
    { name: 'Communication',   icon: '💬', level: 85, color: '#764ba2' },
    { name: 'Time Management', icon: '⏰', level: 92, color: '#f093fb' },
    { name: 'Leadership',      icon: '👑', level: 87, color: '#4facfe' },
  ]

  return (
    <div className="dark-hero-page">
      <div className="dark-page-container">
        <motion.h1
          className="dark-page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span style={{ color: '#ff6b6b' }}>Skills</span>
        </motion.h1>

        {/* Technical Skills */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 style={{ fontSize: '28px', marginBottom: '28px', color: '#fff', textAlign: 'center', fontWeight: '700' }}>
            Technical <span style={{ color: '#ff6b6b' }}>Arsenal</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gap: '16px',
            marginBottom: '56px'
          }}>
            {technicalSkills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, type: 'spring' }}
                  whileHover={{ scale: 1.1, y: -12, boxShadow: `0 20px 40px ${skill.color}40` }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    padding: '24px 16px',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <motion.div
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                      background: `radial-gradient(circle at center, ${skill.color}25, transparent)`,
                      opacity: 0
                    }}
                    whileHover={{ opacity: 1 }}
                  />

                  <motion.div
                    style={{ marginBottom: '10px', position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'center' }}
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, delay: index * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <IconComponent size={48} color={skill.color} />
                  </motion.div>

                  <h3 style={{ color: '#fff', marginBottom: '10px', fontSize: '13px', fontWeight: '600', position: 'relative', zIndex: 1 }}>
                    {skill.name}
                  </h3>

                  <div style={{
                    width: '100%', height: '5px',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '10px', overflow: 'hidden',
                    position: 'relative', zIndex: 1
                  }}>
                    <motion.div
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}bb)`,
                        borderRadius: '10px',
                        boxShadow: `0 0 8px ${skill.color}`
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + index * 0.05, duration: 1 }}
                    />
                  </div>
                  <div style={{ color: skill.color, fontSize: '11px', marginTop: '5px', fontWeight: '600', position: 'relative', zIndex: 1 }}>
                    {skill.level}%
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 style={{ fontSize: '28px', marginBottom: '28px', color: '#fff', textAlign: 'center', fontWeight: '700' }}>
            Soft <span style={{ color: '#ff6b6b' }}>Skills</span>
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.04, boxShadow: `0 20px 50px ${skill.color}40` }}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute', top: '-50%', left: '-50%',
                    width: '200%', height: '200%',
                    background: `radial-gradient(circle, ${skill.color}20, transparent 70%)`,
                    opacity: 0
                  }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px', position: 'relative', zIndex: 1 }}>
                  <motion.div
                    style={{ fontSize: '32px' }}
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    {skill.icon}
                  </motion.div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ color: '#fff', fontSize: '15px', marginBottom: '2px', fontWeight: '600' }}>
                      {skill.name}
                    </h3>
                    <div style={{ fontSize: '18px', fontWeight: '700', color: skill.color }}>
                      {skill.level}%
                    </div>
                  </div>
                </div>

                <div style={{
                  width: '100%', height: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '10px', overflow: 'hidden',
                  position: 'relative', zIndex: 1
                }}>
                  <motion.div
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                      borderRadius: '10px',
                      boxShadow: `0 0 12px ${skill.color}`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1.2 }}
                  />
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
