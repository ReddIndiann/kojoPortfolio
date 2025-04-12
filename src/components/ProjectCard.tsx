import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  index: number
}

const ProjectCard = ({ title, description, imageUrl, technologies, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: index * 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        toggleActions: "play none none reverse"
      }
    })
  }, [index])

  return (
    <div
      ref={cardRef}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 to-transparent" />
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold mb-2 text-white drop-shadow-sm tracking-wide">{title}</h3>
        <p className="text-white/90 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-blue-600/20 text-blue-200 rounded-full text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 