"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInterval } from "react-use"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Pause, Play, Grid, SlidersHorizontal } from "lucide-react"

const CertificateCard = ({ title, issuer, date, image, link }) => {
  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{issuer}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative h-48 overflow-hidden rounded-md">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
          {link && (
            <Button variant="outline" className="w-full" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                View Certificate
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [showAll, setShowAll] = useState(false)

  const certificates = [
    {
      title: "Introduction to MongoDB for Students",
      issuer: "MongoDB University",
      date: "July 2024",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mongo%20db.PNG-2wUjnPPuCqNF8UJv3E2r2qJQp6n8Tp.png",
      link: "https://learn.mongodb.com/c/GTDOKXuTS2iaS_je0NR1CQ",
    },
    {
      title: "Google Cloud Computing Foundations: Infrastructure",
      issuer: "Google Cloud",
      date: "October 2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google%20cloud.JPG-HmAWk5V3jGtacYcUgpimLX9HP2ECUI.jpeg",
      link: "https://www.cloudskillsboost.google/public_profiles/44ece3b3-6f9d-4914-879e-3a5a9924aa95",
    },
    {
      title: "Google Cloud Computing Fundamentals",
      issuer: "Google Cloud",
      date: "October 2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google%20cloud.JPG-HmAWk5V3jGtacYcUgpimLX9HP2ECUI.jpeg",
      link: "https://www.cloudskillsboost.google/public_profiles/44ece3b3-6f9d-4914-879e-3a5a9924aa95",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google Cloud",
      date: "October 2023",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/google%20cloud.JPG-HmAWk5V3jGtacYcUgpimLX9HP2ECUI.jpeg",
      link: "https://www.cloudskillsboost.google/public_profiles/44ece3b3-6f9d-4914-879e-3a5a9924aa95",
    },
    {
      title: "DCA Course",
      issuer: "Shresth Technology",
      date: "2017-2018",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DCA-3gaRWz3LsGTiUABWtigbxh7B4iNicC.jpeg",
      link: null,
    },
  ]

  useInterval(
    () => {
      if (!showAll) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
      }
    },
    isPlaying ? 3000 : null,
  )

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length)
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
    setIsPlaying(false)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleView = () => {
    setShowAll(!showAll)
    setIsPlaying(false)
  }

  return (
    <section id="certificates" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Certificates</h2>
          <Button variant="outline" onClick={toggleView} className="flex items-center gap-2">
            {showAll ? <SlidersHorizontal className="h-4 w-4" /> : <Grid className="h-4 w-4" />}
            {showAll ? "Show Slideshow" : "View All"}
          </Button>
        </div>

        {showAll ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} {...cert} />
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <CertificateCard {...certificates[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <Button onClick={handlePrev} variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous certificate</span>
              </Button>
              <Button onClick={handlePlayPause} variant="outline" className="w-24">
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? "Pause" : "Play"}
              </Button>
              <Button onClick={handleNext} variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next certificate</span>
              </Button>
            </div>
            <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
              Certificate {currentIndex + 1} of {certificates.length}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certificates

