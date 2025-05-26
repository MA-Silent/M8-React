import BookListItem from "./BookListItem"

export default function Books({books}) {
    return (
        <ol className="shadow shadow-neutral-500 mt-8 p-5 rounded-2xl bg-slate-400 w-[70vw]">
            {books.map((book, i) => 
                <BookListItem title={book.title} author={book.author} id={i+1} key={book.title + book.author} />
            )}
        </ol>
    )
}