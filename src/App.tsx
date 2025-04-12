import { useEffect } from 'react'
import { gsap } from 'gsap'
import './App.css'

function App() {
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

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm border-b border-[#1d2d4f] z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-[#64ffda]">KJ</a>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">About</a>
              <a href="#work" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">Work</a>
              <a href="#contact" className="text-[#8892b0] hover:text-[#64ffda] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl">
          <p className="text-[#64ffda] font-mono mb-5 fade-in opacity-0 translate-y-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4 fade-in opacity-0 translate-y-4">
            Kojo Johnson.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6 fade-in opacity-0 translate-y-4">
            I build things for the web.
          </h2>
          <p className="text-[#8892b0] text-lg max-w-xl mb-12 fade-in opacity-0 translate-y-4">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <a 
            href="#work"
            className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] 
                     hover:bg-[#64ffda]/10 transition-colors rounded fade-in opacity-0 translate-y-4"
          >
            Check out my work!
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8 flex items-center">
            <span className="text-[#64ffda] font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="text-[#8892b0] space-y-4">
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
                  <span className="text-[#64ffda] mr-2">▹</span>
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
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8 flex items-center">
            <span className="text-[#64ffda] font-mono mr-2">02.</span>
            Some Things I've Built
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-[#112240] p-6 rounded-lg hover:transform hover:translate-y-[-5px] transition-transform">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#ccd6f6]">Project Name 1</h3>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:text-[#64ffda]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:text-[#64ffda]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-[#8892b0] mb-4">A brief description of the project and what it does. Highlight the key features and technologies used.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'MongoDB'].map((tech) => (
                  <span key={tech} className="text-xs text-[#64ffda] font-mono">{tech}</span>
                ))}
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-[#112240] p-6 rounded-lg hover:transform hover:translate-y-[-5px] transition-transform">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-[#ccd6f6]">Project Name 2</h3>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:text-[#64ffda]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#64ffda] hover:text-[#64ffda]/80">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                </div>
              </div>
              <p className="text-[#8892b0] mb-4">A brief description of the project and what it does. Highlight the key features and technologies used.</p>
              <div className="flex flex-wrap gap-2">
                {['Next.js', 'Tailwind CSS', 'GraphQL', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="text-xs text-[#64ffda] font-mono">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-8 flex items-center">
            <span className="text-[#64ffda] font-mono mr-2">03.</span>
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Frontend</h3>
              <ul className="space-y-2">
                {['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'GraphQL'].map((skill) => (
                  <li key={skill} className="flex items-center text-[#8892b0]">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Backend</h3>
              <ul className="space-y-2">
                {['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <li key={skill} className="flex items-center text-[#8892b0]">
                    <span className="text-[#64ffda] mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#112240] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-4">Tools & Others</h3>
              <ul className="space-y-2">
                {['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Cypress'].map((skill) => (
                  <li key={skill} className="flex items-center text-[#8892b0]">
                    <span className="text-[#64ffda] mr-2">▹</span>
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
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-4">Get In Touch</h2>
          <p className="text-[#8892b0] mb-8">
            I'm currently looking for new opportunities. Whether you have a question or 
            just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-4 border-2 border-[#64ffda] text-[#64ffda] 
                     hover:bg-[#64ffda]/10 transition-colors rounded"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-[#8892b0]">
        <p>Built with React & Tailwind CSS</p>
      </footer>
    </div>
  )
}

export default App
