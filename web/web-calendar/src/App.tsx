import { FormEvent, useState } from "react"
import Button from "./components/button"
import Form from "./components/form"
import Input from "./components/input"
import Loading from "./components/loading"
import Login from "./components/login"
import Logo from "./components/logo"
import Message from "./components/message"
import Title from "./components/tittle"
import { api } from "./lib/api"

function App() {
  const [isLogin, setIsLogin] = useState(true)

  function changeLoginOrRegister() {
    setIsLogin(!isLogin)
  }

  async function handleCreateUser() {
    await api.post('/user/create', {
        name: 'Teste2',
        email: 'pelo@front1',
        password: '12345',
    })
  }

  return (
    <>
      {isLogin ? (
        <Login>
          <Logo/>
          <Title title="Bem-Vindo"/>
          <Message withCallAction={false} text="Digite seus dados para Entrar"/>
          <Form onSubmit={handleCreateUser}>
            <Input type="text" label="Email" placeholder="exemplo@teste.com" name="email"/>
            <Input type="password" label="Senha" placeholder="digite sua senha" name="password"/>
            <Button type="submit" buttonText="Entrar"/>
          </Form>
          <Message withCallAction={true} callAction="Clique aqui" text="para realizar o cadastro" onClick={changeLoginOrRegister}/>
        </Login>
      ): (
        <Login>
          <Logo/>
          <Title title="Bem-Vindo"/>
          <Message withCallAction={false} text="Digite seus dados para Registrar-se"/>
          <Form onSubmit={handleCreateUser}>
            <Input type="text" label="Nome" placeholder="fulano" name="name"/>
            <Input type="text" label="Email" placeholder="exemplo@teste.com" name="email"/>
            <Input type="password" label="Senha" placeholder="digite sua senha" name="password"/>
            <Button type="submit" buttonText="Registrar"/>
          </Form>
          <Message withCallAction={true} callAction="Clique aqui" text="para realizar o login" onClick={changeLoginOrRegister}/>
        </Login>
      )}
    
    </>
  )
}

export default App
