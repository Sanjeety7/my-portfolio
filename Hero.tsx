"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0)
  const titles = [
    {
      text: "Web Developer",
      icon: (
        <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      ),
    },
    {
      text: "Software Engineer",
      icon: (
        <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
        </svg>
      ),
    },
    {
      text: "Tech Enthusiast",
      icon: (
        <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" />
        </svg>
      ),
    },
    {
      text: "Content writer",
      icon: (
        <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
        </svg>
      ),
    },
    {
      text: "Communicator",
      icon: (
        <svg className="w-6 h-6 inline-block mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
        </svg>
      ),
    },
  ]

  const colors = [
    "text-violet-400",
    "text-indigo-400",
    "text-blue-400",
    "text-green-400",
    "text-yellow-400",
    "text-orange-400",
    "text-red-400",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-andre-furtado-43594-370717.jpg-Ct9nWTxlzjq9RVmruOWSYRIncZgLED.jpeg"
          alt="Modern Skyscrapers in Snow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60 dark:opacity-75"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className="w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-10-28%20at%2012.17.31%20(1)-4L0WepA3ToIWLVvjZlpVJEvHZFd9lH.jpeg"
              alt="Professional Profile Picture"
              className="w-full h-full object-cover"
              style={{
                imageRendering: "-webkit-optimize-contrast",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
            />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Sanjeet Kumar</h1>
        <p
          className={`text-2xl mb-8 h-8 font-semibold ${colors[titleIndex]} transition-colors duration-300 ease-in-out`}
        >
          {titles[titleIndex].icon}
          {titles[titleIndex].text}
        </p>
        <Button className="bg-green-600 hover:bg-green-700 text-white transition-colors" asChild>
          <a href="#contact">Get In Touch</a>
        </Button>
      </div>
    </section>
  )
}

export default Hero

