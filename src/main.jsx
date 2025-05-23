import { StrictMode, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

const Homepage = lazy(() => import("./App.jsx"));
const Games = lazy(() => import("./Games.jsx"))
const Contact = lazy(()=> import("./Contact.jsx"))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <header>
        <nav className="bg-slate-600 flex justify-center text-center">
          <a href="/"><button className='h-[5vh] cursor-pointer'>Home</button></a>
          <a href="/Games" className='border-x border-neutral-500 px-5 mx-5'><button className='h-[5vh] cursor-pointer'>Games</button></a>
          <a href="/Contact"><button className='h-[5vh] cursor-pointer'>Contact</button></a>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Games/" element={<Games />} />
          <Route path="/Contact/" element={<Contact />} />
        </Routes>
      </Suspense>
    </ BrowserRouter>
  </StrictMode>
)
