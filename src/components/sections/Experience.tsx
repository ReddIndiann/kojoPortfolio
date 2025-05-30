interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience = ({ isDarkMode }: ExperienceProps) => {
  const experiences: Experience[] = [
    {
      company: "Wigal",
      position: " Frontend Developer",
      period: "2024 June - 2024 August",
      description: "Worked as a frontend intern building responsive web and mobile applications.Collaborated on integrating an API gateway for smoother data flow and user experience."
    },
    {
      company: "Kamak Paperless",
      position: "Full Stack Developer",
      period: "August 2024 - Present",
      description: "Built and maintained multiple customer-facing applications and optimized database queries using JSF."
    },
    {
      company: "iOTA Digital lab",
      position: "Full Stack Developer",
      period: "Febuary 2025 - Present",
      description: "Built mobile and webapps for clients mostly using react and React Native."
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 experience-section">
      <div className="max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 flex items-center ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
          <span className={`font-mono mr-2 ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>03.</span> Where I've Worked
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-0 md:left-1/4 w-1 h-full transform -translate-x-1/2 ${isDarkMode ? 'bg-[#1d2d4f]' : 'bg-gray-200'}`}></div>
          
          <div className="space-y-16">
            {experiences.map((experience, _) => (
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
              href="/assets/Resume Daniel Odoi.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-8 px-6 py-3 rounded-md transition-all duration-300 ${
                isDarkMode
                  ? 'bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20'
                  : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
              }`}
            >
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 