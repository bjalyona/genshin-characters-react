import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GenshinProvider } from './context/GenshinContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GenshinProvider>
      <App />
    </GenshinProvider>
  </StrictMode>,
)
