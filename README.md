#  School System API (Node.js)

API back-end para gerenciamento escolar, construída com **Node.js**, **Fastify**, **PostgreSQL**, **Zod** e **DTOs**.  
O objetivo do projeto é fornecer uma base sólida, modular e escalável para lidar com recursos como **alunos**, **professores**, **turmas**, **notas** e regras de validação robustas.

---

##  Tecnologias Utilizadas

- **Node.js** — Ambiente de execução
- **Fastify** — Framework HTTP rápido e minimalista
- **Zod** — Validação de dados (schemas)
- **DTO (Data Transfer Object)** — Padronização de entrada e saída de dados
- **PostgreSQL** — Banco de dados relacional
- **postgres.js** — Driver SQL
- **Crypto (UUID)** — Geração de IDs únicos
- **ESM Modules** — Organização moderna do código

---

## 📁 Estrutura do Projeto

```text
school-system-api-node/
│
├── src/
│   ├── routes/
│   │   ├── alunos-routes.js
│   │   ├── professores-routes.js
│   │
│   ├── schemas/
│   │   ├── alunos-schema.js
│   │   ├── professores-schema.js
│   │
│   ├── dto/
│   │   ├── create-aluno-dto.js
│   │   ├── update-aluno-dto.js
│   │   ├── create-professor-dto.js
│   │
│   ├── database/
│   │   ├── alunos-database.js
│   │   ├── professores-database.js
│   │   ├── db.js
│   │
│   ├── utils/
│   │   ├── calcularMedia.js
│   │
│   ├── server.js
│
└── package.json
````
##  Validações com Zod

O projeto utiliza **Zod** para garantir que todos os dados enviados nas requisições sejam validados antes de chegar à lógica de negócio.

As validações são responsáveis por:
- Verificar tipos de dados
- Garantir campos obrigatórios
- Evitar valores inválidos ou inconsistentes
- Retornar erros claros e padronizados para o cliente

Esse processo aumenta a segurança da aplicação e reduz erros em tempo de execução.

---

##  DTOs (Data Transfer Objects)

O padrão **DTO (Data Transfer Object)** é utilizado para padronizar os dados que entram e saem da aplicação.

Os DTOs têm como objetivo:
- Centralizar a transformação de dados
- Garantir consistência entre rotas e banco de dados
- Evitar o envio ou recebimento de informações desnecessárias
- Manter a aplicação organizada e de fácil manutenção

Cada operação (criação, atualização, etc.) possui seu próprio DTO.

---

## 🗄 Banco de Dados (PostgreSQL)

A aplicação utiliza **PostgreSQL** como banco de dados relacional.

O acesso ao banco é organizado em classes específicas para cada entidade, seguindo o princípio de separação de responsabilidades.  
Essa abordagem facilita a manutenção, testes e futuras expansões do sistema.

---

## 🌐 Endpoints da API

A API segue o padrão **REST**, com rotas bem definidas e responsabilidades claras.

### 🔹 Alunos
- Criar aluno
- Listar alunos
- Buscar aluno por ID
- Atualizar aluno
- Remover aluno

### 🔹 Professores
- Criar professor
- Listar professores
- Buscar professor por ID
- Atualizar professor
- Remover professor

Todas as rotas contam com validação de dados e tratamento adequado de erros.

---

##  Objetivo do Projeto

Este projeto foi desenvolvido com foco em:
- Boas práticas no desenvolvimento de APIs REST
- Validação de dados no back-end
- Uso profissional de DTOs
- Organização por camadas
- Código limpo, escalável e de fácil manutenção
