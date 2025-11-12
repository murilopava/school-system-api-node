export function validarProfessores({nome, turma, disciplina}) {
    turmaValida = ['1A', '2A', '1B', '2B']
    disciplinaValida = ['matemática', 'física', 'português', 'geografia', 'história', 'inglês', 'biologia', 'química']

    if (nome.length <= 2 || nome.length > 30) {
        throw new Error('Tamanho de nome de professor inválida.')
    }

    if (!turmaValida.includes(turma)) {
        throw new Error('Turma inválida. Use apenas 1A, 2A, 1B ou 2B')
    }

    if (!disciplinaValida.includes(disciplina)) {
        throw new Error('Disciplina inválida.')
    }
}