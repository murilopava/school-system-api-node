import { sql } from './db.js'
import { randomUUID } from 'crypto'
import { calcularMedia } from '../utils/calcularMedia.js'

export class DatabaseAlunos {
    async create(nome, turma, notas) {
        const id = randomUUID()
        
        const media = calcularMedia(notas)

        await sql`INSERT INTO alunos (id, nome, turma, notas, media) 
        VALUES (${id}, ${nome}, ${turma}, ${sql.json(notas)}, ${media})`;
    }

    async search(id) {
        let alunos

        if (id) {
            alunos = await sql`SELECT * FROM alunos WHERE id = ${id}`
        } else {
            alunos = await sql`SELECT * FROM alunos` 
        }

        return alunos
    }

    async put(id, nome, turma, notas) {
    
        const media = calcularMedia(notas)
        return await sql`UPDATE alunos SET nome = ${nome}, turma = ${turma}, notas = ${notas}, media = ${media} WHERE id = ${id}`

        return console.log('não encontrou!')
  }
}