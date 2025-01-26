const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Sanjeet. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            Twitter
          </a>
          <a
            href="https://github.com/Sanjeety7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            GitHub
          </a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

