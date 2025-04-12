import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    // Initialize GSAP animations
    gsap.to(".fade-in", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    })
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0a192f] text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Navigation */}
      <nav className={`fixed w-full ${isDarkMode ? 'bg-[#0a192f]/90 border-[#1d2d4f]' : 'bg-white/90 border-gray-200'} backdrop-blur-sm border-b z-50`}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className={`text-2xl font-bold ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>KJ</a>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className={`${isDarkMode ? 'text-[#8892b0] hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>About</a>
                <a href="#work" className={`${isDarkMode ? 'text-[#8892b0] hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>Work</a>
                <a href="#contact" className={`${isDarkMode ? 'text-[#8892b0] hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>Contact</a>
              </div>
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDarkMode ? 'text-[#64ffda] hover:bg-[#1d2d4f]' : 'text-blue-600 hover:bg-gray-200'} transition-colors`}
                aria-label="Toggle theme"
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
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl">
          <p className={`font-mono mb-5 fade-in opacity-0 translate-y-4 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>Hi, my name is</p>
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 fade-in opacity-0 translate-y-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            Daniel Kojo Odoi.
          </h1>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 fade-in opacity-0 translate-y-4 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
            I build things for the web.
          </h2>
          <p className={`text-lg max-w-xl mb-12 fade-in opacity-0 translate-y-4 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <a 
            href="#work"
            className={`inline-block px-8 py-4 border-2 rounded fade-in opacity-0 translate-y-4 transition-colors
              ${isDarkMode 
                ? 'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
          >
            Check out my work!
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>01.</span>
            About Me
          </h2>
          <div className={`space-y-4 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
            <p>
              Hello! My name is Kojo and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at various companies,
              startups, and organizations. My main focus these days is building accessible,
              inclusive products and digital experiences.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'].map((tech) => (
                <li key={tech} className="flex items-center">
                  <span className={`mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>02.</span>
            Some Things I've Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className={`rounded-lg hover:transform hover:translate-y-[-5px] transition-transform ${isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}>
              <div className="relative group">
                <img 
                  src="/project1.jpg" 
                  alt="Project 1 Screenshot" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg ${isDarkMode ? 'bg-[#64ffda] bg-opacity-20' : 'bg-blue-600 bg-opacity-20'}`}></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Project Name 1</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://project1-demo.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>A brief description of the project and what it does. Highlight the key features and technologies used.</p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Node.js', 'MongoDB'].map((tech) => (
                    <span key={tech} className={`text-xs font-mono ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className={`rounded-lg hover:transform hover:translate-y-[-5px] transition-transform ${isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}>
              <div className="relative group">
                <img 
                  src="/project2.jpg" 
                  alt="Project 2 Screenshot" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg ${isDarkMode ? 'bg-[#64ffda] bg-opacity-20' : 'bg-blue-600 bg-opacity-20'}`}></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Project Name 2</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer" className={`hover:opacity-80 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <p className={`mb-4 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>A brief description of the project and what it does. Highlight the key features and technologies used.</p>
                <div className="flex flex-wrap gap-2">
                  {['Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'].map((tech) => (
                    <span key={tech} className={`text-xs font-mono ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-3xl font-bold mb-8 flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
            <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>03.</span>
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Frontend</h3>
              <ul className="space-y-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL'].map((skill) => (
                  <li key={skill} className={`flex items-center ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
                    <span className={`mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Backend</h3>
              <ul className="space-y-2">
                {['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <li key={skill} className={`flex items-center ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
                    <span className={`mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'}`}>
              <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Tools & Others</h3>
              <ul className="space-y-2">
                {['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Cypress'].map((skill) => (
                  <li key={skill} className={`flex items-center ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
                    <span className={`mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Get In Touch</h2>
          <p className={`mb-8 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
            I'm currently looking for new opportunities. Whether you have a question or 
            just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:your.email@example.com"
            className={`inline-block px-8 py-4 border-2 rounded transition-colors
              ${isDarkMode 
                ? 'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-6 text-center ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App
