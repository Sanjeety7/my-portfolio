"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FileCode2, CircleEqual, Atom, Database, GitBranch, Coffee, Cloud } from "lucide-react"

const PythonLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8">
    <linearGradient
      id="python-original-a"
      gradientUnits="userSpaceOnUse"
      x1="70.252"
      y1="1237.476"
      x2="170.659"
      y2="1151.089"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <linearGradient
      id="python-original-b"
      gradientUnits="userSpaceOnUse"
      x1="209.474"
      y1="1098.811"
      x2="173.62"
      y2="1149.537"
      gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
    >
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path
      fill="url(#python-original-a)"
      d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
      transform="translate(0 10.26)"
    />
    <path
      fill="url(#python-original-b)"
      d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
      transform="translate(0 10.26)"
    />
    <radialGradient
      id="python-original-c"
      cx="1825.678"
      cy="444.45"
      r="26.743"
      gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
      gradientUnits="userSpaceOnUse"
    >
      <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498" />
      <stop offset="1" stopColor="#7F7F7F" stopOpacity="0" />
    </radialGradient>
    <path
      opacity=".444"
      fill="url(#python-original-c)"
      d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
    />
  </svg>
)

const CssLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8">
    <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
    <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
    <path
      fill="#fff"
      d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"
    />
    <path
      fill="#EBEBEB"
      d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"
    />
    <path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
    <path
      fill="#EBEBEB"
      d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"
    />
  </svg>
)

const CppLogo = () => (
  <svg viewBox="0 0 128 128" className="w-8 h-8">
    <path
      fill="#D26383"
      d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
    />
    <path
      fill="#9C033A"
      d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"
    />
    <path
      fill="#fff"
      d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
    />
    <path
      d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"
      fill="#fff"
    />
  </svg>
)

const SkillIcon = ({ icon: Icon, name, color }) => (
  <div className="flex flex-col items-center justify-center min-w-[120px] mx-4">
    <div className="p-4 bg-white dark:bg-gray-700 rounded-full shadow-lg mb-2 transition-transform hover:scale-110">
      {typeof Icon === "function" ? <Icon /> : <Icon className={`w-8 h-8 ${color}`} />}
    </div>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{name}</span>
  </div>
)

const Skills = () => {
  const [duplicatedSkills, setDuplicatedSkills] = useState([])

  const skills = [
    { icon: FileCode2, name: "HTML5", color: "text-orange-500" },
    { icon: CssLogo, name: "CSS3", color: "text-blue-500" },
    { icon: CircleEqual, name: "JavaScript", color: "text-yellow-500" },
    { icon: Atom, name: "React", color: "text-blue-400" },
    { icon: PythonLogo, name: "Python", color: "text-green-500" },
    { icon: Database, name: "MongoDB", color: "text-green-600" },
    { icon: GitBranch, name: "Git", color: "text-orange-600" },
    { icon: Coffee, name: "Java", color: "text-purple-500" },
    { icon: Cloud, name: "Cloud Computing", color: "text-blue-300" },
    { icon: CppLogo, name: "C++", color: "text-blue-600" },
  ]

  useEffect(() => {
    // Duplicate skills array for continuous scrolling effect
    setDuplicatedSkills([...skills, ...skills])
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Skills</h2>

        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
          >
            <div className="flex">
              {duplicatedSkills.map((skill, index) => (
                <SkillIcon key={`${skill.name}-${index}`} icon={skill.icon} name={skill.name} color={skill.color} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills

