import { FormProps } from "./types"
import { api } from "../../lib/api";

export default function Form({ children, onSubmit }: FormProps) {
    // async function handleCreateUser(event: FormEvent) {
    //     event?.preventDefault();

    //     await api.post('http://localhost:3333/user/create', {
    //         name: 'Teste',
    //         email: 'pelo@front',
    //         password: '12345',
    //     })
    //   }

    return (
        <form className="flex flex-col gap-2 justify-center items-center" onSubmit={onSubmit}>
            {children}
        </form>
    )
}