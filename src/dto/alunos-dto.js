export class CreateAlunoDto {
    constructor({nome, turma, notas}) {
        this.nome = nome,
        this.turma = turma,
        this.notas = notas
    }
}

export class UpdateAlunoDto {
    constructor({nome, turma, notas}) {
        this.nome = nome,
        this.turma = turma,
        this.notas = notas
    }
}
