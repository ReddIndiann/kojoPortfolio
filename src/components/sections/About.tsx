import { motion } from 'framer-motion'
import { MorphingText } from "../magicui/morphing-text"

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps) => {
  return (
    <section id="about" className="py-20 px-4 about-section">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 about-title flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
          <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>01.</span><MorphingText texts={["Sobre mí", "About Me"]} />
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 about-content">
            <div className={`space-y-4 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
              <p>
                Hello! My name is Kojo and I enjoy creating things that live on the internet. My interest in web development started back in 2021 when i ws intruiged by the idea of creating my something typing random letters and numbers.
              </p>
              <p>
                Fast-forward to today, and I've had the privilege of working at various companies, startups, and organizations. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
              </p>
              <p>
                I've worked on everything from marketing websites to complex web applications, always with a focus on user experience and clean, maintainable code. I'm passionate about staying on top of the latest technologies and best practices in web development.
              </p>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="relative group mx-auto">
            <div className={`w-64 h-64 rounded overflow-hidden relative group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300`}>
              <div className={`absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300`}></div>
              <img src="/profile-photo.jpg" alt="Daniel Kojo Odoi" className="w-full h-full object-cover" />
            </div>
            <div className={`absolute inset-0 border-2 rounded w-64 h-64 -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300 ${isDarkMode ? 'border-[#64ffda]' : 'border-blue-600'}`}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 