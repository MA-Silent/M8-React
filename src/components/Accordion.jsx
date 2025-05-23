import { useState } from "react";

export default function Accordion(p) {
    const [isActive, setIsActive] = useState(false)

    function openClose() {
        setIsActive(!isActive)
    }

    return (
        <div className="w-full mb-1">
            <div className="">
                <div className="flex justify-between mb-1" onClick={openClose}>
                    <div>{p.title}</div>
                    <div>{isActive ? "-" : "+"}</div>
                </div>
                {isActive ? <div className="transition-all duration-200 h-12 text-amber-700">{p.content}</div> : <div className="transition-all duration-200 h-0 overflow-hidden">{p.content}</div>}
            </div>
        </div>
    )
}