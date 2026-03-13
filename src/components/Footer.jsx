import { FiHeart } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2026 Himanshu Saraswat. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            Made with <FiHeart className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
