import BookListItem from "./BookListItem"

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

export default function Books() {
    return (
        <ol className="mt-8 p-5 rounded-2xl bg-slate-400 w-[70vw]">
            {books.map((book, i) => 
                <BookListItem title={book.title} author={book.author} id={i+1} key={book.title + book.author} />
            )}
        </ol>
    )
}