![imagem da tela de login](https://github.com/wendelsilva/tokenlab-challenge/blob/main/web/web-calendar/src/assets/login-screen.png?raw=true)
# Web Calendar
## tokenlab-challenge

Desafio Técnico token lab, o desafio consistiu em um calendário de eventos com backend e frontend.

## Tecnologias Utilizadas
### FrontEnd
- [ ] Reactjs
- [ ] TailwindCSS
### Backend
- [ ] Nodejs
- [ ] Expresjs
- [ ] PrismaORM
- [ ] Sqlite

## BackEnd
Para executar o backend entre na pasta server e execute os seguintes comandos

Instalar dependências
```
npm install
```
Dentro da pasta server crie um arquivo .env e cole o seguinte comando
```
DATABASE_URL="file:./dev.db"
```
Rodar Migrations
```
npx prisma migrate dev
```
Executar BackEnd
```
npm run dev
```
Caso queira acessar o backend o prisma disponibiliza um cliente web para editar o banco de dados, para isso execute
```
npx prisma studio
```
## FrontEnd
Para executar o frontend entre na pasta web/web-calendar e execute os seguintes comandos

Instalar dependências
```
npm install
```
Executar FrontEnd
```
npm run dev
```
## Notion
Link para o notion do projeto contendo mais informações
[Notion do Desafio](https://www.notion.so/Desafio-T-cnico-TokenLab-da40acfc0c53418db281a4d72fac76a2)
