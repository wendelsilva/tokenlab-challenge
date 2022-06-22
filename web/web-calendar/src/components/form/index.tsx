import { FormProps } from "./types"

export default function Form({ method, action, children }: FormProps) {
    return (
        <form className="flex flex-col gap-2 justify-center items-center" action={action} method={method}>
            {children}
        </form>
    )
}