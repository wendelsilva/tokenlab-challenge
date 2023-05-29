import { FormEvent, useState } from "react"
import { api } from "../../lib/api"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSuccessMessage } from "../../hooks/useSuccessMessage";
import { useErrorMessage } from "../../hooks/useErrorMessage";

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function clearForm() {
        setEmail('')
        setPassword('')
    }

    async function handleLoginUser(event: FormEvent) {
        event?.preventDefault()

        if(email === '' && password === '') {
            const nullInputs = useErrorMessage('Preencha todos os campos', 4000)
            return nullInputs;
        } else {
            await api.post('/authenticate', {
                email: email,
                password: password,
            }).then((response) => {
                if(response.status === 200) {
                    const successMessage = useSuccessMessage('Entrou com sucesso', 1500)
                    setTimeout(() => {
                        navigate('/home');
                    }, 1000);
                    clearForm();
                    return successMessage;
                }
            }).catch(error => {
                if(error.response.status === 401) {
                    const wrongPasssword = useErrorMessage('Email ou Senha incorretos', 4000)
                    return wrongPasssword;
                }
            })
        }
      }

    return (
        <form onSubmit={handleLoginUser} className="flex flex-col justify-center items-center gap-2 mt-4" >
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
                value="Entrar"
            />
            <ToastContainer />
        </form>
    )
}