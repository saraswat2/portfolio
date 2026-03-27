import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiGithub } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

function Contact() {
  const contactInfo = [
    { icon: FiMail,     label: "Email",    value: "himanshusaraswat525@gmail.com", link: "https://mail.google.com/mail/?view=cm&fs=1&to=himanshusaraswat525@gmail.com" },
    { icon: FiPhone,    label: "Phone",    value: "+91-8923771741",                link: "tel:+918923771741" },
    { icon: FiGithub,   label: "GitHub",   value: "github.com/saraswat2",          link: "https://github.com/saraswat2" },
    { icon: SiLeetcode, label: "LeetCode", value: "leetcode.com/u/him525",         link: "https://leetcode.com/u/him525/" },
  ]

  return (
    <div className="dark-hero-page">
      <div className="dark-page-container">
        <motion.h1 className="dark-page-title" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          Get In <span style={{ color: 'var(--accent)' }}>Touch</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '1.1rem', color: '#b0b0b0', lineHeight: '1.8' }}>
            I'm always open to discussing new projects, creative ideas, or opportunities.
            Feel free to reach out through any of the channels below!
          </p>
        </motion.div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem', maxWidth: '1000px', margin: '0 auto'
        }}>
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a key={index} href={contact.link} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  padding: '2rem 1.5rem', borderRadius: '15px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textDecoration: 'none',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'
                }}>
                <div style={{
                  width: '70px', height: '70px',
                  background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff'
                }}>
                  <Icon size={28} />
                </div>
                <h3 style={{ fontSize: '1.1rem', color: '#fff', fontWeight: '700' }}>{contact.label}</h3>
                <p style={{ color: '#b0b0b0', fontSize: '0.85rem', textAlign: 'center', wordBreak: 'break-all' }}>
                  {contact.value}
                </p>
              </motion.a>
            )
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: '#fff' }}>
            Let's Build Something Amazing Together! 🚀
          </h2>
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=himanshusaraswat525@gmail.com"
            target="_blank" rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-block', padding: '1rem 3rem',
              background: 'var(--accent)', color: '#fff', borderRadius: '8px',
              textDecoration: 'none', fontSize: '1rem', fontWeight: '700'
            }}>
            Send Me an Email
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
