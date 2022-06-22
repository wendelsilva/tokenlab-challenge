import { ButtonProps } from "./types"

export default function Button({ type, buttonText }: ButtonProps) {
    return (
        <button className="bg-yellow text-black text-center px-12 py-2.5 rounded-lg mt-2 mb-4" type={type}>
            {buttonText}
        </button>
    ) 
}