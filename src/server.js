import { fastify } from 'fastify'

const server = fastify()

const alunos = []

server.get('/alunos', (req, rep) => {
    rep.send(alunos)
})

server.post('/aluno', (req, rep) => {
    
    const aluno = req.body
    
    alunos.push(aluno)

    return rep.status(201).send()
    
})

server.listen({
    port: 3000
})