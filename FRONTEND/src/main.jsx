import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/Home/HomePage'
import CarouselDate from './components/CarouselDate'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen bg-slate-950">
      <HomePage/>
      <CarouselDate/>
    </div>
  </StrictMode>,
)