import { FormEvent, useState } from "react"
import { api } from "../../lib/api"

export default function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleCreateUser(event: FormEvent) {
        if(name === '' || email === '' || password === '') {
            alert('preecnha os dados')
        }

        event?.preventDefault();

        await api.post('/user/create', {
            name: name,
            email: email,
            password: password,
        })
      }

    return (
        <form className="flex flex-col justify-center items-center gap-2 mt-4" onSubmit={handleCreateUser}>
            <div className="flex flex-col">
                <label htmlFor="name" className="text-2xl">
                    Nome
                </label>
                <input 
                    className="w-80 h-12 rounded-lg pl-2 text-gray" 
                    type="text" 
                    placeholder="fulano" 
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="email" className="text-2xl">
                    Email
                </label>
                <input 
                    className="w-80 h-12 rounded-lg pl-2 text-gray" 
                    type="email" 
                    placeholder="exemplo@teste.com" 
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="flex flex-col">
                <label htmlFor="password" className="text-2xl">
                    Senha
                </label>
                <input 
                    className="w-80 h-12 rounded-lg pl-2 text-gray" 
                    type="password" 
                    placeholder="digite sua senha" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <input 
                className="bg-yellow text-black text-center py-2 w-1/2 rounded-lg mt-2 mb-4 cursor-pointer" 
                type="submit" 
                value="Registrar" 
            />
        </form>
    )
}