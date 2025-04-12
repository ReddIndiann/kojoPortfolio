import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()

    // First fade in the background
    tl.from(overlayRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    // Then animate the content
    .from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(subtitleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.3")

    // Parallax effect on scroll
    gsap.to(titleRef.current, {
      y: -50,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })
  }, [])

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden bg-slate-900">
      {/* Background gradient */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-purple-900/5 pointer-events-none" 
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-4 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wide"
        >
          Your Name
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] tracking-wide"
        >
          Full Stack Developer & Creative Problem Solver
        </p>
        <button
          ref={buttonRef}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5"
        >
          View My Work
        </button>
      </div>
    </section>
  )
}

export default Hero 