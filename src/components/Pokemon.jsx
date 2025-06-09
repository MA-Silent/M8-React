import { useState, useEffect } from "react";

export default function Pokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [searchInput, setSearchInput] = useState("blastoise");
    const [searchTerm, setSearchTerm] = useState("blastoise");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`).then(res => res.json()).then(data => { setPokemon(data); setLoading(false); })
    }, [searchTerm]);

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(searchInput);
    };

    if (loading) return <div>loading...</div>;
    if (!pokemon) return <div>no pokemon found</div>;

    return (
        <div className="shadow flex flex-col text-left rounded-2xl bg-slate-400 w-[40vw]">
            <form onSubmit={handleSearch} className="m-4">
                <input
                    type="text"
                    value={searchInput}
                    onChange={handleInputChange}
                    placeholder="pokemon name or id"
                    className="w-full p-2 rounded-lg border-2"
                />
            </form>
            <div className="flex bg-slate-500 rounded-t-2xl p-2 justify-center">
                <div>{pokemon.name}</div>
                <div className="ml-2 flex flex-row gap-2">
                    {pokemon.types.map(type =>
                        <div className="bg-amber-200 rounded-2xl px-2" key={type.type.name}>
                            {type.type.name}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-row mt-4">
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt="pokemon" className="size-52" />
                <div className="flex flex-row w-full justify-evenly">
                    <ol className="flex list-none flex-col gap-2">
                        {pokemon.stats.map(stat =>
                            <li className="border-b-2" key={stat.stat.name}>
                                {stat.stat.name}: {stat.base_stat}
                            </li>
                        )}
                    </ol>
                    <ol className="flex list-none flex-col gap-2 h-100 overflow-y-auto">
                        {pokemon.moves.map(move =>
                            <li className="border-b-2" key={move.move.name}>
                                {move.move.name} : {move.version_group_details[0].level_learned_at}
                            </li>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    )
}