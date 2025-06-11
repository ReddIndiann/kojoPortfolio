import { motion } from 'framer-motion'

interface ContactProps {
  isDarkMode: boolean;
}

const Contact = ({ isDarkMode }: ContactProps) => {
  return (
    <section id="contact" className="py-20 px-4 text-center">
      <motion.div 
        className="max-w-xl mx-auto contact-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className={`font-mono ${isDarkMode ? 'text-[#64ffda]' : 'text-blue-600'}`}>06. What's Next?</span>
        <h2 className={`text-4xl font-bold mt-4 mb-4 ${isDarkMode ? 'text-[#ccd6f6]' : 'text-gray-900'}`}>Get In Touch</h2>
        <p className={`mb-12 ${isDarkMode ? 'text-[#8892b0]' : 'text-gray-600'}`}>
          I'm currently looking for new opportunities. Whether you have a question, want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:danielkojo005@gmail.com" 
            className={`flex items-center justify-center space-x-2 p-4 border rounded transition-all ${
              isDarkMode ? 
              'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' : 
              'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>danielkojo005@gmail.com</span>
          </a>
          
          <a 
            href="tel:05366904477" 
            className={`flex items-center justify-center space-x-2 p-4 border rounded transition-all ${
              isDarkMode ? 
              'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10' : 
              'border-blue-600 text-blue-600 hover:bg-blue-50'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>+233 536690447</span>
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
  )
}

export default Contact 
