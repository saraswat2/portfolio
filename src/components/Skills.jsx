import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '../data/skills'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{skill.name}</span>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
          className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
        />
      </div>
    </motion.div>
  )

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Programming Languages</h3>
              {skills.languages.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Web Development</h3>
              {skills.webDev.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Databases</h3>
              {skills.databases.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 gradient-text">Tools & Platforms</h3>
              {skills.tools.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.concepts.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 p-6 rounded-xl text-center"
                >
                  <h4 className="font-semibold text-lg mb-2">{skill.name}</h4>
                  <div className="text-2xl font-bold gradient-text">{skill.level}%</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
