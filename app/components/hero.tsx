'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundColor: 'rgba(28, 52, 84, 0.6)',
          backgroundBlendMode: 'overlay'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl tracking-wider leading-tight">
          LEADERS IN QUALITY
          <br />
          CONSTRUCTION AND
          <br />
          INFRASTRUCTURE
        </h1>

        {/* Animated Scroll Arrow */}
        <button
          onClick={scrollToContent}
          className={`absolute bottom-12 transform transition-all duration-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-12 h-12 text-white animate-bounce" />
        </button>
      </div>
    </div>
  )
}

