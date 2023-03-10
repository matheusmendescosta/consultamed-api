# Consultamed 📅

#### Api consultamed, agendamento simples e fácil

![](https://img.shields.io/static/v1?label=license&message=mit&color=df0460) ![](https://img.shields.io/static/v1?label=versão&message=1.0.0&color=df0460) ![](https://img.shields.io/static/v1?label=npm&message=9.5.0&color=199bba) ![](https://img.shields.io/static/v1?label=node&message=19.7.0&color=199bba) ![](https://img.shields.io/static/v1?label=Framework&message=Express.js&color=199bba) ![](https://img.shields.io/static/v1?label=ORM&message=Sequelize&color=199bba)

<h4 align="center"> 
	🚧  Consultamed 🚀 Em construção...  🚧
</h4>


### Preparação do ambiente de desenvolvimento

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySQL](https://dev.mysql.com/downloads/installer/), Você tamém pode utilizar uma ferramenta visual para banco de dados, particulamente gosto do [BeekeeperStudio](https://www.beekeeperstudio.io/get)
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o Back End (servidor)


- Primeiro passo execute o script *agendamento_development.sql* para criar o banco de dados e as tabelas

- Agora faça o clone do projeto
`git clone <https://github.com/matheusmendescosta/consultamed-api>`

- Na raiz do projeto crie um arquivo chamado** .env **e informe as credenciais do seu banco de dados
```
host= 'localhost'
username= 'seu_usuario'
password= 'sua_senha'
database='agendamento_development'
```
- crie também um arquivo chamado **consultamed.log** esse arquivo manterá todos os logs da api registrados

- Instale as dependências 
`npm install`
- Inicie o servidor com o comando
`npm run dev`

- Para ter acesso a documentação acesse a rota
`http://localhost:3000/documentacao/`

- Acesses as rotas via Insomnia 

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=consultamed&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fmatheusmendescosta%2Fconsultamed-api%2Fmain%2FInsomniaExportData)

### Features implementadas
- [x] Logs
- [x] Documentação
- [x] Rota paciente
- [x] Rota Medico
- [x] Rota Consulta
- [x] Rota Historico de Consulta