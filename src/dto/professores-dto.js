export class CreateProfessorDto {
    constructor({nome, turma, disciplina}) {
        this.nome = nome,
        this.turma = turma,
        this.disciplina = disciplina
    }
}

export class UpdateProfessorDto {
    constructor({nome, turma, disciplina}) {
        this.nome = nome,
        this.turma = turma,
        this.disciplina = disciplina
    }
}