export default function BookListItem(p) {
    return(
        <li className="mt-4 shadow-black shadow rounded-2xl text-left px-2 flex">
            <div className="text-4xl mr-4 text-center self-center">{p.id}</div>
            <div>
                <h3 className="text-3xl">{p.title}</h3>
                <h4 className="text-2xl">by {p.author}</h4>
            </div>
        </li>
    )
}