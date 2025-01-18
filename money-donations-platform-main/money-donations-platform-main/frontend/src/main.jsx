import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthenticationContextProvider } from './context/authContext.jsx'
import { AdminAuthContextProvider } from './context/AdminAuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationContextProvider>
      <AdminAuthContextProvider>
      <BrowserRouter>

        <App />

      </BrowserRouter>
      </AdminAuthContextProvider>
    </AuthenticationContextProvider>
  </StrictMode>,
)
