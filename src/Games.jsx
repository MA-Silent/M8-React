import "./App.css"
import CookieClicker from "./components/CookieClicker"
import Pokemon from "./components/Pokemon"

export default function Games() {
    return (
        <div className="flex flex-col items-center mt-5">
            <Pokemon />
            <CookieClicker />
        </div>
    )
}