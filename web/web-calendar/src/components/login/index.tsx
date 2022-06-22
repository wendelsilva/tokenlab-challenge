import { LoginProps } from "./types"

export default function Login({ children }: LoginProps) {
    return (
        <div className="bg-gray px-16 py-2 flex flex-col justify-center items-center rounded-lg w-50% gap-2">
            {children}
        </div>
    )
}