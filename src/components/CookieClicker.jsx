import { useState } from "react"

export default function CookieClicker() {

    let [count, setCount] = useState(0);
    let [multiplier, setMultiplier] = useState(1);
    let [price, setPrice] = useState(20);

    function handleClick() {
        setCount(count + 1 * multiplier);
    }

    function handleBuy() {
        if (count >= price) {
            setPrice(price * 2);
            setMultiplier(multiplier * 2);
            setCount(count - price);
        }
    }

    return (
        <div className="shadow-neutral-500 shadow flex text-left p-5 rounded-2xl bg-slate-400 w-[40vw] mt-8">
            <button className="border rounded-full p-25 bg-orange-300 mr-5" onClick={handleClick}></button>
            <div>
                <p>Cookies: {count}</p>
                <button onClick={handleBuy}>Buy Grandma: {price}</button>
            </div>
        </div>
    )
}