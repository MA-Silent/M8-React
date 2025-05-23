import './App.css'
import About from './components/About'
import Books from './components/Books'

export default function App() {
  return (
    <div className="flex flex-col items-center mt-5">
      <About />
      <Books />
    </div>
  )
}
