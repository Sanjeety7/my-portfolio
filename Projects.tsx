'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const ProjectCard = ({ title, description, tags, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span key={index} className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

const Projects = () => {
  const [projects] = useState([
    {
      title: " kisaan Mitra",
      description: "A full-stack farming  solution to help farmers",
      tags: ["React", "Node.js", "MongoDB"],
      
    },
    {
      title: "Task Management App",
      description: "A responsive web app for managing daily tasks and projects",
      tags: ["React", "Redux", "Firebase"],
      
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information using a third-party API",
      tags: ["JavaScript", "API Integration", "CSS"],
      
    }
  ])

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

