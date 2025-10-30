import { fastify } from 'fastify'
import { DatabaseAlunos } from './database/alunos-database.js'

const server = fastify()
const dbAlunos = new DatabaseAlunos

server.get('/alunos', async (request, reply) => {
  const alunos = await dbAlunos.list()

  reply.status(200).send(alunos)
  return alunos
})

server.post('/aluno', (request, reply) => {
    
    const aluno = request.body
    
    dbAlunos.create(aluno.nome, aluno.turma, aluno.notas, aluno.media)

    return reply.status(201).send(request.body)
    
})

server.put('/aluno/:aluno', (request, reply) => {
    const nomeAluno = request.params.aluno
    const {turma, notas, media} = request.body
    
    const alunoIndex = alunos.findIndex(a => a.nome === nomeAluno);

  if (alunoIndex !== -1) {
    // Atualiza o aluno existente
    alunos[alunoIndex] = { ...alunos[alunoIndex], turma, notas, media };
    reply.status(202).send('Aluno atualizado com sucesso');
  } else {
    // Se não existir, adiciona novo
    alunos.push({ aluno: nomeAluno, turma, notas, media });
    reply.status(201).send('Novo aluno adicionado');
  }


})

server.listen({
    port: 3000
})