import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/projects'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [filter, setFilter] = useState('all')

  const allTechs = [...new Set(projects.flatMap(p => p.tech))]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.tech.includes(filter))

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development, algorithms, and software engineering.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white'
                  : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              All
            </button>
            {allTechs.slice(0, 6).map(tech => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  filter === tech
                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                    : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full text-sm">
                    {project.date}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary dark:bg-primary/20 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                    >
                      <FiGithub size={20} />
                      <span>Code</span>
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
                      >
                        <FiExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
