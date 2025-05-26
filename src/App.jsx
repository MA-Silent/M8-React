import './App.css'
import About from './components/About'
import Books from './components/Books'
import ImageGallery from './components/ImageGall'

const images = [
  '/a.jpg',
  '/b.jpg',
  '/c.jpg',
];

const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    },
    {
        title: "Ulysses",
        author: "James Jones"
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust"
    },
    {
        title: "One Hundred Years Of Solitude",
        author: "Gabriel García Márquez"
    },
    {
        title: "The Cather in the Rye",
        author: "J. D. Salinger"
    },
    {
        title: "Nineteen Eighty Four",
        author: "George Orwell"
    },
    {
        title: "Lolita",
        author: "Vladimir Nabokov"
    },
    {
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkein"
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville"
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
    }
];

export default function App() {
  return (
    <div className="flex flex-col items-center mt-5">
      <About />
      <Books books={books} />
      <ImageGallery images={images} />
    </div>
  )
}