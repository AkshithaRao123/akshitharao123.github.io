import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Experience from '../containers/experience/Experience';
import Certifications from '../components/certifications/Certifications';
import { Navbar } from '../components';
import { About, Footer } from '../containers/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Certifications />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
