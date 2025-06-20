import { StrictMode, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes, HashRouter, Link } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

const Homepage = lazy(() => import("./App.jsx"));
const Games = lazy(() => import("./Games.jsx"))
const Contact = lazy(()=> import("./Contact.jsx"))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <header>
        <nav className="bg-slate-600 flex justify-center text-center">
          <Link to="/" className='border-r border-neutral-500 px-5 flex items-center'>Home</Link>
          <Link to="/Games" className='border-neutral-500 px-5 flex items-center'>Games</Link>
          <Link to="/Contact" className=' border-l border-neutral-500 px-5 flex items-center'>Contact</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Games/" element={<Games />} />
          <Route path="/Contact/" element={<Contact />} />
        </Routes>
      </Suspense>
    </ HashRouter>
  </StrictMode>
)
