"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInterval } from "react-use"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"

const GalleryImage = ({ src, alt, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover rounded-lg shadow-md" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Gallery = () => {
  const [images] = useState([
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roadmap.jfif-tHpWjO1ds9sTFF3I0cJ7iwQlNdTwxi.jpeg",
      alt: "XPEDITION 2022 - Hunt for Talent Award Ceremony",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-19%20at%2016.13.22-fsAREduAnYq67HJrTmhDTE7rLZ6L3I.jpeg",
      alt: "College Achievements Collage - CGC Events and Speaking",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-19%20at%2016.01.17-92q1MBhmTtOfiaF6CbnwBq3sjsLF9Z.jpeg",
      alt: "College Events and Alumni Interaction Collage",
    },
  ])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useInterval(
    () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    },
    isPlaying ? 2000 : null,
  )

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section id="gallery" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Gallery</h2>
        <div className="relative w-full h-[400px] md:h-[600px] mb-8 overflow-hidden rounded-lg shadow-lg">
          {images.map((image, index) => (
            <GalleryImage key={index} {...image} isVisible={index === currentIndex} />
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4">
          <Button onClick={handlePrev} variant="outline" size="icon" className="text-gray-800 dark:text-white">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button onClick={handlePlayPause} variant="outline" className="text-gray-800 dark:text-white">
            {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
            {isPlaying ? "Pause" : "Play"}
          </Button>
          <Button onClick={handleNext} variant="outline" size="icon" className="text-gray-800 dark:text-white">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Showing image {currentIndex + 1} of {images.length}
        </p>
      </div>
    </section>
  )
}

export default Gallery

