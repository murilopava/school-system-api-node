CREATE TABLE IF NOT EXISTS alunos (
    id UUID PRIMARY KEY,
    nome TEXT,
    turma TEXT,
    notas JSONB,
    media NUMERIC(3,1)
);

CREATE TABLE IF NOT EXISTS professores (
    id UUID PRIMARY KEY,
    nome TEXT,
    turma TEXT,
    disciplina TEXT
);