import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'; // Tailwind styles and custom classes
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
