import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiBriefcase } from 'react-icons/fi'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      title: "C++ Programming Training",
      company: "Cipher Schools",
      period: "Jun 2025",
      description: [
        "Mastered C++ fundamentals and Object-Oriented Programming concepts",
        "Applied OOP principles: Encapsulation, Inheritance, and Polymorphism",
        "Built efficient, robust, and reusable code using STL"
      ],
      type: "Training"
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Experience & <span className="gradient-text">Training</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
              >
                <div className="absolute -left-3 top-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <FiBriefcase className="text-white" size={14} />
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <span className="text-primary font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    {exp.company} • {exp.type}
                  </p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">▹</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
