import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/saraswat2', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/himanshu-saraswat', label: 'LinkedIn' },
    { icon: SiLeetcode, href: 'https://leetcode.com/u/him525/', label: 'LeetCode' },
    { icon: FiMail, href: 'mailto:himanshusaraswat525@gmail.com', label: 'Email' }
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              Hi, I'm <span className="gradient-text">Himanshu Saraswat</span>
            </motion.h1>

            <div className="text-2xl md:text-3xl mb-6 h-20">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="gradient-text font-semibold"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              Building scalable software and modern web experiences. Passionate about solving complex problems and creating impactful solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-primary text-primary dark:border-secondary dark:text-secondary rounded-lg font-semibold hover:bg-primary hover:text-white dark:hover:bg-secondary transition-all"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary hover:text-white dark:hover:bg-primary transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Himanshu Saraswat"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"
              ></motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
