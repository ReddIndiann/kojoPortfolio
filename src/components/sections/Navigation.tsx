import { motion } from 'framer-motion'

interface NavigationProps {
  isDarkMode: boolean;
  isMenuOpen: boolean;
  toggleTheme: () => void;
  toggleMenu: () => void;
}

const Navigation = ({ isDarkMode, isMenuOpen, toggleTheme, toggleMenu }: NavigationProps) => {
  return (
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
              onClick={() => toggleMenu()}
              className={`block py-2 px-4 ${isDarkMode ? 'text-[#8892b0] hover:text-[#64ffda]' : 'text-gray-600 hover:text-blue-600'}`}
            >
              <span className={`font-mono text-sm ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>0{index+1}. </span>
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </nav>
  )
}

export default Navigation 