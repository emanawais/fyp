import React from 'react'

function Dashboard() {
  return (
    <div>
      
<div className="bg-gray-50 min-h-screen p-6">
  <div className="max-w-6xl mx-auto">
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-800">Supervisor Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, Dr. Khan</span>
        <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" />
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Active Projects</h3>
        <p className="text-3xl font-bold text-blue-600">8</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Pending Requests</h3>
        <p className="text-3xl font-bold text-yellow-500">3</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Available Slots</h3>
        <p className="text-3xl font-bold text-green-600">5</p>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Recent Project Requests</h2>
      </div>
      <div className="divide-y">
        {/* Request Item */}
        <div className="p-4 hover:bg-gray-50 transition">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium text-gray-800">AI-Based Chatbot for Education</h3>
              <p className="text-sm text-gray-600">Submitted by: Ali, Aisha, Omar</p>
            </div>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-green-100 text-green-800 rounded-md text-sm">Accept</button>
              <button className="px-3 py-1 bg-red-100 text-red-800 rounded-md text-sm">Reject</button>
              <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md text-sm">View</button>
            </div>
          </div>
        </div>
        {/* More requests would go here */}
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Dashboard
