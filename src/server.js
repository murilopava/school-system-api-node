import { fastify } from 'fastify'
import cors from '@fastify/cors'
import { fastifyStatic } from '@fastify/static'
import path from 'path';
import { fileURLToPath } from 'url';

import { DatabaseAlunos } from './database/alunos-database.js'
import { alunosRoutes } from './routes/alunos-routes.js'
import { DatabaseProfessores } from './database/professores-database.js'
import { professoresRoutes } from './routes/professores-routes.js'

const server = fastify()

await server.register(cors, {origin: true})
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

await server.register(fastifyStatic, {
    root: path.join(__dirname, '..', '/public'),
    prefix: '/'
})

const dbAlunos = new DatabaseAlunos
const dbProfessores = new DatabaseProfessores

alunosRoutes(server, dbAlunos)
professoresRoutes(server, dbProfessores)

try {
    server.listen({
        port: 3000},
    console.log('Rodando na porta 3000'))
} catch(err) {
    console.error('Falha ao iniciar o servidor, erro: ', err)
    process.exit(1)
}