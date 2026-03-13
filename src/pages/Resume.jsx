import { motion } from 'framer-motion'
import { FiDownload, FiExternalLink } from 'react-icons/fi'

function Resume() {
  // IMPORTANT: Save your resume image as "resume.png" in the "public" folder
  const resumeImageUrl = "/resume.png"
  
  return (
    <div className="dark-hero-page">
      <div className="dark-page-container">
        <motion.h1
          className="dark-page-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My <span style={{ color: '#ff6b6b' }}>Resume</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}
        >
          <motion.a
            href={resumeImageUrl}
            download="Himanshu_Saraswat_Resume.png"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: '#ff6b6b',
              color: '#fff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            <FiDownload size={20} />
            Download Resume
          </motion.a>
          
          <motion.a
            href={resumeImageUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'transparent',
              color: '#fff',
              border: '2px solid #fff',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1rem'
            }}
          >
            <FiExternalLink size={20} />
            Open in New Tab
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
        >
          <img
            src={resumeImageUrl}
            alt="Himanshu Saraswat Resume"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: 'rgba(255, 107, 107, 0.1)',
            borderRadius: '15px',
            border: '1px solid rgba(255, 107, 107, 0.3)'
          }}
        >
          <h3 style={{ color: '#ff6b6b', marginBottom: '1rem', fontSize: '1.3rem' }}>
            📄 How to Add Your Resume
          </h3>
          <p style={{ color: '#b0b0b0', lineHeight: '1.8' }}>
            1. Take a screenshot of your resume<br/>
            2. Save it as <strong style={{ color: '#fff' }}>resume.png</strong><br/>
            3. Place it in the <strong style={{ color: '#fff' }}>public</strong> folder<br/>
            4. Refresh the page
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
