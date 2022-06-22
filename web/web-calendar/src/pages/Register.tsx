import RegisterForm from "../components/LoginAndRegister/RegisterForm";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="bg-gray w-50% py-2 px-12 rounded-lg flex flex-col justify-center items-center">
            <Logo />
            <span className="text-4xl">Bem-Vindo</span>
            <span>Digite seus dados para realizar Registro</span>
            <RegisterForm />
            <span><Link className="text-yellow underline cursor-pointer" to="/">Clique aqui</Link> para Entrar</span>
        </div>
    )
}