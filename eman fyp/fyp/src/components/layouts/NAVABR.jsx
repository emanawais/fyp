import React from 'react'

function NAVABR() {
  return (
    <div>
      
  <div>
  <header className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <a href="#" className="text-xl font-semibold text-gray-800">FYPSupervisor</a>
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Dashboard</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Projects</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Students</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Meetings</a></li>
          <li><a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">Profile</a></li>
        </ul>
      </nav>
      <button id="hamburger-btn" className="md:hidden text-gray-600 focus:outline-none" aria-label="Toggle Navigation">
        <svg id="hamburger-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg id="close-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="hidden w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </header>
  <div id="mobile-nav" className="hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-50">
    <div className="bg-white w-80 h-full absolute right-0 p-6">
      <div className="flex justify-end mb-4">
        <button id="mobile-nav-close-btn" className="text-gray-600 focus:outline-none" aria-label="Close Mobile Navigation">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav className="block">
        <ul className="space-y-4">
          <li><a href="#" className="block text-lg text-gray-700 hover:text-blue-600 transition duration-300">Dashboard</a></li>
          <li><a href="#" className="block text-lg text-gray-700 hover:text-blue-600 transition duration-300">Projects</a></li>
          <li><a href="#" className="block text-lg text-gray-700 hover:text-blue-600 transition duration-300">Students</a></li>
          <li><a href="#" className="block text-lg text-gray-700 hover:text-blue-600 transition duration-300">Meetings</a></li>
          <li><a href="#" className="block text-lg text-gray-700 hover:text-blue-600 transition duration-300">Profile</a></li>
        </ul>
      </nav>
    </div>
  </div>
</div>



    </div>
  )
}

export default NAVABR
