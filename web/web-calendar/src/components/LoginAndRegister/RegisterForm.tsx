import { FormEvent, useState } from "react"
import { api } from "../../lib/api"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import { useErrorMessage } from "../../hooks/useErrorMessage";

export default function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function clearForm() {
        setName('')
        setEmail('')
        setPassword('')
    }

    async function handleCreateUser(event: FormEvent) {
        event?.preventDefault();

        if(name === '' || email === '' || password === '') {
            const nullInputs = useErrorMessage('Preencha todos os campos', 4000)
            return nullInputs;
        } else {
            await api.post('/user', {
                name: name,
                email: email,
                password: password,
            }).then((response) => {
                if(response.status === 201) {
                    const successMessage = useSuccessMessage('Usuário cadastrado com sucesso', 1500)
                    setTimeout(() => {
                        navigate('/');
                    }, 1500);
                    clearForm();
                    return successMessage;
                }
            }).catch(error => {
                if(error.response.status === 409) {
                    const duplicatedEmail = useErrorMessage('Email já existente', 4000)
                    return duplicatedEmail;
                }
            })
        }
      }

    return (
        <>
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
                <ToastContainer />
            </form>
        </>
    )
}