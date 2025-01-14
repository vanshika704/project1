import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from './components/ui/provider'
import { ThemeProvider } from './pages/contextapi'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider>
     <ThemeProvider><App /></ThemeProvider></Provider>

  </StrictMode>,
)
