import { motion } from 'framer-motion'
import { HyperText } from "../magicui/hyper-text"

interface HeroProps {
  isDarkMode: boolean;
}

const Hero = ({ isDarkMode }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-4xl">
        <p className={`font-mono mb-5 hero-greeting ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>Hi, my name is</p>
        <h1 className={`text-5xl md:text-7xl font-bold mb-4 hero-name ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>
          <HyperText>Daniel Kojo</HyperText>
        </h1>
        <h2 className={`text-4xl md:text-6xl font-bold mb-6 hero-title ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
          I build the web—front to back, pixel to server.
        </h2>
        <p className={`text-lg max-w-xl mb-12 hero-desc ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
          I’m a full stack developer crafting seamless digital experiences—from clean, responsive UIs to scalable, bulletproof backends. Design meets logic. Performance meets purpose.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#work"
            className={`inline-block px-8 py-4 border-2 rounded hero-button transition-all duration-300 ${isDarkMode ?
                'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' :
                'border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
          >
            Check out my work!
          </a>
          <a
            href="#contact"
            className={`inline-block px-8 py-4 hero-button transition-all duration-300 ${isDarkMode ?
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
  )
}

export default Hero 