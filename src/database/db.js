import 'dotenv/config'
import postgres from 'postgres'

const { PG_HOST, PG_DATABASE, PG_USER, PG_PASSWORD, PG_PORT } = process.env;

export const sql = postgres({
  host: PG_HOST,        
  database: PG_DATABASE, 
  username: PG_USER,     
  password: PG_PASSWORD,  
  port: parseInt(PG_PORT, 10), 
  ssl: false
});