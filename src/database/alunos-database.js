import { sql } from './db.js'
import { randomUUID } from 'crypto'

export class DatabaseAlunos {
    async create(nome, turma, notas, media) {
        const id = randomUUID()

        await sql`INSERT INTO alunos (id, nome, turma, notas, media) 
        VALUES (${id}, ${nome}, ${turma}, ${sql.json(notas)}, ${media})`;
    }

    async list() {
        let alunos

        alunos = await sql`SELECT * FROM alunos` 

        return alunos
    }

}