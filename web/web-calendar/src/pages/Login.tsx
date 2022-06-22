import LoginForm from "../components/LoginAndRegister/LoginForm";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="bg-gray w-50% py-2 px-12 rounded-lg flex flex-col justify-center items-center">
            <Logo />
            <span className="text-4xl">Bem-Vindo</span>
            <span>Digite seus dados para Entrar</span>
            <LoginForm />
            <span><Link className="text-yellow underline cursor-pointer" to="/register">Clique aqui</Link> para Registrar</span>
        </div>
    )
}