import { Button } from '@/components/ui/button'
import { Linkedin } from 'lucide-react'

const LinkedIn = () => {
  return (
    <section id="linkedin" className="py-20 bg-green-100 dark:bg-green-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Let's Connect on LinkedIn</h2>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Stay updated with my professional journey and let's expand our networks. Feel free to connect with me on LinkedIn for collaborations and opportunities.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors" asChild>
          <a href="https://www.linkedin.com/in/sanjeet-kumar-318014228/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" /> Visit My LinkedIn Profile
          </a>
        </Button>
      </div>
    </section>
  )
}

export default LinkedIn

