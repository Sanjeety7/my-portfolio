"use client"

import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certificates from "./components/Certificates"
import Gallery from "./components/Gallery"
import LinkedIn from "./components/LinkedIn"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackToTop from "./components/BackToTop"
import { ThemeProvider } from "./components/ThemeProvider"

export default function Portfolio() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <div
        className={`min-h-screen bg-gradient-to-b from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Projects />
          <Certificates />
          <Gallery />
          <LinkedIn />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

