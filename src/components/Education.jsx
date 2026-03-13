import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward } from 'react-icons/fi'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      period: "Aug 2023 - Present",
      cgpa: "6.5 CGPA",
      subjects: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Object-Oriented Programming",
        "Software Engineering"
      ]
    },
    {
      degree: "Intermediate (12th)",
      institution: "SSD Inter-College",
      location: "Hathras, Uttar Pradesh",
      period: "Apr 2021 - Mar 2022",
      cgpa: "60.2%",
      subjects: []
    },
    {
      degree: "Matriculation (10th)",
      institution: "SSD Inter-College",
      location: "Hathras, Uttar Pradesh",
      period: "2020",
      cgpa: "82%",
      subjects: []
    }
  ]

  const certifications = [
    {
      title: "C/C++/Java Programming",
      issuer: "iamneo",
      date: "Aug 2025"
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google",
      date: "Sep 2024"
    },
    {
      title: "Software Development Processes and Methodologies",
      issuer: "Coursera",
      date: "Apr 2024"
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Education & <span className="gradient-text">Certifications</span>
          </h2>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Education</h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <FiAward className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 mb-2">
                        {edu.location} • {edu.period}
                      </p>
                      <p className="font-semibold text-primary mb-3">{edu.cgpa}</p>
                      {edu.subjects.length > 0 && (
                        <div>
                          <p className="font-semibold mb-2">Key Subjects:</p>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((subject, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                              >
                                {subject}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiAward className="text-white" size={28} />
                  </div>
                  <h4 className="font-bold mb-2">{cert.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
