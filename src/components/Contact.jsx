import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    // EmailJS integration would go here
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: FiMail, label: 'Email', value: 'himanshusaraswat525@gmail.com', href: 'mailto:himanshusaraswat525@gmail.com' },
    { icon: FiPhone, label: 'Phone', value: '+91-8923771741', href: 'tel:+918923771741' },
    { icon: FiMapPin, label: 'Location', value: 'Punjab, India', href: '#' }
  ]

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/saraswat2' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/himanshu-saraswat' },
    { icon: SiLeetcode, label: 'LeetCode', href: 'https://leetcode.com/u/him525/' }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg hover:shadow-lg transition-all"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-white dark:bg-gray-900 rounded-lg hover:bg-primary hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={28} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    required
                    rows="5"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-primary resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
