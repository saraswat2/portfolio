import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                I am a passionate <span className="font-semibold text-primary">Software Developer</span> currently pursuing a Bachelor's degree in Computer Science and Engineering at Lovely Professional University. I enjoy building scalable web applications, solving algorithmic problems, and exploring modern technologies.
              </p>
              
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                With a strong foundation in <span className="font-semibold">Data Structures & Algorithms</span>, I love tackling complex problems and creating efficient solutions. My expertise spans across full-stack development, with proficiency in C++, Java, JavaScript, and modern frameworks like React.js.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always eager to learn new technologies and collaborate on innovative projects. When I'm not coding, you can find me participating in hackathons, contributing to open-source projects, or solving problems on LeetCode.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
             