import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import NAVABR from './components/layouts/NAVABR.jsx'
import FOOTER from './components/layouts/FOOTER.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <NAVABR/>
    <App />
    <FOOTER/>
  </StrictMode>,
)
