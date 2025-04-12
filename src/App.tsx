import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import './App.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const contactRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const projects = [
    {
      title: "Project Name 1",
      description: "A brief description of the project and what it does. Highlight the key features and technologies used.",
      image: "/project1.jpg",
      github: "https://github.com/yourusername/project1",
      live: "https://project1-demo.com",
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB']
    },
    {
      title: "Project Name 2",
      description: "A brief description of the project and what it does. Highlight the key features and technologies used.",
      image: "/project2.jpg",
      github: "https://github.com/yourusername/project2",
      live: "https://project2-demo.com",
      technologies: ['Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL']
    },
    {
      title: "Project Name 3",
      description: "An interactive web application with real-time data visualization and collaborative features.",
      image: "/project3.jpg",
      github: "https://github.com/yourusername/project3",
      live: "https://project3-demo.com",
      technologies: ['Vue.js', 'Firebase', 'D3.js', 'WebSockets']
    },
    {
      title: "Project Name 4",
      description: "A mobile-first progressive web app with offline capabilities and seamless synchronization.",
      image: "/project4.jpg",
      github: "https://github.com/yourusername/project4",
      live: "https://project4-demo.com",
      technologies: ['React Native', 'Redux', 'Express', 'AWS']
    }
  ]

  // Timeline experiences
  const experiences = [
    {
      company: "Tech Company X",
      position: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Led the development of a major SaaS platform, improved performance by 40%, and mentored junior developers."
    },
    {
      company: "Startup Y",
      position: "Full Stack Engineer",
      period: "2020 - 2022",
      description: "Built and maintained multiple customer-facing applications, implemented CI/CD pipelines, and optimized database queries."
    },
    {
      company: "Agency Z",
      position: "Web Developer",
      period: "2018 - 2020",
      description: "Developed responsive websites for various clients, collaborated with designers, and implemented SEO best practices."
    }
  ]

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Product Manager at Tech Company X",
      text: "Daniel is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding."
    },
    {
      name: "Michael Chen",
      position: "CTO at Startup Y",
      text: "Working with Daniel was a pleasure. He's not only technically proficient but also communicates effectively and understands business requirements."
    },
    {
      name: "Jessica Williams",
      position: "Design Lead at Agency Z",
      text: "Daniel has a great eye for design implementation. He translated our designs into flawless code with impressive attention to detail."
    }
  ]

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } })
    heroTl.fromTo(".hero-greeting", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 })
    heroTl.fromTo(".hero-name", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
    heroTl.fromTo(".hero-title", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
    heroTl.fromTo(".hero-desc", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
    heroTl.fromTo(".hero-button", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.5")
    
    // About section animations with ScrollTrigger
    gsap.fromTo(".about-title", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
        } 
      }
    )
    
    gsap.fromTo(".about-content p", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 85%",
        } 
      }
    )
    
    // Skills animations
    gsap.fromTo(".skill-card", 
      { opacity: 0, y: 40 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 75%",
        } 
      }
    )
    
    // Experience timeline animations
    gsap.fromTo(".experience-item", 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.7, 
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
        } 
      }
    )
    
    // Contact section animation
    gsap.fromTo(".contact-content", 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 85%",
        } 
      }
    )
    
    // Projects hover effect
    const projectCards = document.querySelectorAll('.project-card')
    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.project-overlay'), { 
          opacity: 1, 
          duration: 0.3 
        })
        gsap.to(card.querySelector('.project-content'), { 
          y: -10, 
          duration: 0.4 
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.project-overlay'), { 
          opacity: 0, 
          duration: 0.3 
        })
        gsap.to(card.querySelector('.project-content'), { 
          y: 0, 
          duration: 0.4 
        })
      })
    })
    
  }, [])

  // Project slider controls
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

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-[#0a192f] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDarkMode ? 'bg-[#0a192f]/90 border-[#1d2d4f]' : 'bg-white/90 border-gray-200'} backdrop-blur-md border-b z-50 transition-all duration-300`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.a 
              href="#" 
              className={`text-2xl font-bold ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              KJ
            </motion.a>
            
            <div className="flex items-center space-x-8">
              {/* Desktop Nav */}
              <div className="hidden md:flex space-x-8">
                {[
                  { name: "About", href: "#about" },
                  { name: "Work", href: "#work" },
                  { name: "Experience", href: "#experience" },
                  { name: "Contact", href: "#contact" }
                ].map((item, index) => (
                  <motion.a 
                    key={item.name}
                    href={item.href} 
                    className={`${isDarkMode ? 'text-[#8892b0] hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <span className={`font-mono text-sm ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>0{index+1}. </span>
                    {item.name}
                  </motion.a>
                ))}
              </div>
              
              {/* Theme Toggle */}
              <motion.button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full ${isDarkMode ? 'text-[#64ffda] hover:bg-[#1d2d4f]' : 'text-blue-600 hover:bg-gray-200'} transition-colors`} 
                aria-label="Toggle theme"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {isDarkMode ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </motion.button>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button 
                  onClick={toggleMenu}
                  className={`p-2 rounded-md ${isDarkMode ? 'text-[#64ffda] hover:bg-[#1d2d4f]' : 'text-blue-600 hover:bg-gray-200'} transition-colors`}
                >
                  {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <motion.div 
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-[#112240]' : 'bg-white'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 space-y-2">
            {[
              { name: "About", href: "#about" },
              { name: "Work", href: "#work" },
              { name: "Experience", href: "#experience" },
              { name: "Contact", href: "#contact" }
            ].map((item, index) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-4 ${isDarkMode ? 'text-[#8892b0] hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <span className={`font-mono text-sm ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>0{index+1}. </span>
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl">
          <p className={`font-mono mb-5 hero-greeting ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>Hi, my name is</p>
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 hero-name ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            Daniel Kojo.
          </h1>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 hero-title ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
            I build things for the web.
          </h2>
          <p className={`text-lg max-w-xl mb-12 hero-desc ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
            I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#work" 
              className={`inline-block px-8 py-4 border-2 rounded hero-button transition-all duration-300 ${
                isDarkMode ? 
                'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' : 
                'border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              Check out my work!
            </a>
            <a 
              href="#contact" 
              className={`inline-block px-8 py-4 hero-button transition-all duration-300 ${
                isDarkMode ? 
                'bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20' : 
                'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              Contact me
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block">
            <motion.div
              className={`w-6 h-12 rounded-full border-2 ${isDarkMode ? 'border-[#64ffda]' : 'border-blue-600'} flex justify-center pt-2`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
            >
              <motion.div 
                className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-[#64ffda]' : 'bg-blue-600'}`}
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 about-section">
        <div className="max-w-4xl mx-auto" ref={aboutRef}>
          <h2 className={`text-3xl font-bold mb-8 about-title flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>01.</span> About Me
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 about-content">
              <div className={`space-y-4 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
                <p>
                  Hello! My name is Kojo and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                </p>
                <p>
                  Fast-forward to today, and I've had the privilege of working at various companies, startups, and organizations. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                </p>
                <p>
                  I've worked on everything from marketing websites to complex web applications, always with a focus on user experience and clean, maintainable code. I'm passionate about staying on top of the latest technologies and best practices in web development.
                </p>
                <p>Here are a few technologies I've been working with recently:</p>
                
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'AWS', 'Docker', 'Figma'].map((tech) => (
                    <motion.li 
                      key={tech} 
                      className="flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className={`mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>▹</span>
                      {tech}
                    </motion.li>
                  ))}
                </div>
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

      {/* Projects Section */}
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
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className={`project-card min-w-[85%] md:min-w-[45%] lg:min-w-[30%] flex-shrink-0 rounded-lg overflow-hidden snap-center ${isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
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

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 experience-section">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>03.</span> Where I've Worked
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-0 md:left-1/4 w-1 h-full transform -translate-x-1/2 ${isDarkMode ? 'bg-[#1d2d4f]' : 'bg-gray-200'}`}></div>
            
            <div className="space-y-16">
              {experiences.map((experience, index) => (
                <div key={experience.company} className="experience-item relative pl-8 md:pl-0 md:grid md:grid-cols-4 gap-8">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-1/4 w-5 h-5 rounded-full transform -translate-x-1/2 border-2 ${
                    isDarkMode ? 'border-[#64ffda] bg-[#0a192f]' : 'border-blue-600 bg-white'
                  }`}></div>
                  
                  {/* Timeline date */}
                  <div className="md:text-right md:pr-8">
                    <span className={`font-mono ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>
                      {experience.period}
                    </span>
                  </div>
                  
                  {/* Timeline content */}
                  <div className="md:col-span-3 md:pl-8">
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
                      {experience.position}
                    </h3>
                    <h4 className={`text-lg font-medium mb-4 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>
                      {experience.company}
                    </h4>
                    <p className={`${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
                      {experience.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Resume Button */}
            <div className="mt-16 text-center">
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-6 py-3 transition-all duration-300 ${
                  isDarkMode ? 
                  'bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20' : 
                  'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                <span>View Full Resume</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 skills-section">
        <div className="max-w-6xl mx-auto" ref={skillsRef}>
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
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL'].map((skill) => (
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
                {['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'].map((skill) => (
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Tools & Others</h3>
              <ul className="space-y-2">
                {['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Cypress'].map((skill) => (
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

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>05.</span> What People Say
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg relative ${isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}
              >
                {/* Quote mark */}
                <div className={`absolute -top-6 left-6 text-6xl ${isDarkMode ? 'text-[#1d2d4f]' : 'text-gray-200'}`}>"</div>
                
                <p className={`mb-6 relative z-10 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
                  {testimonial.text}
                </p>
                
                <div>
                  <h4 className={`font-bold ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>{testimonial.name}</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={`py-16 px-4 ${isDarkMode ? 'bg-[#1d2d4f]' : 'bg-blue-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            Stay Updated
          </h2>
          <p className={`mb-8 max-w-lg mx-auto ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
            Subscribe to my newsletter to receive updates on my latest projects, blog posts, and tech insights.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Your email address" 
              className={`px-4 py-3 rounded md:w-64 focus:outline-none ${
                isDarkMode ? 'bg-[#0a192f] border border-[#64ffda] text-white' : 'bg-white border border-gray-300'
              }`}
              required
            />
            <button 
              type="submit" 
              className={`px-6 py-3 rounded font-medium transition-colors ${
                isDarkMode ? 'bg-[#64ffda] text-[#0a192f] hover:bg-[#4fd1b2]' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 text-center">
        <motion.div 
          className="max-w-xl mx-auto contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          ref={contactRef}
        >
          <span className={`font-mono ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>06. What's Next?</span>
          <h2 className={`text-4xl font-bold mt-4 mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Get In Touch</h2>
          <p className={`mb-12 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
            I'm currently looking for new opportunities. Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:your.email@example.com" 
              className={`flex items-center justify-center space-x-2 p-4 border rounded transition-all ${
                isDarkMode ? 
                'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' : 
                'border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>your.email@example.com</span>
            </a>
            
            <a 
              href="tel:+1234567890" 
              className={`flex items-center justify-center space-x-2 p-4 border rounded transition-all ${
                isDarkMode ? 
                'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' : 
                'border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3
                 6V5z" />
              </svg>
              <span>+123 456 7890</span>
            </a>
          </div>
          
          {/* Contact Form */}
          <form className="text-left">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className={`block mb-2 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={`w-full px-4 py-3 rounded focus:outline-none ${
                    isDarkMode ? 'bg-[#112240] border border-[#1d2d4f] text-white focus:border-[#64ffda]' : 'bg-white border border-gray-300 focus:border-blue-600'
                  }`}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className={`block mb-2 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={`w-full px-4 py-3 rounded focus:outline-none ${
                    isDarkMode ? 'bg-[#112240] border border-[#1d2d4f] text-white focus:border-[#64ffda]' : 'bg-white border border-gray-300 focus:border-blue-600'
                  }`}
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="subject" className={`block mb-2 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>Subject</label>
              <input 
                type="text" 
                id="subject" 
                className={`w-full px-4 py-3 rounded focus:outline-none ${
                  isDarkMode ? 'bg-[#112240] border border-[#1d2d4f] text-white focus:border-[#64ffda]' : 'bg-white border border-gray-300 focus:border-blue-600'
                }`}
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className={`block mb-2 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>Message</label>
              <textarea 
                id="message" 
                rows={5}
                className={`w-full px-4 py-3 rounded focus:outline-none ${
                  isDarkMode ? 'bg-[#112240] border border-[#1d2d4f] text-white focus:border-[#64ffda]' : 'bg-white border border-gray-300 focus:border-blue-600'
                }`}
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`w-full md:w-auto px-8 py-4 rounded font-medium transition-colors ${
                isDarkMode ? 'bg-[#64ffda] text-[#0a192f] hover:bg-[#4fd1b2]' : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Social Links Side Bar */}
      <div className={`fixed left-8 bottom-0 hidden md:block z-10 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
        <div className="flex flex-col items-center space-y-6">
          {[
            { icon: "github", url: "https://github.com/yourusername" },
            { icon: "linkedin", url: "https://linkedin.com/in/yourusername" },
            { icon: "twitter", url: "https://twitter.com/yourusername" },
            { icon: "instagram", url: "https://instagram.com/yourusername" }
          ].map((social, index) => (
            <motion.a 
              key={social.icon}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-[#64ffda] transition-colors hover:-translate-y-1`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.8 + index * 0.1 }}
            >
              {social.icon === "github" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              ) : social.icon === "linkedin" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              ) : social.icon === "twitter" ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App