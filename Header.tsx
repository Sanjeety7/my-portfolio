"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800 dark:text-white">Sanjeet Kumar</div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#about"
              className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#education"
              className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#certificates"
              className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Certificates
            </a>
            <a
              href="#gallery"
              className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
            >
              Contact
            </a>
            <button
              onClick={toggleTheme}
              className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {mounted && (theme === "dark" ? <Sun /> : <Moon />)}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="text-gray-800 dark:text-white mr-4"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            >
              {mounted && (theme === "dark" ? <Sun /> : <Moon />)}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? (
                <X className="text-gray-800 dark:text-white" />
              ) : (
                <Menu className="text-gray-800 dark:text-white" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <a
              href="#about"
              className="block py-2 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="block py-2 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400"
            >
              Skills
            </a>
            <a
              href="#education"
              className="block py-2 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400"
            >
              Education
            </a>
            <a
              href="#projects"
              className="block py-2 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400"
            >
              Projects
            </a>
            <a
              href="#certificates"
              className="block py-2 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400"
            >
              Certificates
            </a>
            <a
              href="#gallery"
              className="block py-2 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-400"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

