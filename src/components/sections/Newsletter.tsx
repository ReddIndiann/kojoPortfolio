interface NewsletterProps {
  isDarkMode: boolean;
}

const Newsletter = ({ isDarkMode }: NewsletterProps) => {
  return (
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
  )
}

export default Newsletter 