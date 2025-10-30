import 'dotenv/config'
import postgres from 'postgres'

const { PG_HOST, PG_DATABASE, PG_USER, PG_PASSWORD, PG_PORT } = process.env;

// O cliente "postgres" pode aceitar um objeto de configuração
export const sql = postgres({
  host: PG_HOST,        // Usa a variável DB_HOST
  database: PG_DATABASE,  // Usa a variável DB_DATABASE
  username: PG_USER,      // Usa a variável DB_USER
  password: PG_PASSWORD,  // Usa a variável DB_PASSWORD
  port: parseInt(PG_PORT, 10), // Converte a string da porta para número
  ssl: false, // Desabilita o SSL para conexões locais
});