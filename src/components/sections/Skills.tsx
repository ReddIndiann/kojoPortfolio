import { motion } from 'framer-motion'

interface SkillsProps {
  isDarkMode: boolean;
}

const Skills = ({ isDarkMode }: SkillsProps) => {
  return (
    <section className="py-20 px-4 skills-section">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
          <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>04.</span> Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className={`p-6 rounded-lg skill-card transform transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-[#112240] hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]' : 'bg-white shadow-lg hover:shadow-xl'}`}>
            <div className="mb-6">
              <svg className={`w-12 h-12 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Frontend</h3>
            <ul className="space-y-2">
              {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'React-Native'].map((skill) => (
                <motion.li 
                  key={skill} 
                  className={`flex items-center ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>▹</span> {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Backend */}
          <div className={`p-6 rounded-lg skill-card transform transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-[#112240] hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]' : 'bg-white shadow-lg hover:shadow-xl'}`}>
            <div className="mb-6">
              <svg className={`w-12 h-12 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Backend</h3>
            <ul className="space-y-2">
              {['Node.js', 'Express', 'Go lang', 'firebase', 'PostgreSQL', 'MongoDB','Laravel'].map((skill) => (
                <motion.li 
                  key={skill} 
                  className={`flex items-center ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>▹</span> {skill}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Tools & Others */}
          <div className={`p-6 rounded-lg skill-card transform transition-all duration-300 hover:-translate-y-2 ${isDarkMode ? 'bg-[#112240] hover:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]' : 'bg-white shadow-lg hover:shadow-xl'}`}>
            <div className="mb-6">
              <svg className={`w-12 h-12 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Tools & Others</h3>
            <ul className="space-y-2">
              {['Git', 'Docker', 'CI/CD', 'Jest'].map((skill) => (
                <motion.li 
                  key={skill} 
                  className={`flex items-center ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className={`mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>▹</span> {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 