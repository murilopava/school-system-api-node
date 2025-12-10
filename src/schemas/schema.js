import { z } from "zod";

const turmasValidas = ['1A', '2A', '1B', '2B'];
const disciplinasValidas = [
  'matemática', 'física', 'português', 'geografia',
  'história', 'inglês', 'biologia', 'química'
];

export class validarEntrada {
  id (id) {
    IdSchema.parse(id)
  }
  validarAluno (aluno) {
    AlunoSchema.parse(aluno)
  }
  validarProfessor(professor) {
    ProfessorSchema.parse(professor)
  }
}

const ProfessorSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(3, "Tamanho de nome inválido (min 3).")
    .max(30, "Tamanho de nome inválido (max 30)."),

  turma: z
    .array(z.string().trim().refine(val => turmasValidas.includes(val), 
        "Turma inválida. Use apenas 1A, 2A, 1B ou 2B"
      )
    )
    .min(1, "Informe pelo menos uma turma"),

  disciplina: z
    .array(z.string().refine(val => disciplinasValidas.includes(val), {
      message: "Disciplina inválida."
    }) 
  ) 
});

const AlunoSchema = z.object({
  nome: z.string().trim().min(1, "Preencha o nome."),
  turma: z
    .string()
    .trim()
    .refine(val => turmasValidas.includes(val), {
      error: "Turma inválida"
    }),

  notas: z.array(
    z.object({
      disciplina: z
        .string()
        .refine(val => disciplinasValidas.includes(val), {
          error: "Disciplina inválida"
        }),

      nota: z
        .number()
        .min(0, "Nota mínima é 0")
        .max(10, "Nota máxima é 10")
    })
  )
});

const IdSchema = z
  .string()
  .length(36, "ID inválido");
