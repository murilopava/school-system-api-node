import { fastify } from 'fastify'
import { DatabaseAlunos } from './database/alunos-database.js'
import { DatabaseAlunosFake } from './database/alunos-database-fake.js'
import { request } from 'http'

const server = fastify()
const dbAlunos = new DatabaseAlunos
const dbAlunosFake = new DatabaseAlunosFake

server.get('/alunos', async (request, reply) => {
  const alunos = await dbAlunosFake.list()

  reply.status(200).send(alunos)
  return alunos
})

server.post('/aluno', (request, reply) => {
    
    const aluno = request.body
    
    dbAlunosFake.create(aluno.nome, aluno.turma, aluno.notas)

    dbAlunosFake.findAll();
    return reply.status(201).send(request.body)
    
})

server.delete('/aluno/:id', (request, reply) => {
    const id = request.params.id

    dbAlunosFake.delete(id)
    dbAlunosFake.findAll()
    return reply.status(200).send()
})

server.put('/aluno/:id', (request, reply) => {
    const id = request.params.id
    const aluno = request.body
    
    dbAlunosFake.put(id, aluno.nome, aluno.turma, aluno.notas)
})

server.listen({
    port: 3000
})