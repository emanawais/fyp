import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './views/home/Dashboard'
import Meeting from './views/home/Meeting'
import Profile from './views/home/Profile'
import RequestForm from './views/home/RequestForm'
import Tracker from './views/home/Tracker'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  

  <Dashboard/>
  <Meeting/>
  <Profile/>
  <RequestForm/>
  <Tracker/>
    </>
  )
}

export default App
