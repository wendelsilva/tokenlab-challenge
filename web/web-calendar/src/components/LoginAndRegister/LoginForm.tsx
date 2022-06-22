import { FormEvent, useState } from "react"
import { api } from "../../lib/api"
import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    function nullInputs() {
        toast.error("Preencha todos os campos", {autoClose: 4000});
    }

    function wrongPassword() {
        toast.error("Email ou Senha incorretos", {autoClose: 4000})
    }

    function successMessage() {
        toast.success("Entrada feita com sucesso", {autoClose: 1500})
    }

    function clearForm() {
        setEmail('')
        setPassword('')
    }

    async function handleLoginUser(event: FormEvent) {
        event?.preventDefault()

        if(email === '' && password === '') {
           nullInputs();
        } else {
            await api.post('/authenticate', {
                email: email,
                password: password,
            }).then((response) => {
                if(response.status === 201) {
                    setTimeout(() => {
                        successMessage();
                    }, 500);
                    clearForm();
                    navigate('/home');
                }
            }).catch(error => {
                if(error.response.status === 403) {
                    wrongPassword();
                }
            })
        }
      }

    return (
        <form className="flex flex-col justify-center items-center gap-2 mt-4" onSubmit={handleLoginUser}>
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