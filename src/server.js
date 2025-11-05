import { fastify } from 'fastify'
import { DatabaseAlunos } from './database/alunos-database.js'
import { DatabaseAlunosFake } from './database/alunos-database-fake.js'

const server = fastify()
const dbAlunos = new DatabaseAlunos
const dbAlunosFake = new DatabaseAlunosFake

server.get('/alunos', async (request, reply) => {
  const alunos = await dbAlunos.search()

  reply.status(200).send(alunos)
  return alunos
})

server.post('/aluno', async (request, reply) => {
    
    const aluno = request.body
    
    await dbAlunos.create(aluno.nome, aluno.turma, aluno.notas)

    await dbAlunos.search();
    return reply.status(201).send(request.body)
    
})

server.delete('/aluno/:id', async (request, reply) => {
    const id = request.params.id

    await dbAlunosFake.delete(id)
    dbAlunosFake.findAll()
    return reply.status(200).send()
})

server.put('/aluno/:id', async (request, reply) => {
    const id = request.params.id
    const aluno = request.body
    
    await dbAlunos.put(id, aluno.nome, aluno.turma, aluno.notas)
    reply.status(200).send('ataulizado')
})

server.listen({
    port: 3000
})