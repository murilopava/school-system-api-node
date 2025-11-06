import { fastify } from 'fastify'
import { DatabaseAlunos } from './database/alunos-database.js'
import { DatabaseAlunosFake } from './database/alunos-database-fake.js'
import { alunosRoutes } from './routes/alunos-routes.js'

const server = fastify()
const dbAlunos = new DatabaseAlunos
const dbAlunosFake = new DatabaseAlunosFake

alunosRoutes(server, dbAlunos)

server.listen({
    message: "Porta 3000",
    port: 3000
})