import React from 'react'

function Tracker() {
  return (
    <div>
      
   <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold text-gray-800">Project Progress</h2>
      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">In Progress</span>
    </div>
    <div className="mb-6">
      <h3 className="font-medium text-gray-700 mb-2">AI-Based Chatbot for Education</h3>
      <p className="text-gray-600 text-sm">Team: Ali, Aisha, Omar • Supervisor: Dr. Ahmad Khan</p>
    </div>
    <div className="mb-8">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">Overall Progress</span>
        <span className="text-sm font-medium text-gray-700">65%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '65%'}} />
      </div>
    </div>
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800">Literature Review</p>
          <p className="text-sm text-gray-500">Completed on March 15, 2023</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800">Requirements Analysis</p>
          <p className="text-sm text-gray-500">Completed on April 2, 2023</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="h-3 w-3 rounded-full bg-blue-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800">System Design</p>
          <p className="text-sm text-gray-500">In progress (Due: May 10, 2023)</p>
        </div>
      </div>
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="h-3 w-3 rounded-full bg-gray-300" />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800">Implementation</p>
          <p className="text-sm text-gray-500">Not started</p>
        </div>
      </div>
    </div>
    <div className="mt-8 border-t pt-4">
      <h3 className="font-medium text-gray-800 mb-3">Supervisor Feedback</h3>
      <div className="bg-blue-50 p-4 rounded-lg">
        <p className="text-sm text-gray-800">"Good progress on the design phase. Please ensure you document all design decisions properly. The architecture diagram needs more detail - let's discuss in our next meeting."</p>
        <p className="text-xs text-gray-500 mt-2">- Dr. Ahmad Khan, April 25, 2023</p>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Tracker
