import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
}

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects = ({ isDarkMode }: ProjectsProps) => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const projects: Project[] = [
    {
      title: "AIRSTATE LAPS",
      description: "A web application that allows users to issue or request for land and property details, where they cant find the exact location or looking for paperworks and docuents associated with the property.",
      image: "/src/assets/airstatepic.png",
      github: "https://github.com/yourusername/project1",
      live: "https://airstatelaps.com",
      technologies: ['React', 'TypeScript', 'Firebase']
    },
    {
      title: "Medic App",
      description: "A web application engine that allows users to book doctors have a text and video chat with them",
      image: "/src/assets/medicpic.png",
      github: "https://github.com/yourusername/project2",
      live: "https://medicare-eight-sandy.vercel.app",
      technologies: ['React', 'Tailwind CSS', 'GraphQL', 'Firebase','Node.js']
    },
    {
      title: "Edu Stripe",
      description: "An interactive web application for school management that streamlines communication and collaboration between students, teachers, parents, and administrators. The platform provides tools for managing classes, assignments, attendance, grades, announcements, and more — all in one centralized system designed to enhance the educational experience and improve school operations.",
      image: "/src/assets/eduStrip.png",
      github: "https://github.com/yourusername/project3",
      live: "https://project3-demo.com",
      technologies: ['React', 'Go Lang' ,'Tailwind CSS','MongoDB', 'AWS']
    },
    {
      title: "Grid Guard",
      description: "A real time mobile application synced to a an electricity detection IOT device capable of notifying users of power status where ever they are ",
      image: "/src/assets/gridgaurd.jpg",
      github: "https://github.com/yourusername/project4",
      live: "https://project4-demo.com",
      technologies: ['React Native', 'Redux', 'Express', 'AWS']
    }
  ]

  const nextSlide = () => {
    if (projectsRef.current) {
      const container = projectsRef.current
      const scrollAmount = container.clientWidth * 0.85
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      setCurrentSlide(prev => Math.min(prev + 1, projects.length - 1))
    }
  }
  
  const prevSlide = () => {
    if (projectsRef.current) {
      const container = projectsRef.current
      const scrollAmount = container.clientWidth * 0.85
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      setCurrentSlide(prev => Math.max(prev - 1, 0))
    }
  }

  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl font-bold mb-8 flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
          <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>02.</span> Some Things I've Built
        </h2>
        
        {/* Project Carousel */}
        <div className="relative">
          <div 
            ref={projectsRef}
            className="overflow-x-scroll hide-scrollbar flex gap-6 snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {projects.map((project, _) => (
              <div 
                key={project.title}
                className={`project-card min-w-[85%] md:min-w-[45%] lg:min-w-[30%] flex-shrink-0 rounded-lg overflow-hidden snap-center ${isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-80 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className={`project-overlay absolute inset-0 opacity-0 transition-opacity duration-300 ${isDarkMode ? 'bg-[#64ffda] bg-opacity-20' : 'bg-blue-600 bg-opacity-20'}`}></div>
                </div>
                
                <div className="p-6 project-content transition-transform duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>{project.title}</h3>
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`hover:opacity-80 transition-opacity ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`hover:opacity-80 transition-opacity ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z"></path>
                          <path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <p className={`mb-4 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className={`text-xs font-mono ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls */}
          <div className="mt-6 flex justify-center space-x-2">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-2 rounded-full ${
                isDarkMode 
                  ? currentSlide === 0 ? 'text-[#4a5568] cursor-not-allowed' : 'text-[#64ffda] hover:bg-[#1d2d4f]' 
                  : currentSlide === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-gray-200'
              } transition-colors`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {projects.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentSlide === index 
                    ? isDarkMode ? 'bg-[#64ffda]' : 'bg-blue-600' 
                    : isDarkMode ? 'bg-[#4a5568]' : 'bg-gray-300'
                }`}
              ></div>
            ))}
            
            <button 
              onClick={nextSlide}
              disabled={currentSlide === projects.length - 1}
              className={`p-2 rounded-full ${
                isDarkMode 
                ? currentSlide === projects.length - 1 ? 'text-[#4a5568] cursor-not-allowed' : 'text-[#64ffda] hover:bg-[#1d2d4f]' 
                : currentSlide === projects.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-gray-200'
            } transition-colors`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* View All Projects */}
          <div className="mt-10 text-center">
            <a 
              href="https://github.com/yourusername"
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-block px-6 py-3 transition-all duration-300 ${
                isDarkMode ? 
                'border border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' : 
                'border border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              View All Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 