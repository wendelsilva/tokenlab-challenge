import { useState } from "react"
import Button from "./components/button"
import Form from "./components/form"
import Input from "./components/input"
import Loading from "./components/loading"
import Login from "./components/login"
import Logo from "./components/logo"
import Message from "./components/message"
import Title from "./components/tittle"

function App() {
  const [isLogin, setIsLogin] = useState(true)

  function changeLoginOrRegister() {
    setIsLogin(!isLogin)
  }

  return (
    <>
      {isLogin ? (
        <Login>
          <Logo/>
          <Title title="Bem-Vindo"/>
          <Message withCallAction={false} text="Digite seus dados para Entrar"/>
          <Form method="POST" action="">
            <Input type="text" label="Email" placeholder="exemplo@teste.com"/>
            <Input type="password" label="Senha" placeholder="digite sua senha"/>
            <Button type="submit" buttonText="Entrar"/>
          </Form>
          <Message withCallAction={true} callAction="Clique aqui" text="para realizar o cadastro" onClick={changeLoginOrRegister}/>
        </Login>
      ): (
        <Login>
          <Logo/>
          <Title title="Bem-Vindo"/>
          <Message withCallAction={false} text="Digite seus dados para Registrar-se"/>
          <Form method="POST" action="">
            <Input type="text" label="Nome" placeholder="fulano"/>
            <Input type="text" label="Email" placeholder="exemplo@teste.com"/>
            <Input type="password" label="Senha" placeholder="digite sua senha"/>
            <Button type="submit" buttonText="Registrar"/>
          </Form>
          <Message withCallAction={true} callAction="Clique aqui" text="para realizar o login" onClick={changeLoginOrRegister}/>
        </Login>
      )}
    
    </>
  )
}

export default App
