import { useState } from "react"
import { InputProps } from "./types"

export default function Input({ label, placeholder, type, name }: InputProps) {
    const [inputValue, setInputValue] = useState("")

    function changeInputValue(value: string) {
        setInputValue(value)
    }

    return (
        <div className="flex flex-col justify-start gap-2">
            <label className="text-2xl">{label}</label>
            <input className="w-80 h-12 rounded-lg pl-2 text-gray" onChange={(e) => changeInputValue(e.target.value)} type={type} placeholder={placeholder} name={name} value={inputValue}/>
        </div>
    )
}