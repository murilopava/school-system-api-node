export class validarProfessores {

    entrada ({nome, turma, disciplina}) {

        if (!nome || !turma || !disciplina) {
            throw new Error('Preencha todos os campos!')
        }

        const turmaValida = ['1A', '2A', '1B', '2B']
        const disciplinaValida = ['matemática', 'física', 'português', 'geografia', 'história', 'inglês', 'biologia', 'química']
    
        if (nome.length <= 2 || nome.length > 30) {
            throw new Error('Tamanho de nome de professor inválida.')
        }
    
        for (let indice in turma) {
            console.log(indice)
            if (!turmaValida.includes(turma[indice])) {
                throw new Error('Turma inválida. Use apenas 1A, 2A, 1B ou 2B')
            }
        }
    
        if (!disciplinaValida.includes(disciplina)) {
            throw new Error('Disciplina inválida.')
        }
    }

    id (id) {
        
    }
}